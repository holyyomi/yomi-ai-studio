"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: '홈', href: '/' },
    { name: '개인콘텐츠', href: '/personal-content' },
    { name: '제품콘텐츠', href: '/product-content' },
    { name: '썸네일(준비중)', href: '/thumbnails', disabled: true },
    { name: '상세페이지(준비중)', href: '/detail-pages', disabled: true },
    { name: '마케팅문구(준비중)', href: '/marketing-copy', disabled: true },
    { name: '기능소개', href: '/features' },
    { name: '가격정책', href: '/pricing' },
    { name: '이용가이드', href: '/guide' },
    { name: '문의하기', href: '/contact' }
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 헤더 - 로고와 인증 버튼 */}
        <div className="flex justify-between items-center h-16">
          {/* 로고 - 중앙 정렬을 위한 빈 공간 */}
          <div className="flex-1"></div>
          
          {/* 로고 - 중앙 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
              Holy AI Studio
            </span>
          </Link>

          {/* 인증 버튼 - 우측 */}
          <div className="flex-1 flex justify-end items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" className="font-medium hover:text-purple-600">
                로그인
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium shadow-lg transform hover:scale-105 transition-all">
                회원가입
              </Button>
            </Link>
          </div>
        </div>

        {/* 네비게이션 탭 - 데스크톱 */}
        <div className="hidden lg:flex items-center justify-center border-t border-gray-100 py-3">
          <div className="flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.disabled ? '#' : item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    item.disabled 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                >
                  {item.name}
                </Link>
                {item.disabled && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 태블릿/모바일 메뉴 버튼 */}
        <div className="lg:hidden flex justify-center py-3 border-t border-gray-100">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-purple-600"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="ml-2 font-medium">메뉴</span>
          </Button>
        </div>

        {/* 태블릿/모바일 메뉴 */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.disabled ? '#' : item.href}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    item.disabled 
                      ? 'text-gray-400 cursor-not-allowed bg-gray-50' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={item.disabled ? (e) => e.preventDefault() : () => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.disabled && (
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
