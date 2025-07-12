"use client"

import * as React from "react"
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Copy, 
  Download, 
  Share, 
  Eye, 
  EyeOff, 
  CheckCircle,
  AlertCircle,
  Clock,
  Sparkles,
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react'
import { PLATFORMS } from '@/lib/utils'

interface ContentResultProps {
  contentId: string
  onBack: () => void
}

interface PlatformContent {
  platform: string
  title: string
  content: string
  hashtags: string[]
  characterCount: number
  imageUrl?: string
}

interface ContentData {
  id: string
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
  title: string
  outputs: {
    contents: PlatformContent[]
    images: string[]
  }
  platforms: string[]
  creditsUsed: number
  createdAt: string
  updatedAt: string
}

export function ContentResult({ contentId, onBack }: ContentResultProps) {
  const [contentData, setContentData] = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null)
  const [previewMode, setPreviewMode] = useState<{ [key: string]: boolean }>({})

  // 상태 폴링
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`/api/content/status/${contentId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch content status')
        }
        
        const data = await response.json()
        setContentData(data)
        
        // 완료되지 않은 경우 계속 폴링
        if (data.status === 'PENDING' || data.status === 'PROCESSING') {
          setTimeout(fetchStatus, 2000)
        }
      } catch (err) {
        setError('콘텐츠 상태를 불러오는데 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
  }, [contentId])

  const copyToClipboard = async (text: string, platform: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedPlatform(platform)
      setTimeout(() => setCopiedPlatform(null), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  const togglePreview = (platform: string) => {
    setPreviewMode(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'PROCESSING':
        return <Sparkles className="w-5 h-5 text-blue-500 animate-spin" />
      case 'COMPLETED':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'FAILED':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'PENDING': return '대기 중'
      case 'PROCESSING': return '생성 중'
      case 'COMPLETED': return '완료'
      case 'FAILED': return '실패'
      default: return '알 수 없음'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <p className="text-lg font-medium">콘텐츠 상태를 확인하는 중...</p>
        </div>
      </div>
    )
  }

  if (error || !contentData) {
    return (
      <div className="text-center space-y-4">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        <p className="text-lg font-medium text-red-600">{error || '콘텐츠를 불러올 수 없습니다.'}</p>
        <Button onClick={onBack} variant="outline">
          돌아가기
        </Button>
      </div>
    )
  }

  // 생성 중인 경우
  if (contentData.status === 'PENDING' || contentData.status === 'PROCESSING') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                {getStatusIcon(contentData.status)}
                <span>{contentData.title}</span>
              </CardTitle>
              <Badge variant="secondary">
                {getStatusText(contentData.status)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg mb-4">
                  {contentData.status === 'PENDING' ? 
                    'AI가 콘텐츠 생성을 준비하고 있습니다...' : 
                    'AI가 콘텐츠를 생성하고 있습니다...'
                  }
                </p>
                <Progress value={contentData.status === 'PENDING' ? 25 : 75} variant="energy" className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {contentData.platforms.map((platform, index) => (
                  <div key={platform} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-8 h-8 ${PLATFORMS[platform as keyof typeof PLATFORMS]?.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-sm">{PLATFORMS[platform as keyof typeof PLATFORMS]?.icon}</span>
                    </div>
                    <span className="text-sm font-medium">{PLATFORMS[platform as keyof typeof PLATFORMS]?.name}</span>
                    <div className="ml-auto">
                      {contentData.status === 'PROCESSING' && index < 2 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // 실패한 경우
  if (contentData.status === 'FAILED') {
    return (
      <div className="text-center space-y-4">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        <div>
          <h3 className="text-lg font-medium text-red-600 mb-2">콘텐츠 생성에 실패했습니다</h3>
          <p className="text-gray-600">다시 시도해주세요. 문제가 계속되면 고객지원에 문의해주세요.</p>
        </div>
        <div className="flex space-x-4 justify-center">
          <Button onClick={onBack} variant="outline">
            돌아가기
          </Button>
          <Button onClick={() => window.location.reload()} variant="default">
            다시 시도
          </Button>
        </div>
      </div>
    )
  }

  // 완료된 경우
  const { contents, images } = contentData.outputs

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span>{contentData.title}</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="success">생성 완료</Badge>
              <Badge variant="outline">{contentData.creditsUsed} 크레딧 사용</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-green-700">
              🎉 {contents.length}개 플랫폼용 콘텐츠가 성공적으로 생성되었습니다!
            </p>
            <Button onClick={onBack} variant="outline">
              새 콘텐츠 만들기
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 생성된 이미지 */}
      {images && images.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ImageIcon className="w-5 h-5" />
              <span>생성된 이미지</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((imageUrl, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={imageUrl} 
                    alt={`Generated image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        원본 보기
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 플랫폼별 콘텐츠 */}
      <Tabs defaultValue={contents[0]?.platform} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          {contents.slice(0, 6).map((content) => (
            <TabsTrigger key={content.platform} value={content.platform} className="text-xs">
              <div className="flex items-center space-x-1">
                <span>{PLATFORMS[content.platform as keyof typeof PLATFORMS]?.icon}</span>
                <span className="hidden sm:inline">{PLATFORMS[content.platform as keyof typeof PLATFORMS]?.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {contents.map((content) => (
          <TabsContent key={content.platform} value={content.platform} className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className={`w-8 h-8 ${PLATFORMS[content.platform as keyof typeof PLATFORMS]?.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-sm">{PLATFORMS[content.platform as keyof typeof PLATFORMS]?.icon}</span>
                    </div>
                    <span>{PLATFORMS[content.platform as keyof typeof PLATFORMS]?.name}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{content.characterCount}자</Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePreview(content.platform)}
                    >
                      {previewMode[content.platform] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 제목 */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">제목</label>
                  <div className="relative">
                    <div className="p-3 bg-gray-50 rounded-lg border">
                      {content.title}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(content.title, `${content.platform}-title`)}
                    >
                      {copiedPlatform === `${content.platform}-title` ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* 본문 */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">본문</label>
                  <div className="relative">
                    <div className={`p-4 bg-gray-50 rounded-lg border ${previewMode[content.platform] ? 'whitespace-pre-wrap' : ''}`}>
                      {previewMode[content.platform] ? content.content : content.content.replace(/\n/g, ' ')}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(content.content, `${content.platform}-content`)}
                    >
                      {copiedPlatform === `${content.platform}-content` ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* 해시태그 */}
                {content.hashtags && content.hashtags.length > 0 && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">해시태그</label>
                    <div className="relative">
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        {content.hashtags.map((tag, index) => (
                          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-1">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(content.hashtags.map(tag => `#${tag}`).join(' '), `${content.platform}-hashtags`)}
                      >
                        {copiedPlatform === `${content.platform}-hashtags` ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* 전체 복사 버튼 */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const fullContent = `${content.title}\n\n${content.content}\n\n${content.hashtags.map(tag => `#${tag}`).join(' ')}`
                      copyToClipboard(fullContent, `${content.platform}-full`)
                    }}
                    className="flex-1"
                  >
                    {copiedPlatform === `${content.platform}-full` ? (
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2" />
                    )}
                    전체 복사
                  </Button>
                  <Button variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    공유
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 