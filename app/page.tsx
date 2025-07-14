"use client"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 로고 */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                ⚡
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Holy AI Studio
              </span>
            </div>

            {/* 네비게이션 */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">홈</a>
              <a href="/personal" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">개인콘텐츠</a>
              <a href="/product" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">제품콘텐츠</a>
              <a href="/thumbnail" className="text-gray-500 hover:text-purple-600 transition-colors text-sm font-medium flex items-center">
                썸네일(준비중) <span className="text-orange-500 ml-1">●</span>
              </a>
              <a href="/detail" className="text-gray-500 hover:text-purple-600 transition-colors text-sm font-medium flex items-center">
                상세페이지(준비중) <span className="text-orange-500 ml-1">●</span>
              </a>
              <a href="/marketing" className="text-gray-500 hover:text-purple-600 transition-colors text-sm font-medium flex items-center">
                마케팅문구(준비중) <span className="text-orange-500 ml-1">●</span>
              </a>
              <a href="/features" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">기능소개</a>
              <a href="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">가격정책</a>
              <a href="/guide" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">이용가이드</a>
              <a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">문의하기</a>
            </nav>

            {/* 로그인/회원가입 버튼 */}
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                로그인
              </a>
              <a href="/register" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
                회원가입
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            11개 플랫폼,<br />
            한 번에 정복하세요
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
            하나의 주제 입력으로 11개 SNS 플랫폼에 최적화된 콘텐츠를 자동 생성하는 AI 콘텐츠 스튜디오
          </p>
          <a href="/register" className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105">
            ⚡ 무료로 시작하기
          </a>
        </div>
      </section>

      {/* 문제점 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              콘텐츠 제작의 고민을 해결하세요
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              매일 반복되는 콘텐츠 제작의 어려움을 AI가 해결해드립니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 문제점 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">콘텐츠 제작의 어려움</h3>
              <p className="text-gray-600 leading-relaxed">
                매일 새로운 블로그 포스팅, SNS 게시물 작성에 지쳐있어요
              </p>
            </div>

            {/* 문제점 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🤯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">눈길 끄는 썸네일 부족</h3>
              <p className="text-gray-600 leading-relaxed">
                수많은 포스팅 중에서도 눈에 띄는 썸네일 만들기가 어려워요
              </p>
            </div>

            {/* 문제점 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">마케팅 문구 완성도 한계</h3>
              <p className="text-gray-600 leading-relaxed">
                고객의 마음을 움직이는 강력한 문구 작성이 어려워요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 해결책 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              왜 Holy AI Studio인가?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI의 힘으로 콘텐츠 제작의 모든 고민을 해결합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 해결책 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">99% 시간 절약</h3>
              <p className="text-gray-600">
                11개 플랫폼 콘텐츠를 5분만에
              </p>
            </div>

            {/* 해결책 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">전문가급 퀄리티</h3>
              <p className="text-gray-600">
                AI가 만든 전문가 수준의 콘텐츠
              </p>
            </div>

            {/* 해결책 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11개 플랫폼 최적화</h3>
              <p className="text-gray-600">
                각 플랫폼에 맞는 최적화된 형태
              </p>
            </div>

            {/* 해결책 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">합리적인 가격</h3>
              <p className="text-gray-600">
                월 299,000원부터 시작
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 플랫폼 지원 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              지원하는 플랫폼
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              11개 주요 SNS 플랫폼을 모두 지원합니다
            </p>
          </div>

          {/* 메인 플랫폼 */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border-4 border-purple-600 relative">
              <div className="absolute -top-3 -right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                메인
              </div>
              <div className="text-5xl mb-4">📝</div>
              <div className="text-xl font-semibold text-gray-900">구글 블로그</div>
            </div>
          </div>

          {/* 자동 업로드 플랫폼 */}
          <div className="mb-12">
            <h3 className="text-center text-lg font-semibold text-gray-700 mb-8">자동 업로드</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: '인스타그램', icon: '📷' },
                { name: '페이스북', icon: '👥' },
                { name: '트위터', icon: '🐦' },
                { name: '링크드인', icon: '💼' },
                { name: '핀터레스트', icon: '📌' }
              ].map((platform, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block">
                    AUTO
                  </div>
                  <div className="text-3xl mb-3">{platform.icon}</div>
                  <div className="text-sm font-semibold text-gray-900">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 수동 업로드 플랫폼 */}
          <div>
            <h3 className="text-center text-lg font-semibold text-gray-700 mb-8">수동 업로드</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: '네이버블로그', icon: '🟢' },
                { name: '티스토리', icon: '📖' },
                { name: '브런치', icon: '☕' },
                { name: '카카오채널', icon: '💬' },
                { name: '유튜브', icon: '🎥' }
              ].map((platform, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block">
                    MANUAL
                  </div>
                  <div className="text-3xl mb-3">{platform.icon}</div>
                  <div className="text-sm font-semibold text-gray-900">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            지금 시작하면 200 크레딧 무료!
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            베타 테스트 참여자에게만 제공되는 특별 혜택
          </p>
          <a href="/register" className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105">
            ✅ 지금 무료로 시작하기
          </a>
        </div>
      </section>
    </div>
  )
}