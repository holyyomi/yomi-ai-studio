import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: '분석 API 준비 중입니다.' 
  })
}
