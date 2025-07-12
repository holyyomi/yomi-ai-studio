import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db, DatabaseService } from '@/lib/db'
import { aiGenerator } from '@/lib/openai'
import { contentSchema } from '@/lib/validations'
import { calculateCredits } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: '로그인이 필요합니다.' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = contentSchema.parse(body)

    // 사용자 정보 조회
    const user = await DatabaseService.getUserById(session.user.id)
    if (!user) {
      return NextResponse.json(
        { error: '사용자를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 크레딧 계산
    const requiredCredits = calculateCredits(validatedData.platforms, body.includeImages)
    
    if (user.credits < requiredCredits) {
      return NextResponse.json(
        { error: '크레딧이 부족합니다.' },
        { status: 400 }
      )
    }

    // 콘텐츠 생성 요청 생성
    const generationRequest = {
      type: validatedData.type,
      title: validatedData.title,
      inputData: {
        ...validatedData.inputData,
        generateImages: body.includeImages
      },
      platforms: validatedData.platforms
    }

    // 데이터베이스에 콘텐츠 레코드 생성
    const content = await DatabaseService.createContent({
      userId: session.user.id,
      type: validatedData.type,
      title: validatedData.title,
      inputData: generationRequest,
      platforms: validatedData.platforms,
      creditsUsed: requiredCredits
    })

    // 백그라운드에서 AI 콘텐츠 생성
    generateContentAsync(content.id, generationRequest, session.user.id, requiredCredits)

    return NextResponse.json({
      success: true,
      contentId: content.id,
      message: '콘텐츠 생성이 시작되었습니다.'
    })

  } catch (error) {
    console.error('Content generation error:', error)
    return NextResponse.json(
      { error: '콘텐츠 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

// 비동기 콘텐츠 생성 함수
async function generateContentAsync(
  contentId: string,
  request: any,
  userId: string,
  creditsUsed: number
) {
  try {
    // 상태를 PROCESSING으로 업데이트
    await DatabaseService.updateContentStatus(contentId, 'PROCESSING')

    // AI 콘텐츠 생성
    const result = await aiGenerator.generateContent(request)

    // 생성 완료 후 데이터베이스 업데이트
    await DatabaseService.updateContentStatus(contentId, 'COMPLETED', {
      contents: result.contents,
      images: result.generatedImages,
      creditsUsed: result.totalCreditsUsed
    })

    // 사용자 크레딧 차감
    const user = await DatabaseService.getUserById(userId)
    if (user) {
      await DatabaseService.updateUserCredits(userId, user.credits - creditsUsed)
    }

    // 거래 기록 생성
    await DatabaseService.createTransaction({
      userId,
      type: 'DEDUCTION',
      amount: 0,
      credits: -creditsUsed,
      description: `콘텐츠 생성: ${request.title}`
    })

  } catch (error) {
    console.error('Async content generation error:', error)
    
    // 실패 시 상태 업데이트
    await DatabaseService.updateContentStatus(contentId, 'FAILED')
  }
}
