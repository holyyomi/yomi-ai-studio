"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Zap, 
  Target, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  const platforms = [
    { name: '구글 블로그', icon: '📝', color: 'bg-red-500' },
    { name: '인스타그램', icon: '📷', color: 'bg-pink-500' },
    { name: '페이스북', icon: '👥', color: 'bg-blue-600' },
    { name: '트위터', icon: '🐦', color: 'bg-blue-400' },
    { name: '링크드인', icon: '💼', color: 'bg-blue-700' },
    { name: '핀터레스트', icon: '📌', color: 'bg-red-600' },
    { name: '네이버 블로그', icon: '🟢', color: 'bg-green-500' },
    { name: '티스토리', icon: '📖', color: 'bg-orange-500' },
    { name: '브런치', icon: '☕', color: 'bg-amber-600' },
    { name: '카카오 채널', icon: '💬', color: 'bg-yellow-500' },
    { name: '유튜브', icon: '🎥', color: 'bg-red-600' }
  ]

  const benefits = [
    { icon: Clock, title: '99% 시간 절약', description: '11개 플랫폼 콘텐츠를 5분만에' },
    { icon: Target, title: '플랫폼 최적화', description: '각 플랫폼에 맞는 완벽한 콘텐츠' },
    { icon: TrendingUp, title: '바이럴 보장', description: 'AI가 분석한 바이럴 요소 적용' },
    { icon: Sparkles, title: '완전 자동화', description: '클릭 한 번으로 모든 것 완료' }
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 상단 배지 */}
        <div className="text-center mb-8">
          <Badge variant="premium" className="mb-4 animate-bounce">
            <Users className="w-3 h-3 mr-1" />
            베타 테스트 20명 한정 모집
          </Badge>
        </div>

        {/* 메인 헤드라인 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              11개 플랫폼,
            </span>
            <br />
            <span className="text-gray-900">한 번에 정복하세요</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            하나의 주제 입력으로 11개 SNS 플랫폼에 최적화된 콘텐츠를 자동 생성하고 업로드하는 
            <span className="font-semibold text-purple-600"> AI 콘텐츠 스튜디오</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="xl" variant="gradient" className="shadow-2xl">
                <Zap className="w-5 h-5 mr-2" />
                무료로 시작하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="xl" variant="outline">
              데모 영상 보기
            </Button>
          </div>
        </div>

        {/* 플랫폼 그리드 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            지원하는 플랫폼
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
            {platforms.map((platform, index) => (
              <Card
                key={platform.name}
                className={`cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  hoveredPlatform === platform.name ? 'ring-2 ring-purple-500' : ''
                }`}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-2xl">{platform.icon}</span>
                  </div>
                  <p className="text-xs font-medium text-gray-700">{platform.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 핵심 혜택 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 사회적 증명 */}
        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">베타 사용자 성과</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1,247%</div>
              <div className="text-gray-600">평균 조회수 증가</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">시간 절약</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">18개</div>
              <div className="text-gray-600">평균 바이럴 게시물</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            지금 시작하면 <span className="text-purple-600">200 크레딧</span> 무료!
          </h3>
          <p className="text-gray-600 mb-8">
            베타 테스트 참여자에게만 제공되는 특별 혜택
          </p>
          <Link href="/register">
            <Button size="xl" variant="gradient" className="shadow-2xl animate-pulse">
              <CheckCircle className="w-5 h-5 mr-2" />
              지금 무료로 시작하기
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            ⚡ 20명 한정 • 신용카드 불필요 • 언제든 취소 가능
          </p>
        </div>
      </div>
    </div>
  )
}
