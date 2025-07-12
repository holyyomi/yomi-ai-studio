"use client"

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  LogOut, 
  Bell,
  Shield
} from 'lucide-react'

interface AdminHeaderProps {
  admin: any
}

export function AdminHeader({ admin }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* 페이지 제목 */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
            <Shield className="w-6 h-6 text-purple-600" />
            <span>관리자 대시보드</span>
          </h1>
          <p className="text-gray-600">
            Holy AI Studio 시스템 관리
          </p>
        </div>

        {/* 우측 메뉴 */}
        <div className="flex items-center space-x-4">
          {/* 알림 */}
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>

          {/* 관리자 정보 */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="font-medium">{admin.name}</p>
              <Badge variant="premium" className="text-xs">
                관리자
              </Badge>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* 로그아웃 */}
          <Button variant="ghost" size="sm" onClick={() => signOut()}>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
} 