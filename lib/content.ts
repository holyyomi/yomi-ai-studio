import { prisma } from './prisma'
import { ContentType, ContentStatus } from '@prisma/client'

export async function createContent(data: {
  userId: string
  type: ContentType
  title: string
  topic: string
  persona?: string
  target?: string
  emphasis?: string
  input: any
  creditsUsed: number
}) {
  return await prisma.content.create({
    data: {
      ...data,
      outputs: {},
      status: ContentStatus.PENDING,
    },
  })
}

export async function updateContentOutputs(
  contentId: string,
  outputs: any,
  status: ContentStatus = ContentStatus.COMPLETED
) {
  return await prisma.content.update({
    where: { id: contentId },
    data: {
      outputs,
      status,
    },
  })
}

export async function getUserContents(userId: string, limit: number = 20) {
  return await prisma.content.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: limit,
  })
}

export async function getContentById(id: string) {
  return await prisma.content.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  })
} 