import { getServerSession } from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import { redirect } from 'next/navigation'
import { db } from './db'

export const authOptions: NextAuthOptions = {
  // NextAuth 설정은 route.ts와 동일
}

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  
  if (!session?.user?.id) {
    return null
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      apiKeys: true,
      contents: {
        orderBy: { createdAt: 'desc' },
        take: 5
      }
    }
  })

  return user
}

export async function requireAuth() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return user
}

export async function requireAdmin() {
  const user = await getCurrentUser()
  
  if (!user || !user.isAdmin) {
    redirect('/dashboard')
  }
  
  return user
}

// 20명 제한 체크
export async function checkUserLimit() {
  const userCount = await db.user.count({
    where: { isActive: true }
  })
  
  return userCount < (Number(process.env.MAX_USERS) || 20)
}
