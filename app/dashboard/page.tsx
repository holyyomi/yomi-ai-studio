"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">로딩 중...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold text-purple-600">Holy AI Studio</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">안녕하세요, {user.name}님!</span>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">대시보드</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">개인 브랜딩 콘텐츠</h2>
            <p className="text-gray-600 mb-4">개인 브랜드를 위한 콘텐츠를 생성합니다</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              생성하기
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">제품 마케팅 콘텐츠</h2>
            <p className="text-gray-600 mb-4">제품 판매를 위한 콘텐츠를 생성합니다</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              생성하기
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
