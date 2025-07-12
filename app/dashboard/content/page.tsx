import * as React from "react"
import { ContentGeneratorWrapper } from '../../../components/dashboard/content-generator'
import { redirect } from 'next/navigation'

export default function ContentPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">AI 콘텐츠 생성</h1>
      <ContentGeneratorWrapper userCredits={200} />
    </div>
  )
}
