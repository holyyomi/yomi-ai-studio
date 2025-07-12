import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 임시 응답
    return NextResponse.json({ 
      status: 'healthy',
      timestamp: new Date().toISOString(),
      message: '서버가 정상적으로 동작하고 있습니다.'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 