"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface ContentResultProps {
  contentId: string
}

export function ContentResult({ contentId }: ContentResultProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>콘텐츠 결과</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">콘텐츠 결과 표시 기능 준비 중입니다.</p>
        <p className="text-sm text-gray-500 mt-2">콘텐츠 ID: {contentId}</p>
      </CardContent>
    </Card>
  )
} 