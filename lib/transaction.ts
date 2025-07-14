import { prisma } from './prisma'
import { TransactionType, TransactionStatus } from '@prisma/client'

export async function createTransaction(data: {
  userId: string
  type: TransactionType
  amount: number
  credits: number
  description: string
  paymentId?: string
}) {
  return await prisma.transaction.create({
    data: {
      ...data,
      status: TransactionStatus.PENDING,
    },
  })
}

export async function updateTransactionStatus(
  transactionId: string,
  status: TransactionStatus
) {
  return await prisma.transaction.update({
    where: { id: transactionId },
    data: { status },
  })
}

export async function getUserTransactions(userId: string, limit: number = 20) {
  return await prisma.transaction.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: limit,
  })
} 