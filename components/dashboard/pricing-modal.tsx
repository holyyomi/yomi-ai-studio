"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { 
  Check, 
  Crown, 
  Zap, 
  Loader2
} from 'lucide-react'

// 임시 유틸리티 함수
const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price)

interface PricingModalProps {
  userPlan: string
  onSubscribe: (planType: 'PRO' | 'PREMIUM' | 'VIP') => Promise<void>
}

export function PricingModal({ userPlan, onSubscribe }: PricingModalProps) {
  const [isSubscribing, setIsSubscribing] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>플랜 선택</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">플랜 선택 기능 준비 중입니다.</p>
      </CardContent>
    </Card>
  )
} 