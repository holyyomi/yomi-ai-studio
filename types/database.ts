import { User, Content, Transaction, ApiKey, Plan, ContentType, ContentStatus, TransactionType, PaymentStatus, Platform } from '@prisma/client'

export type {
  User,
  Content,
  Transaction,
  ApiKey,
  Plan,
  ContentType,
  ContentStatus,
  TransactionType,
  PaymentStatus,
  Platform
}

// 확장된 타입들
export interface UserWithRelations extends User {
  contents?: Content[]
  transactions?: Transaction[]
  apiKeys?: ApiKey[]
}

export interface ContentWithUser extends Content {
  user: User
}

export interface TransactionWithUser extends Transaction {
  user: User
}

// 요청/응답 타입들
export interface CreateUserRequest {
  email: string
  name: string
  password?: string
}

export interface CreateContentRequest {
  type: ContentType
  title: string
  inputData: {
    topic?: string
    persona?: string
    audience?: string
    productName?: string
    productUrl?: string
    features?: string
    price?: string
    target?: string
  }
  platforms: Platform[]
}

export interface ContentOutput {
  platform: Platform
  title: string
  content: string
  hashtags?: string[]
  imagePrompt?: string
  imageUrl?: string
  characterCount: number
}

export interface PlatformUsage {
  [key: string]: {
    count: number
    credits: number
  }
}

export interface AnalyticsData {
  totalUsers: number
  activeUsers: number
  newUsers: number
  contentsCreated: number
  creditsUsed: number
  revenue: number
  subscriptions: number
  platformUsage: PlatformUsage
}
