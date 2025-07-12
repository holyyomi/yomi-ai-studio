"use client"

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CreditDisplay } from './credit-display'
import { 
  User, 
  LogOut, 
  Settings, 
  Bell,
  ChevronDown
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import * as React from "react"

export function DashboardHeader() {
  const { data: session } = useSession()

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* 페이지 제목 */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            안녕하세요, {session?.user?.name}님! 👋
          </h1>
          <p className="text-gray-600">
            오늘도 멋진 콘텐츠를 만들어보세요
          </p>
        </div>

        {/* 우측 메뉴 */}
        <div className="flex items-center space-x-4">
          {/* 크레딧 표시 */}
          <CreditDisplay credits={session?.user?.credits || 0} />

          {/* 플랜 배지 */}
          <Badge variant={session?.user?.plan === 'FREE' ? 'secondary' : 'premium'}>
            {session?.user?.plan || 'FREE'}
          </Badge>

          {/* 알림 */}
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>

          {/* 사용자 메뉴 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="hidden md:block">{session?.user?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                프로필
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                설정
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <LogOut className="w-4 h-4 mr-2" />
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
