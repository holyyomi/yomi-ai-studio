"use client"

import * as React from "react"
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Zap, 
  CreditCard, 
  Settings, 
  PlusCircle,
  BarChart3,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface SidebarProps {
  isAdmin?: boolean
}

export function Sidebar({ isAdmin = false }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const userMenuItems = [
    {
      title: '대시보드',
      href: '/dashboard',
      icon: LayoutDashboard
    },
    {
      title: '콘텐츠 생성',
      href: '/dashboard/content',
      icon: PlusCircle
    },
    {
      title: '크레딧 관리',
      href: '/dashboard/credits',
      icon: CreditCard
    },
    {
      title: '설정',
      href: '/dashboard/settings',
      icon: Settings
    }
  ]

  const adminMenuItems = [
    {
      title: '사용자 관리',
      href: '/admin/users',
      icon: Users
    },
    {
      title: '분석',
      href: '/admin/analytics',
      icon: BarChart3
    }
  ]

  const menuItems = isAdmin ? [...userMenuItems, ...adminMenuItems] : userMenuItems

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4">
        {/* 로고 */}
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Holy AI
              </span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>

        {/* 메뉴 항목들 */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isCollapsed && "justify-center px-2"
                  )}
                >
                  <item.icon className={cn("w-4 h-4", !isCollapsed && "mr-3")} />
                  {!isCollapsed && item.title}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
