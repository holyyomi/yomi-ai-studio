"use client"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <span className="text-xl font-bold">Holy AI Studio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-purple-200 transition-colors">홈</a>
              <a href="#" className="hover:text-purple-200 transition-colors">개인콘텐츠</a>
              <a href="#" className="hover:text-purple-200 transition-colors">제품콘텐츠</a>
              <a href="#" className="hover:text-purple-200 transition-colors">기능소개</a>
              <a href="#" className="hover:text-purple-200 transition-colors">가격정책</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                로그인
              </button>
              <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            11개 플랫폼,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              한 번에 정복하세요
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            하나의 주제 입력으로 11개 SNS 플랫폼에 최적화된 콘텐츠를 자동 생성하는 AI 콘텐츠 스튜디오
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            ⚡ 무료로 시작하기
          </button>
        </div>
      </section>

      {/* 문제점 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            이런 고민, 혹시 있으신가요?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-6xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">콘텐츠 제작의 어려움</h3>
              <p className="text-gray-600">매일 새로운 블로그 포스팅, SNS 게시물 작성에 지쳐있어요</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-6xl mb-4">🤯</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">눈길 끄는 썸네일 부족</h3>
              <p className="text-gray-600">수많은 포스팅 중에서도 눈에 띄는 썸네일 만들기가 어려워요</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-6xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">마케팅 문구 완성도 한계</h3>
              <p className="text-gray-600">고객의 마음을 움직이는 강력한 문구 작성이 어려워요</p>
            </div>
          </div>
        </div>
      </section>

      {/* 해결책 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Holy AI Studio가 해결해드립니다
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">99% 시간 절약</h3>
              <p className="text-gray-600">11개 플랫폼 콘텐츠를 5분만에</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">전문가급 퀄리티</h3>
              <p className="text-gray-600">AI가 만든 전문가 수준의 콘텐츠</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">11개 플랫폼 최적화</h3>
              <p className="text-gray-600">각 플랫폼에 맞는 최적화된 형태</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">합리적인 가격</h3>
              <p className="text-gray-600">월 299,000원부터 시작</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 시작하면 200 크레딧 무료!</h2>
          <p className="text-xl mb-8 text-purple-100">베타 테스트 참여자에게만 제공되는 특별 혜택</p>
          <button className="bg-white text-purple-600 px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
            ✅ 지금 무료로 시작하기
          </button>
          <p className="text-sm text-purple-200 mt-4">⚡ 20명 한정 • 신용카드 불필요 • 언제든 취소 가능</p>
        </div>
      </section>
    </div>
  )
}