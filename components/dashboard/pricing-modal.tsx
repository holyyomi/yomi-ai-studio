"use client"

import * as React from "react"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { 
  CheckCircle, 
  Zap, 
  Crown, 
  Star,
  CreditCard,
  Loader2
} from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface PricingModalProps {
  userPlan: string
  onSubscribe: (planType: 'PRO' | 'PREMIUM' | 'VIP') => Promise<void>
}

export function PricingModal({ userPlan, onSubscribe }: PricingModalProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const plans = [
    {
      type: 'PRO' as const,
      name: 'Pro',
      price: 299000,
      credits: 1000,
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      features: [
        '1,000 크레딧/월',
        '11개 플랫폼 지원',
        '자동 업로드',
        '이미지 생성',
        '기본 지원'
      ]
    },
    {
      type: 'PREMIUM' as const,
      name: 'Premium',
      price: 499000,
      credits: 2000,
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      popular: true,
      features: [
        '2,000 크레딧/월',
        '11개 플랫폼 지원',
        '자동 업로드',
        '이미지 생성',
        '우선 지원',
        '고급 분석'
      ]
    },
    {
      type: 'VIP' as const,
      name: 'VIP',
      price: 999000,
      credits: 5000,
      icon: Star,
      color: 'from-amber-500 to-amber-600',
      features: [
        '5,000 크레딧/월',
        '11개 플랫폼 지원',
        '자동 업로드',
        '이미지 생성',
        '전담 지원',
        '커스텀 기능',
        '무제한 분석'
      ]
    }
  ]

  const handleSubscribe = async (planType: 'PRO' | 'PREMIUM' | 'VIP') => {
    setIsLoading(planType)
    try {
      await onSubscribe(planType)
      setIsOpen(false)
    } catch (error) {
      console.error('Subscription failed:', error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient" size="lg">
          <CreditCard className="w-5 h-5 mr-2" />
          플랜 업그레이드
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            플랜을 선택하세요
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isCurrentPlan = userPlan === plan.type
            
            return (
              <Card 
                key={plan.type}
                className={`relative transition-all hover:shadow-lg ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                } ${isCurrentPlan ? 'bg-green-50 border-green-200' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="premium" className="px-3 py-1">
                      가장 인기
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {formatPrice(plan.price)}
                    <span className="text-sm text-gray-500 font-normal">/월</span>
                  </div>
                  <p className="text-gray-600">
                    {plan.credits.toLocaleString()} 크레딧
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="w-full"
                    variant={plan.popular ? "gradient" : "outline"}
                    disabled={isCurrentPlan || isLoading === plan.type}
                    onClick={() => handleSubscribe(plan.type)}
                  >
                    {isLoading === plan.type ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        처리 중...
                      </>
                    ) : isCurrentPlan ? (
                      '현재 플랜'
                    ) : (
                      `${plan.name} 시작하기`
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            💳 안전한 결제: 토스페이먼츠 • 언제든 취소 가능 • 환불 보장
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 