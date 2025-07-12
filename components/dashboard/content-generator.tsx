"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface ContentGeneratorProps {
  userCredits: number
  onGenerate: (data: any) => Promise<void>
}

export function ContentGenerator({ userCredits }: ContentGeneratorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI 콘텐츠 생성기</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">콘텐츠 생성 기능 준비 중입니다.</p>
        <p className="text-sm text-gray-500 mt-2">보유 크레딧: {userCredits}</p>
      </CardContent>
    </Card>
  )
}

export function ContentGeneratorWrapper({ userCredits }: { userCredits: number }) {
  return <ContentGenerator userCredits={userCredits} onGenerate={async () => {}} />
}
