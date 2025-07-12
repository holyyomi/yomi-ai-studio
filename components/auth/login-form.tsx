"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Holy AI Studio
          </CardTitle>
          <CardDescription className="text-lg">
            로그인
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">로그인 기능 준비 중입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
