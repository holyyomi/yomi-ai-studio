import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' },
        { status: 401 }
      )
    }

    const content = await db.content.findFirst({
      where: {
        id: params.id,
        userId: session.user.id
      }
    })

    if (!content) {
      return NextResponse.json(
        { error: '콘텐츠를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      id: content.id,
      status: content.status,
      title: content.title,
      outputs: content.outputs,
      platforms: content.platforms,
      creditsUsed: content.creditsUsed,
      createdAt: content.createdAt,
      updatedAt: content.updatedAt
    })

  } catch (error) {
    console.error('Content status error:', error)
    return NextResponse.json(
      { error: '상태 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 