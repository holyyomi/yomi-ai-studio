"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Filter, 
  MoreHorizontal,
  User,
  CreditCard,
  Calendar,
  Mail,
  Shield,
  Ban,
  Edit
} from 'lucide-react'
import { formatDate, formatPrice } from '@/lib/utils'

interface UserManagementProps {
  users: any[]
}

export function UserManagement({ users }: UserManagementProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterPlan, setFilterPlan] = useState('ALL')
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlan = filterPlan === 'ALL' || user.plan === filterPlan
    return matchesSearch && matchesPlan
  })

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'FREE': return 'secondary'
      case 'PRO': return 'default'
      case 'PREMIUM': return 'premium'
      case 'VIP': return 'premium'
      default: return 'secondary'
    }
  }

  const handleCreditAdjustment = async (userId: string, amount: number) => {
    try {
      const response = await fetch('/api/admin/users/credits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, amount })
      })
      
      if (response.ok) {
        window.location.reload()
      }
    } catch (error) {
      console.error('Credit adjustment failed:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* 검색 및 필터 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 검색 및 필터</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="이름 또는 이메일로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterPlan === 'ALL' ? 'default' : 'outline'}
                onClick={() => setFilterPlan('ALL')}
              >
                전체
              </Button>
              <Button
                variant={filterPlan === 'FREE' ? 'default' : 'outline'}
                onClick={() => setFilterPlan('FREE')}
              >
                무료
              </Button>
              <Button
                variant={filterPlan === 'PRO' ? 'default' : 'outline'}
                onClick={() => setFilterPlan('PRO')}
              >
                Pro
              </Button>
              <Button
                variant={filterPlan === 'PREMIUM' ? 'default' : 'outline'}
                onClick={() => setFilterPlan('PREMIUM')}
              >
                Premium
              </Button>
              <Button
                variant={filterPlan === 'VIP' ? 'default' : 'outline'}
                onClick={() => setFilterPlan('VIP')}
              >
                VIP
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 사용자 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록 ({filteredUsers.length}명)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{user.name}</h3>
                      {user.isAdmin && (
                        <Badge variant="premium">
                          <Shield className="w-3 h-3 mr-1" />
                          관리자
                        </Badge>
                      )}
                      <Badge variant={getPlanColor(user.plan) as any}>
                        {user.plan}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {user.email}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(new Date(user.createdAt))}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold">{user.credits.toLocaleString()} 크레딧</p>
                    <p className="text-sm text-gray-600">
                      {user._count.contents}개 콘텐츠 생성
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCreditAdjustment(user.id, 100)}
                    >
                      +100
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCreditAdjustment(user.id, -100)}
                    >
                      -100
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 통계 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{users.length}</div>
            <div className="text-sm text-gray-600">총 사용자</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {users.filter(u => u.plan !== 'FREE').length}
            </div>
            <div className="text-sm text-gray-600">유료 사용자</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {users.reduce((sum, user) => sum + user._count.contents, 0)}
            </div>
            <div className="text-sm text-gray-600">총 콘텐츠</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {users.reduce((sum, user) => sum + user.credits, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">총 크레딧</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 