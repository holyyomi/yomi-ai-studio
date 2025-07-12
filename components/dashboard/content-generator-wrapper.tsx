"use client"

import { useState } from 'react'
import { ContentGenerator } from './content-generator'
import { ContentResult } from './content-result'

interface ContentGeneratorWrapperProps {
  userCredits: number
}

export function ContentGeneratorWrapper({ userCredits }: ContentGeneratorWrapperProps) {
  const [currentView, setCurrentView] = useState<'generator' | 'result'>('generator')
  const [generatedContentId, setGeneratedContentId] = useState<string | null>(null)

  const handleGenerate = async (data: any) => {
    try {
      // 임시로 바로 결과 화면으로 전환
      setGeneratedContentId('temp-content-id')
      setCurrentView('result')
    } catch (error) {
      console.error('Content generation failed:', error)
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
      />
    )
  }

  return (
    <ContentGenerator
      userCredits={userCredits}
      onGenerate={handleGenerate}
    />
  )
} 