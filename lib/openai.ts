import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface ContentGenerationRequest {
  type: 'PERSONAL' | 'PRODUCT'
  title: string
  inputData: {
    topic?: string
    persona?: string
    audience?: string
    productName?: string
    productUrl?: string
    features?: string
    price?: string
    target?: string
  }
  platforms: string[]
}

export interface PlatformContent {
  platform: string
  title: string
  content: string
  hashtags: string[]
  characterCount: number
  imagePrompt?: string
}

export interface GenerationResult {
  contents: PlatformContent[]
  totalCreditsUsed: number
  generatedImages?: string[]
}

// 플랫폼별 최적화 설정
const PLATFORM_CONFIGS = {
  GOOGLE_BLOG: {
    maxLength: 2000,
    style: 'detailed',
    format: 'blog',
    hashtags: 0
  },
  INSTAGRAM: {
    maxLength: 2200,
    style: 'visual',
    format: 'story',
    hashtags: 30
  },
  FACEBOOK: {
    maxLength: 1000,
    style: 'engaging',
    format: 'post',
    hashtags: 5
  },
  TWITTER: {
    maxLength: 280,
    style: 'concise',
    format: 'tweet',
    hashtags: 3
  },
  LINKEDIN: {
    maxLength: 1300,
    style: 'professional',
    format: 'article',
    hashtags: 5
  },
  PINTEREST: {
    maxLength: 500,
    style: 'visual',
    format: 'pin',
    hashtags: 20
  },
  NAVER_BLOG: {
    maxLength: 1500,
    style: 'informative',
    format: 'blog',
    hashtags: 10
  },
  TISTORY: {
    maxLength: 1500,
    style: 'personal',
    format: 'blog',
    hashtags: 10
  },
  BRUNCH: {
    maxLength: 1200,
    style: 'literary',
    format: 'essay',
    hashtags: 5
  },
  KAKAO_CHANNEL: {
    maxLength: 1000,
    style: 'friendly',
    format: 'message',
    hashtags: 5
  },
  YOUTUBE: {
    maxLength: 5000,
    style: 'descriptive',
    format: 'description',
    hashtags: 15
  }
}

export class AIContentGenerator {
  
  // 개인 콘텐츠 생성 프롬프트
  private generatePersonalPrompt(data: ContentGenerationRequest, platform: string): string {
    const config = PLATFORM_CONFIGS[platform as keyof typeof PLATFORM_CONFIGS]
    
    return `
당신은 세계 최고의 콘텐츠 크리에이터입니다.

입력 정보:
- 제목: ${data.title}
- 주제: ${data.inputData.topic || '일반적인 주제'}
- 페르소나: ${data.inputData.persona || '일반인'}
- 타겟 오디언스: ${data.inputData.audience || '일반 대중'}
- 플랫폼: ${platform}

플랫폼 특성:
- 최대 글자 수: ${config.maxLength}자
- 스타일: ${config.style}
- 형식: ${config.format}
- 해시태그 수: ${config.hashtags}개

콘텐츠 생성 요구사항:
1. 첫 문장부터 강력한 관심 유발
2. 중간에 읽기를 멈출 수 없는 몰입감 조성
3. 마지막에 자발적 공유 욕구 창출
4. 플랫폼별 최적화 (글자 수, 해시태그)
5. 자연스러운 인간다움 (AI 티 완전 제거)
6. 바이럴 요소 포함 (감정 자극, 공감대 형성)

출력 형식:
{
  "title": "매력적인 제목",
  "content": "본문 내용",
  "hashtags": ["해시태그1", "해시태그2", ...],
  "characterCount": 글자수
}

반드시 JSON 형식으로만 응답하세요.
`
  }

