"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Menu, X, Zap, User, LogOut } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Holy AI Studio
            </span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
              기능소개
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
              가격정책
            </Link>
            <Link href="#guide" className="text-gray-600 hover:text-purple-600 transition-colors">
              이용가이드
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
              문의하기
            </Link>
          </div>

          {/* 사용자 메뉴 */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    대시보드
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => signOut()}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  로그아웃
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    로그인
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="gradient" size="sm">
                    무료 시작
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-600 hover:text-purple-600">
                기능소개
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-purple-600">
                가격정책
              </Link>
              <Link href="#guide" className="text-gray-600 hover:text-purple-600">
                이용가이드
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-purple-600">
                문의하기
              </Link>
              
              {session ? (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Link href="/dashboard">
                    <Button variant="outline" size="sm" className="w-full">
                      대시보드
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => signOut()}
                    className="w-full"
                  >
                    로그아웃
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="w-full">
                      로그인
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button variant="gradient" size="sm" className="w-full">
                      무료 시작
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
