import { prisma } from './prisma'
import { Plan } from '@prisma/client'

export async function createUser(data: {
  email: string
  name: string
  image?: string
}) {
  return await prisma.user.create({
    data: {
      ...data,
      credits: 200, // 신규 사용자 200 크레딧 지급
      plan: Plan.FREE,
    },
  })
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    include: {
      contents: {
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
      transactions: {
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
    },
  })
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      contents: {
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
    },
  })
}

export async function updateUserCredits(userId: string, credits: number) {
  return await prisma.user.update({
    where: { id: userId },
    data: { credits },
  })
}

export async function updateUserPlan(userId: string, plan: Plan) {
  return await prisma.user.update({
    where: { id: userId },
    data: { plan },
  })
} 