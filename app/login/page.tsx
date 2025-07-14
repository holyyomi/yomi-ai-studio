"use client"

import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 초간단 테스트 로그인
    if (email && password) {
      alert(`로그인 시도: ${email}`)
      // 실제로는 여기서 검증 후 대시보드로 이동
    } else {
      alert("이메일과 비밀번호를 입력하세요")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-bold text-purple-600">
            ⚡ Holy AI Studio
          </a>
          <h2 className="text-2xl font-bold mt-4">로그인</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="비밀번호"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            로그인
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="/register" className="text-purple-600 hover:underline">
            계정이 없으신가요? 회원가입
          </a>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded">
          <h3 className="font-bold text-sm">테스트 상태:</h3>
          <p className="text-sm">✅ 페이지 로드 성공</p>
          <p className="text-sm">✅ 폼 입력 가능</p>
          <p className="text-sm">🔄 로그인 기능 테스트 중</p>
        </div>
      </div>
    </div>
  )
} 