interface PaymentRequest {
  amount: number
  orderId: string
  orderName: string
  customerEmail: string
  customerName: string
  planType: 'PRO' | 'PREMIUM' | 'VIP'
}

interface PaymentResponse {
  paymentKey: string
  orderId: string
  amount: number
  status: string
}

export class TossPaymentService {
  private clientKey: string
  private secretKey: string
  private baseUrl: string

  constructor() {
    this.clientKey = process.env.TOSS_CLIENT_KEY || ''
    this.secretKey = process.env.TOSS_SECRET_KEY || ''
    this.baseUrl = 'https://api.tosspayments.com/v1'
  }

  // 결제 승인
  async confirmPayment(paymentKey: string, orderId: string, amount: number): Promise<PaymentResponse> {
    const response = await fetch(`${this.baseUrl}/payments/confirm`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(this.secretKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || '결제 승인에 실패했습니다.')
    }

    return await response.json()
  }

  // 결제 취소
  async cancelPayment(paymentKey: string, cancelReason: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/payments/${paymentKey}/cancel`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(this.secretKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cancelReason
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || '결제 취소에 실패했습니다.')
    }
  }

  // 결제 정보 조회
  async getPayment(paymentKey: string): Promise<PaymentResponse> {
    const response = await fetch(`${this.baseUrl}/payments/${paymentKey}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(this.secretKey + ':').toString('base64')}`,
      }
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || '결제 정보 조회에 실패했습니다.')
    }

    return await response.json()
  }

  // 주문 ID 생성
  generateOrderId(): string {
    return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // 플랜별 가격 정보
  getPlanInfo(planType: 'PRO' | 'PREMIUM' | 'VIP') {
    const plans = {
      PRO: { price: 299000, credits: 1000, name: 'Pro 플랜' },
      PREMIUM: { price: 499000, credits: 2000, name: 'Premium 플랜' },
      VIP: { price: 999000, credits: 5000, name: 'VIP 플랜' }
    }
    return plans[planType]
  }
}

export const tossPayment = new TossPaymentService() 