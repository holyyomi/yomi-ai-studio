import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    // 임시 응답
    return NextResponse.json({ 
      success: true, 
      status: 'COMPLETED',
      message: '콘텐츠 상태 확인 기능 준비 중입니다.'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 