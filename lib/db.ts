import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

// 헬퍼 함수들
export class DatabaseService {
  // 사용자 관련
  static async getUserByEmail(email: string) {
    return await db.user.findUnique({
      where: { email },
      include: {
        transactions: {
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    })
  }

  static async getUserById(id: string) {
    return await db.user.findUnique({
      where: { id },
      include: {
        contents: {
          orderBy: { createdAt: 'desc' },
          take: 10
        },
        transactions: {
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    })
  }

  static async updateUserCredits(userId: string, credits: number) {
    return await db.user.update({
      where: { id: userId },
      data: { credits }
    })
  }

  static async getUserCount() {
    return await db.user.count({
      where: { isActive: true }
    })
  }

  // 콘텐츠 관련
  static async createContent(data: {
    userId: string
    type: any
    title: string
    inputData: any
    platforms: string[]
    creditsUsed: number
  }) {
    return await db.content.create({
      data: {
        ...data,
        outputs: {},
        status: 'PENDING'
      }
    })
  }

  static async updateContentStatus(
    id: string, 
    status: any,
    outputs?: any
  ) {
    return await db.content.update({
      where: { id },
      data: {
        status,
        ...(outputs && { outputs }),
        updatedAt: new Date()
      }
    })
  }

  // 거래 관련
  static async createTransaction(data: {
    userId: string
    type: any
    amount: number
    credits: number
    planType?: any
    description?: string
    paymentId?: string
    orderId?: string
  }) {
    return await db.transaction.create({
      data: {
        ...data,
        status: 'PENDING'
      }
    })
  }

  // 구독 정보 업데이트
  static async updateUserSubscription(userId: string, data: {
    plan: any
    credits: number
    planExpiry: Date
  }) {
    return await db.user.update({
      where: { id: userId },
      data: {
        plan: data.plan,
        credits: data.credits,
        planExpiry: data.planExpiry,
        updatedAt: new Date()
      }
    })
  }

  // 결제 상태 업데이트
  static async updatePaymentStatus(orderId: string, status: string) {
    return await db.transaction.updateMany({
      where: { orderId },
      data: { 
        status: status === 'DONE' ? 'COMPLETED' : 'FAILED',
        updatedAt: new Date()
      }
    })
  }

  // 주문 ID로 거래 조회
  static async getTransactionByOrderId(orderId: string) {
    return await db.transaction.findFirst({
      where: { orderId }
    })
  }
}
