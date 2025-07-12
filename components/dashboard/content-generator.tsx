"use client"

import * as React from "react"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { contentSchema, type ContentInput } from '@/lib/validations'
import { calculateCredits, PLATFORMS } from '@/lib/utils'
import { 
  Zap, 
  User, 
  ShoppingBag, 
  CheckCircle, 
  Loader2,
  Sparkles,
  Target,
  Image as ImageIcon
} from 'lucide-react'

interface ContentGeneratorProps {
  userCredits: number
  onGenerate: (data: ContentInput) => Promise<void>
}

export function ContentGenerator({ userCredits, onGenerate }: ContentGeneratorProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [includeImages, setIncludeImages] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationStep, setGenerationStep] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<ContentInput>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      type: 'PERSONAL',
      platforms: []
    }
  })

  const contentType = watch('type')
  const requiredCredits = calculateCredits(selectedPlatforms, includeImages)
  const canGenerate = requiredCredits <= userCredits && selectedPlatforms.length > 0

  const togglePlatform = (platform: string) => {
    const newSelection = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter(p => p !== platform)
      : [...selectedPlatforms, platform]
    
    setSelectedPlatforms(newSelection)
    setValue('platforms', newSelection)
  }

  const onSubmit = async (data: ContentInput) => {
    setIsGenerating(true)
    setGenerationStep(0)

    try {
      // 단계별 진행률 시뮬레이션
      const steps = [
        'AI 분석 중...',
        '콘텐츠 생성 중...',
        '플랫폼 최적화 중...',
        '이미지 생성 중...',
        '최종 검토 중...'
      ]

      for (let i = 0; i < steps.length; i++) {
        setGenerationStep(i)
        await new Promise(resolve => setTimeout(resolve, 1000))
      }

      await onGenerate(data)
    } catch (error) {
      console.error('Generation failed:', error)
    } finally {
      setIsGenerating(false)
      setGenerationStep(0)
    }
  }

  if (isGenerating) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">AI가 콘텐츠를 생성하고 있습니다</h3>
              <p className="text-gray-600">잠시만 기다려주세요...</p>
            </div>
            <div className="space-y-4">
              <Progress value={(generationStep + 1) * 20} variant="energy" className="h-3" />
              <div className="grid grid-cols-2 gap-4">
                {selectedPlatforms.map((platform, index) => (
                  <div key={platform} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      generationStep >= index ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                    <span className="text-sm">{PLATFORMS[platform as keyof typeof PLATFORMS]?.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-purple-600" />
            <span>AI 콘텐츠 생성기</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 콘텐츠 타입 선택 */}
            <Tabs value={contentType} onValueChange={(value) => setValue('type', value as 'PERSONAL' | 'PRODUCT')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="PERSONAL" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>개인 콘텐츠</span>
                </TabsTrigger>
                <TabsTrigger value="PRODUCT" className="flex items-center space-x-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>제품 마케팅</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="PERSONAL" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">주제</label>
                    <Input
                      placeholder="예: 아침 루틴의 중요성"
                      {...register('inputData.topic')}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">페르소나</label>
                    <Input
                      placeholder="예: 건강한 라이프스타일 추구자"
                      {...register('inputData.persona')}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">타겟 오디언스</label>
                  <Input
                    placeholder="예: 20-30대 직장인"
                    {...register('inputData.audience')}
                  />
                </div>
              </TabsContent>

              <TabsContent value="PRODUCT" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">제품명</label>
                    <Input
                      placeholder="예: 프리미엄 요가 매트"
                      {...register('inputData.productName')}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">가격</label>
                    <Input
                      placeholder="예: 89,000원"
                      {...register('inputData.price')}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">제품 URL</label>
                  <Input
                    placeholder="예: https://example.com/product"
                    {...register('inputData.productUrl')}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">핵심 특징</label>
                  <Input
                    placeholder="예: 친환경 소재, 미끄럼 방지, 두께 6mm"
                    {...register('inputData.features')}
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* 제목 입력 */}
            <div>
              <label className="text-sm font-medium mb-2 block">콘텐츠 제목</label>
              <Input
                placeholder="생성할 콘텐츠의 제목을 입력하세요"
                {...register('title')}
              />
              {errors.title && (
                <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>
              )}
            </div>

            {/* 플랫폼 선택 */}
            <div>
              <label className="text-sm font-medium mb-4 block">플랫폼 선택</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {Object.entries(PLATFORMS).map(([key, platform]) => (
                  <Card
                    key={key}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedPlatforms.includes(key) 
                        ? 'ring-2 ring-purple-500 bg-purple-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => togglePlatform(key)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center`}>
                            <span className="text-white text-sm">{platform.icon}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{platform.name}</p>
                            <p className="text-xs text-gray-500">
                              {platform.autoUpload ? '자동' : '수동'}
                            </p>
                          </div>
                        </div>
                        {selectedPlatforms.includes(key) && (
                          <CheckCircle className="w-5 h-5 text-purple-600" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 이미지 생성 옵션 */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <ImageIcon className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">이미지 자동 생성</p>
                  <p className="text-sm text-gray-600">AI가 콘텐츠에 맞는 이미지를 생성합니다</p>
                </div>
              </div>
              <Button
                type="button"
                variant={includeImages ? "default" : "outline"}
                onClick={() => setIncludeImages(!includeImages)}
              >
                {includeImages ? '포함됨' : '추가 (+20 크레딧)'}
              </Button>
            </div>

            {/* 크레딧 정보 */}
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">필요한 크레딧: {requiredCredits}</p>
                    <p className="text-sm text-gray-600">보유 크레딧: {userCredits}</p>
                  </div>
                  <Badge variant={canGenerate ? "success" : "destructive"}>
                    {canGenerate ? "생성 가능" : "크레딧 부족"}
                  </Badge>
                </div>
                {!canGenerate && (
                  <p className="text-sm text-red-600 mt-2">
                    {requiredCredits - userCredits} 크레딧이 더 필요합니다
                  </p>
                )}
              </CardContent>
            </Card>

            {/* 생성 버튼 */}
            <Button
              type="submit"
              size="lg"
              variant="gradient"
              className="w-full"
              disabled={!canGenerate || selectedPlatforms.length === 0}
            >
              <Target className="w-5 h-5 mr-2" />
              AI 콘텐츠 생성하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
