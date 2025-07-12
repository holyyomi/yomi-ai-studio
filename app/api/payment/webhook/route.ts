import { NextRequest, NextResponse } from 'next/server'
import { DatabaseService } from '@/lib/db'
import { tossPayment } from '@/lib/payment'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 웹훅 데이터 검증
    const { eventType, data } = body
    
    if (eventType === 'Payment.StatusChanged') {
      const { paymentKey, orderId, status } = data
      
      // 결제 상태 업데이트
      await DatabaseService.updatePaymentStatus(orderId, status)
      
      // 결제 취소/환불 처리
      if (status === 'CANCELLED' || status === 'PARTIAL_CANCELLED') {
        await handlePaymentCancellation(paymentKey, orderId)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handlePaymentCancellation(paymentKey: string, orderId: string) {
  try {
    // 해당 거래 찾기
    const transaction = await DatabaseService.getTransactionByOrderId(orderId)
    if (!transaction) return

    // 사용자 크레딧 차감
    const user = await DatabaseService.getUserById(transaction.userId)
    if (user) {
      await DatabaseService.updateUserCredits(
        transaction.userId, 
        Math.max(0, user.credits - transaction.credits)
      )
    }

    // 환불 거래 기록 생성
    await DatabaseService.createTransaction({
      userId: transaction.userId,
      type: 'REFUND',
      amount: -transaction.amount,
      credits: -transaction.credits,
      paymentId: paymentKey,
      orderId,
      description: '결제 취소로 인한 환불'
    })
  } catch (error) {
    console.error('Payment cancellation handling error:', error)
  }
}
