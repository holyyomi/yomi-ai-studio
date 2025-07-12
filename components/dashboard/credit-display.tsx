"use client"

import * as React from "react"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Plus, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface CreditDisplayProps {
  credits: number
  maxCredits?: number
}

export function CreditDisplay({ credits, maxCredits = 1000 }: CreditDisplayProps) {
  const [isHovered, setIsHovered] = useState(false)
  const percentage = (credits / maxCredits) * 100

  const getStatusColor = () => {
    if (percentage > 50) return 'energy'
    if (percentage > 20) return 'default'
    return 'destructive'
  }

  const getStatusText = () => {
    if (percentage > 50) return '충분'
    if (percentage > 20) return '보통'
    return '부족'
  }

  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              {isHovered && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full pulse-ring"></div>
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">
                  {credits.toLocaleString()}
                </span>
                <Badge variant={getStatusColor() as any} className="text-xs">
                  {getStatusText()}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">크레딧</p>
            </div>
          </div>

          <Link href="/dashboard/credits">
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              충전
            </Button>
          </Link>
        </div>

        {/* 진행률 바 */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>사용량</span>
            <span>{percentage.toFixed(1)}%</span>
          </div>
          <Progress 
            value={percentage} 
            variant={getStatusColor() as any}
            className="h-2"
          />
        </div>

        {/* 사용 예측 */}
        {isHovered && (
          <div className="mt-3 p-2 bg-gray-50 rounded-md animate-fade-in">
            <div className="flex items-center text-sm text-gray-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>평균 일일 사용량: {Math.round(credits * 0.05)} 크레딧</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
