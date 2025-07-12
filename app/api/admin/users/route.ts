import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: '사용자 관리 API 준비 중입니다.' 
  })
}