  // 제품 마케팅 콘텐츠 생성 프롬프트
  private generateProductPrompt(data: ContentGenerationRequest, platform: string): string {
    const config = PLATFORM_CONFIGS[platform as keyof typeof PLATFORM_CONFIGS]
    
    return `
당신은 마케팅 전문가입니다.

제품 정보:
- 제품명: ${data.inputData.productName || '제품'}
- URL: ${data.inputData.productUrl || ''}
- 특징: ${data.inputData.features || '우수한 품질'}
- 가격: ${data.inputData.price || '합리적 가격'}
- 타겟: ${data.inputData.target || '일반 소비자'}
- 플랫폼: ${platform}

플랫폼 특성:
- 최대 글자 수: ${config.maxLength}자
- 스타일: ${config.style}
- 형식: ${config.format}
- 해시태그 수: ${config.hashtags}개

마케팅 콘텐츠 생성 전략:
1. 고객의 페인 포인트 정확히 파악
2. 제품의 핵심 가치 제안 명확화
3. 감정적 공감대 형성
4. 구매 욕구 자극 (FOMO, 희소성)
5. 명확한 행동 유도 (CTA)
6. 사회적 증명 요소 포함

출력 형식:
{
  "title": "매력적인 제목",
  "content": "본문 내용",
  "hashtags": ["해시태그1", "해시태그2", ...],
  "characterCount": 글자수
}

반드시 JSON 형식으로만 응답하세요.
`
  }

  // 이미지 생성 프롬프트
  private generateImagePrompt(content: string, platform: string): string {
    return `
다음 콘텐츠에 적합한 이미지를 생성하세요:

콘텐츠: ${content.substring(0, 200)}...
플랫폼: ${platform}

이미지 요구사항:
- 스타일: 모던, 미니멀, 고품질
- 색상: 브랜드 컬러 (보라색, 파란색 계열)
- 구성: 시각적 임팩트 최대화
- 해상도: 고해상도
- 분위기: 전문적이면서 친근함

${platform === 'INSTAGRAM' ? '인스타그램 정사각형 비율' : ''}
${platform === 'YOUTUBE' ? '유튜브 썸네일 비율 (16:9)' : ''}
${platform === 'PINTEREST' ? '핀터레스트 세로 비율 (2:3)' : ''}
`
  }

  // 단일 플랫폼 콘텐츠 생성
  async generatePlatformContent(
    data: ContentGenerationRequest, 
    platform: string
  ): Promise<PlatformContent> {
    try {
      const prompt = data.type === 'PERSONAL' 
        ? this.generatePersonalPrompt(data, platform)
        : this.generateProductPrompt(data, platform)

      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: '당신은 전문 콘텐츠 크리에이터입니다. 항상 JSON 형식으로 응답하세요.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 2000
      })

      const response = completion.choices[0]?.message?.content
      if (!response) {
        throw new Error('No response from OpenAI')
      }

      // JSON 파싱
      const parsedContent = JSON.parse(response)
      
      return {
        platform,
        title: parsedContent.title,
        content: parsedContent.content,
        hashtags: parsedContent.hashtags || [],
        characterCount: parsedContent.characterCount || parsedContent.content.length,
        imagePrompt: this.generateImagePrompt(parsedContent.content, platform)
      }

    } catch (error) {
      console.error(`Error generating content for ${platform}:`, error)
      throw new Error(`Failed to generate content for ${platform}`)
    }
  }

  // 이미지 생성
  async generateImage(prompt: string): Promise<string> {
    try {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt,
        n: 1,
        size: '1024x1024',
        quality: 'standard'
      })

      return response.data[0]?.url || ''
    } catch (error) {
      console.error('Error generating image:', error)
      throw new Error('Failed to generate image')
    }
  }

  // 전체 콘텐츠 생성 (메인 함수)
  async generateContent(data: ContentGenerationRequest): Promise<GenerationResult> {
    const contents: PlatformContent[] = []
    const generatedImages: string[] = []
    let totalCreditsUsed = 0

    try {
      // 각 플랫폼별 콘텐츠 생성
      for (const platform of data.platforms) {
        const platformContent = await this.generatePlatformContent(data, platform)
        contents.push(platformContent)
        
        // 크레딧 계산
        totalCreditsUsed += platform === 'GOOGLE_BLOG' ? 3 : 2
      }

      // 이미지 생성 (선택사항)
      if (data.inputData.generateImages) {
        const mainImagePrompt = contents[0]?.imagePrompt || ''
        if (mainImagePrompt) {
          const imageUrl = await this.generateImage(mainImagePrompt)
          generatedImages.push(imageUrl)
          totalCreditsUsed += 20 // 이미지 생성 크레딧
        }
      }

      return {
        contents,
        totalCreditsUsed,
        generatedImages
      }

    } catch (error) {
      console.error('Error in generateContent:', error)
      throw new Error('콘텐츠 생성 중 오류가 발생했습니다.')
    }
  }
}

// 싱글톤 인스턴스
export const aiGenerator = new AIContentGenerator()
