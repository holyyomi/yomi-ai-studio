import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 임시 응답
    return NextResponse.json({ 
      success: true, 
      message: 'AI 콘텐츠 생성 기능 준비 중입니다.',
      content: {
        title: '샘플 콘텐츠',
        platforms: ['INSTAGRAM', 'FACEBOOK'],
        content: '샘플 콘텐츠입니다.'
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
