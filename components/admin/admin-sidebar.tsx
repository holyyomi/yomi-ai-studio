"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings,
  CreditCard,
  FileText,
  Shield,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react'

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    {
      title: '대시보드',
      href: '/admin',
      icon: LayoutDashboard
    },
    {
      title: '사용자 관리',
      href: '/admin/users',
      icon: Users
    },
    {
      title: '분석 & 통계',
      href: '/admin/analytics',
      icon: BarChart3
    },
    {
      title: '콘텐츠 관리',
      href: '/admin/contents',
      icon: FileText
    },
    {
      title: '결제 관리',
      href: '/admin/payments',
      icon: CreditCard
    },
    {
      title: '시스템 설정',
      href: '/admin/settings',
      icon: Settings
    }
  ]

  return (
    <div className={cn(
      "bg-gray-900 text-white transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4">
        {/* 로고 */}
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Admin Panel</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white hover:bg-gray-800"
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
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-white hover:bg-gray-800",
                    isCollapsed && "justify-center px-2",
                    isActive && "bg-gray-800"
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