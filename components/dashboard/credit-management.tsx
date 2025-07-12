"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { 
  CreditCard, 
  Plus, 
  Minus, 
  History, 
  Clock
} from 'lucide-react'

// 임시 유틸리티 함수들
const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price)
const formatDate = (date: Date) => new Date(date).toLocaleDateString('ko-KR')

interface CreditManagementProps {
  user: any
  transactions: any[]
}

export function CreditManagement({ user, transactions }: CreditManagementProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>크레딧 관리</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">크레딧 관리 기능 준비 중입니다.</p>
      </CardContent>
    </Card>
  )
} 