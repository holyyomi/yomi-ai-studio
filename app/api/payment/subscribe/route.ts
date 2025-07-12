import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { DatabaseService } from '@/lib/db'
import { tossPayment } from '@/lib/payment'
import { z } from 'zod'

const subscribeSchema = z.object({
  planType: z.enum(['PRO', 'PREMIUM', 'VIP']),
  paymentKey: z.string(),
  orderId: z.string(),
  amount: z.number()
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { planType, paymentKey, orderId, amount } = subscribeSchema.parse(body)

    // 플랜 정보 확인
    const planInfo = tossPayment.getPlanInfo(planType)
    if (planInfo.price !== amount) {
      return NextResponse.json(
        { error: '결제 금액이 올바르지 않습니다.' },
        { status: 400 }
      )
    }

    // 토스페이먼츠 결제 승인
    const paymentResult = await tossPayment.confirmPayment(paymentKey, orderId, amount)

    if (paymentResult.status !== 'DONE') {
      return NextResponse.json(
        { error: '결제 승인에 실패했습니다.' },
        { status: 400 }
      )
    }

    // 사용자 정보 업데이트
    const user = await DatabaseService.getUserById(session.user.id)
    if (!user) {
      return NextResponse.json(
        { error: '사용자를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 구독 정보 업데이트
    const planExpiry = new Date()
    planExpiry.setMonth(planExpiry.getMonth() + 1) // 1개월 후

    await DatabaseService.updateUserSubscription(session.user.id, {
      plan: planType,
      credits: user.credits + planInfo.credits,
      planExpiry
    })

    // 거래 기록 생성
    await DatabaseService.createTransaction({
      userId: session.user.id,
      type: 'PURCHASE',
      amount,
      credits: planInfo.credits,
      planType,
      paymentId: paymentResult.paymentKey,
      orderId,
      description: `${planInfo.name} 구독`
    })

    return NextResponse.json({
      success: true,
      message: '구독이 성공적으로 완료되었습니다.',
      plan: planType,
      credits: planInfo.credits,
      expiry: planExpiry
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: '구독 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
