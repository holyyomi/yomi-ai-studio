import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { checkUserLimit } from '@/lib/auth'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email('올바른 이메일을 입력해주세요'),
  password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다'),
  name: z.string().min(2, '이름은 2자 이상이어야 합니다')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name } = registerSchema.parse(body)

    // 20명 제한 체크
    const canRegister = await checkUserLimit()
    if (!canRegister) {
      return NextResponse.json(
        { error: '현재 베타 테스트 정원이 마감되었습니다. 대기자 명단에 등록해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 중복 체크
    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: '이미 등록된 이메일입니다.' },
        { status: 400 }
      )
    }

    // 비밀번호 해시화
    const hashedPassword = await bcrypt.hash(password, 12)

    // 관리자 권한 체크
    const isAdmin = email === process.env.ADMIN_EMAIL

    // 사용자 생성
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        isAdmin,
        credits: 200 // 가입 시 200 크레딧 제공
      }
    })

    // 비밀번호 제거 후 반환
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      message: '회원가입이 완료되었습니다!',
      user: userWithoutPassword
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Registration error:', error)
    return NextResponse.json(
      { error: '회원가입 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 