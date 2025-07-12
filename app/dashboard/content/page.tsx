import * as React from "react"
import { getCurrentUser } from '@/lib/auth'
import { ContentGeneratorWrapper } from '@/components/dashboard/content-generator-wrapper'
import { redirect } from 'next/navigation'

export default async function ContentPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          콘텐츠 생성
        </h1>
        <p className="text-gray-600">
          AI가 11개 플랫폼에 최적화된 콘텐츠를 자동으로 생성합니다
        </p>
      </div>

      <ContentGeneratorWrapper userCredits={user.credits} />
    </div>
  )
}
