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
        apiKeys: true,
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
        apiKeys: true,
        contents: {
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
    type: 'PERSONAL' | 'PRODUCT'
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
    status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED',
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
    type: 'PURCHASE' | 'REFUND' | 'BONUS' | 'DEDUCTION'
    amount: number
    credits: number
    planType?: 'PRO' | 'PREMIUM' | 'VIP'
    description?: string
  }) {
    return await db.transaction.create({
      data: {
        ...data,
        status: 'PENDING'
      }
    })
  }

  // API 키 관리
  static async saveApiKey(data: {
    userId: string
    platform: string
    keyData: string
  }) {
    return await db.apiKey.upsert({
      where: {
        userId_platform: {
          userId: data.userId,
          platform: data.platform as any
        }
      },
      update: {
        keyData: data.keyData,
        isActive: true,
        updatedAt: new Date()
      },
      create: data as any
    })
  }

  // 분석 데이터
  static async updateDailyAnalytics(date: Date, data: {
    totalUsers?: number
    activeUsers?: number
    newUsers?: number
    contentsCreated?: number
    creditsUsed?: number
    revenue?: number
    subscriptions?: number
  }) {
    return await db.analytics.upsert({
      where: { date },
      update: {
        ...data,
        updatedAt: new Date()
      },
      create: {
        date,
        ...data
      }
    })
  }

  // 시스템 설정
  static async getSystemConfig(key: string) {
    const config = await db.systemConfig.findUnique({
      where: { key }
    })
    return config?.value
  }

  static async setSystemConfig(key: string, value: string) {
    return await db.systemConfig.upsert({
      where: { key },
      update: { value, updatedAt: new Date() },
      create: { key, value }
    })
  }
}
