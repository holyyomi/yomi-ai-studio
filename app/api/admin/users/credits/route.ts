import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.isAdmin) {
      return NextResponse.json(
        { error: '관리자 권한이 필요합니다.' },
        { status: 403 }
      )
    }

    const { userId, amount } = await request.json()

    const user = await db.user.findUnique({
      where: { id: userId }
    })
    
    if (!user) {
      return NextResponse.json(
        { error: '사용자를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 크레딧 업데이트
    const newCredits = Math.max(0, user.credits + amount)
    await db.user.update({
      where: { id: userId },
      data: { credits: newCredits }
    })

    // 거래 기록 생성
    await db.transaction.create({
      data: {
        userId,
        type: amount > 0 ? 'BONUS' : 'DEDUCTION',
        amount: 0,
        credits: Math.abs(amount),
        description: `관리자 크레딧 ${amount > 0 ? '지급' : '차감'}`,
        status: 'COMPLETED'
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Credit adjustment error:', error)
    return NextResponse.json(
      { error: '크레딧 조정 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 