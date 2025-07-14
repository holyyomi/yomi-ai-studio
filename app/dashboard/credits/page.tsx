"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"

export default function CreditsPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }
    setLoading(false)
  }, [router])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">로딩 중...</div>
  }

  if (!user) {
    return null
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">크레딧 관리</h1>
          <p className="text-gray-600">
            크레딧 사용 내역을 확인하고 충전하세요
          </p>
        </div>

        {/* 크레딧 요약 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">보유 크레딧</p>
                <p className="text-3xl font-bold text-purple-600">{user.credits || 0}</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">이번 달 사용</p>
                <p className="text-3xl font-bold text-blue-600">0</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">총 사용량</p>
                <p className="text-3xl font-bold text-green-600">0</p>
              </div>
              <div className="text-4xl">📈</div>
            </div>
          </div>
        </div>

        {/* 크레딧 충전 */}
        <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">크레딧 충전</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors cursor-pointer">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">100 크레딧</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">₩29,900</p>
                <p className="text-sm text-gray-500 mb-4">개인 콘텐츠 10개 생성</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  선택하기
                </button>
              </div>
            </div>
            
            <div className="border-2 border-purple-500 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  인기
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">300 크레딧</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">₩79,900</p>
                <p className="text-sm text-gray-500 mb-4">개인 콘텐츠 30개 생성</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  선택하기
                </button>
              </div>
            </div>
            
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors cursor-pointer">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">1000 크레딧</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">₩199,900</p>
                <p className="text-sm text-gray-500 mb-4">개인 콘텐츠 100개 생성</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  선택하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 사용 내역 */}
        <div className="bg-white rounded-2xl shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-medium text-gray-900">사용 내역</h2>
          </div>
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">아직 사용 내역이 없습니다</h3>
            <p className="text-gray-500">첫 번째 콘텐츠를 생성해보세요!</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
