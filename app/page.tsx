"use client"

export default function HomePage() {
  const goToLogin = () => {
    window.location.href = '/login'
  }

  const goToRegister = () => {
    window.location.href = '/register'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-purple-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => window.location.href = '/'}>
            ⚡ Holy AI Studio
          </h1>
          <div className="space-x-4">
            <button 
              onClick={goToLogin}
              className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              로그인
            </button>
            <button 
              onClick={goToRegister}
              className="bg-purple-700 px-4 py-2 rounded hover:bg-purple-800"
            >
              회원가입
            </button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">11개 플랫폼, 한 번에 정복하세요</h2>
        <p className="text-xl text-gray-600 mb-8">
          AI로 콘텐츠를 자동 생성하는 스튜디오
        </p>
        <button 
          onClick={goToRegister}
          className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-purple-700"
        >
          무료로 시작하기
        </button>
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
              <button 
                onClick={goToLogin}
                className="text-blue-600 hover:underline"
              >
                🔄 테스트 클릭
              </button>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-bold">회원가입</h4>
              <button 
                onClick={goToRegister}
                className="text-blue-600 hover:underline"
              >
                🔄 테스트 클릭
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 디버그 정보 */}
      <div className="bg-yellow-100 p-4 text-center">
        <p className="text-sm">
          🔧 디버그: 현재 URL = {typeof window !== 'undefined' ? window.location.href : '로딩중'}
        </p>
        <button 
          onClick={() => alert('JavaScript가 작동합니다!')}
          className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
        >
          JS 테스트 버튼
        </button>
      </div>
    </div>
  )
}