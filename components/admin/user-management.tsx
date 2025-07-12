"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Edit
} from 'lucide-react'

// 임시 유틸리티 함수들
const formatDate = (date: Date) => new Date(date).toLocaleDateString('ko-KR')
const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price)

interface UserManagementProps {
  users: any[]
}

export function UserManagement({ users }: UserManagementProps) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Card>
      <CardHeader>
        <CardTitle>사용자 관리</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">사용자 관리 기능 준비 중입니다.</p>
      </CardContent>
    </Card>
  )
} 