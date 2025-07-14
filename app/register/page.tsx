"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const goHome = () => {
    window.location.href = '/'
  }

  const goToLogin = () => {
    window.location.href = '/login'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (name && email && password) {
      alert(`회원가입 시도: ${name} (${email})`)
      // 나중에 실제 회원가입 처리
    } else {
      alert("모든 필드를 입력하세요")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 
            className="text-2xl font-bold text-purple-600 cursor-pointer"
            onClick={goHome}
          >
            ⚡ Holy AI Studio
          </h1>
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
          <button 
            onClick={goToLogin}
            className="text-purple-600 hover:underline"
          >
            이미 계정이 있으신가요? 로그인
          </button>
        </div>

        <div className="mt-8 p-4 bg-green-50 rounded">
          <h3 className="font-bold text-sm">테스트 상태:</h3>
          <p className="text-sm">✅ 페이지 로드 성공</p>
          <p className="text-sm">✅ 폼 입력 가능</p>
          <button 
            onClick={() => alert('회원가입 페이지 JavaScript 작동!')}
            className="text-sm bg-green-500 text-white px-2 py-1 rounded mt-2"
          >
            JS 테스트
          </button>
        </div>
      </div>
    </div>
  )
} 