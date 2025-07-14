"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 간단한 헤더 */}
      <header className="bg-purple-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">⚡ Holy AI Studio</h1>
          <div className="space-x-4">
            <a href="/login" className="bg-white text-purple-600 px-4 py-2 rounded">
              로그인
            </a>
            <a href="/register" className="bg-purple-700 px-4 py-2 rounded">
              회원가입
            </a>
          </div>
        </div>
      </header>

      {/* 간단한 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">11개 플랫폼, 한 번에 정복하세요</h2>
        <p className="text-xl text-gray-600 mb-8">
          AI로 콘텐츠를 자동 생성하는 스튜디오
        </p>
        <a 
          href="/register" 
          className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg inline-block"
        >
          무료로 시작하기
        </a>
      </main>

      {/* 테스트 섹션 */}
      <section className="bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">테스트 상태</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-bold">메인 페이지</h4>
              <p className="text-green-600">✅ 작동중</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-bold">로그인</h4>
              <p className="text-yellow-600">🔄 테스트 필요</p>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-bold">회원가입</h4>
              <p className="text-yellow-600">🔄 테스트 필요</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}