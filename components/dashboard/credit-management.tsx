"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { PricingModal } from './pricing-modal'
import { 
  Zap, 
  TrendingUp, 
  Calendar, 
  CreditCard,
  AlertCircle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Clock
} from 'lucide-react'
import { formatPrice, formatDate } from '@/lib/utils'

interface CreditManagementProps {
  user: any
  transactions: any[]
}

export function CreditManagement({ user, transactions }: CreditManagementProps) {
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (planType: 'PRO' | 'PREMIUM' | 'VIP') => {
    setIsSubscribing(true)
    
    try {
      // 토스페이먼츠 결제 창 열기
      const { loadTossPayments } = await import('@tosspayments/payment-sdk')
      
      const tossPayments = await loadTossPayments(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!)
      
      const planPrices = {
        PRO: 299000,
        PREMIUM: 499000,
        VIP: 999000
      }
      
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      await tossPayments.requestPayment('카드', {
        amount: planPrices[planType],
        orderId,
        orderName: `${planType} 플랜 구독`,
        customerName: user.name,
        customerEmail: user.email,
        successUrl: `${window.location.origin}/dashboard/credits/success`,
        failUrl: `${window.location.origin}/dashboard/credits/fail`,
      })
      
    } catch (error) {
      console.error('Payment error:', error)
    } finally {
      setIsSubscribing(false)
    }
  }

  const creditUsagePercentage = user.plan === 'FREE' ? 
    ((200 - user.credits) / 200) * 100 : 
    ((1000 - user.credits) / 1000) * 100

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'PURCHASE':
        return <ArrowUp className="w-4 h-4 text-green-500" />
      case 'DEDUCTION':
        return <ArrowDown className="w-4 h-4 text-red-500" />
      case 'BONUS':
        return <Zap className="w-4 h-4 text-yellow-500" />
      case 'REFUND':
        return <ArrowUp className="w-4 h-4 text-blue-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'PURCHASE':
      case 'BONUS':
        return 'text-green-600'
      case 'DEDUCTION':
        return 'text-red-600'
      case 'REFUND':
        return 'text-blue-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* 크레딧 현황 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>보유 크레딧</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">
              {user.credits.toLocaleString()}
            </div>
            <div className="text-purple-100">
              {user.plan} 플랜
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>사용률</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">
              {creditUsagePercentage.toFixed(1)}%
            </div>
            <Progress value={creditUsagePercentage} className="h-2" />
            <p className="text-sm text-gray-600 mt-2">
              이번 달 사용량
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>구독 만료</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">
              {user.planExpiry ? formatDate(new Date(user.planExpiry)) : '무제한'}
            </div>
            <div className="text-sm text-gray-600">
              {user.plan === 'FREE' ? '무료 플랜' : '유료 구독'}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 플랜 업그레이드 */}
      {user.plan === 'FREE' && (
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>크레딧이 부족하신가요?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-700 mb-2">
                  유료 플랜으로 업그레이드하고 더 많은 크레딧을 받아보세요!
                </p>
                <ul className="text-sm text-amber-600 space-y-1">
                  <li>• Pro: 1,000 크레딧 (월 299,000원)</li>
                  <li>• Premium: 2,000 크레딧 (월 499,000원)</li>
                  <li>• VIP: 5,000 크레딧 (월 999,000원)</li>
                </ul>
              </div>
              <PricingModal 
                userPlan={user.plan}
                onSubscribe={handleSubscribe}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* 크레딧 사용 내역 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5" />
            <span>크레딧 사용 내역</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {transactions.length > 0 ? (
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-600">
                        {formatDate(new Date(transaction.createdAt))}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${getTransactionColor(transaction.type)}`}>
                      {transaction.type === 'DEDUCTION' ? '-' : '+'}
                      {Math.abs(transaction.credits)} 크레딧
                    </p>
                    {transaction.amount > 0 && (
                      <p className="text-sm text-gray-600">
                        {formatPrice(transaction.amount)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <CreditCard className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>아직 크레딧 사용 내역이 없습니다</p>
              <p className="text-sm">콘텐츠를 생성하면 내역이 표시됩니다</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 플랜 정보 */}
      <Card>
        <CardHeader>
          <CardTitle>현재 플랜 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">플랜 혜택</h4>
              <ul className="space-y-2">
                {user.plan === 'FREE' ? (
                  <>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>200 크레딧 (가입 시)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>기본 플랫폼 지원</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>월 {user.plan === 'PRO' ? '1,000' : user.plan === 'PREMIUM' ? '2,000' : '5,000'} 크레딧</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>11개 플랫폼 지원</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>자동 업로드</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>이미지 생성</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">크레딧 사용량</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>짧은 글 (SNS)</span>
                  <span>2 크레딧</span>
                </div>
                <div className="flex justify-between">
                  <span>긴 글 (블로그)</span>
                  <span>3 크레딧</span>
                </div>
                <div className="flex justify-between">
                  <span>이미지 생성</span>
                  <span>20 크레딧</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 