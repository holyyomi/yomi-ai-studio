"use client"

import * as React from "react"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContentGenerator as OriginalContentGenerator } from './content-generator'
import { ContentResult } from './content-result'
import { contentSchema, type ContentInput } from '@/lib/validations'

interface ContentGeneratorWrapperProps {
  userCredits: number
}

export function ContentGeneratorWrapper({ userCredits }: ContentGeneratorWrapperProps) {
  const [currentView, setCurrentView] = useState<'generator' | 'result'>('generator')
  const [generatedContentId, setGeneratedContentId] = useState<string | null>(null)

  const handleGenerate = async (data: ContentInput) => {
    try {
      const response = await fetch('/api/content/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || '콘텐츠 생성에 실패했습니다.')
      }

      const result = await response.json()
      setGeneratedContentId(result.contentId)
      setCurrentView('result')
    } catch (error) {
      console.error('Content generation failed:', error)
      // 에러 처리 로직 추가
    }
  }

  const handleBack = () => {
    setCurrentView('generator')
    setGeneratedContentId(null)
  }

  if (currentView === 'result' && generatedContentId) {
    return (
      <ContentResult
        contentId={generatedContentId}
        onBack={handleBack}
      />
    )
  }

  return (
    <OriginalContentGenerator
      userCredits={userCredits}
      onGenerate={handleGenerate}
    />
  )
} 