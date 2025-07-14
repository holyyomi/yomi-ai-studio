"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 초간단 테스트 회원가입
    if (name && email && password) {
      alert(`회원가입 시도: ${name} (${email})`)
      // 실제로는 여기서 사용자 생성 후 로그인 페이지로 이동
    } else {
      alert("모든 필드를 입력하세요")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-bold text-purple-600">
            ⚡ Holy AI Studio
          </a>
          <h2 className="text-2xl font-bold mt-4">회원가입</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              placeholder="홍길동"
              required
            />
          </div>

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
            회원가입
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="/login" className="text-purple-600 hover:underline">
            이미 계정이 있으신가요? 로그인
          </a>
        </div>

        <div className="mt-8 p-4 bg-green-50 rounded">
          <h3 className="font-bold text-sm">테스트 상태:</h3>
          <p className="text-sm">✅ 페이지 로드 성공</p>
          <p className="text-sm">✅ 폼 입력 가능</p>
          <p className="text-sm">🔄 회원가입 기능 테스트 중</p>
        </div>
      </div>
    </div>
  )
} 