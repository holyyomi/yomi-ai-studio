"use client"

import Link from 'next/link'
import { Button } from '../ui/button'

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Holy AI Studio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          AI 콘텐츠 생성 플랫폼
        </p>
        <p className="text-lg text-gray-500 mb-12">
          준비 중입니다...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button size="lg" variant="gradient" className="shadow-2xl">
              무료로 시작하기
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
