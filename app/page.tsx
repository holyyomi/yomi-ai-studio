"use client"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 첫 번째 줄: 로고와 로그인 버튼 */}
          <div className="flex items-center justify-between h-16">
            <div></div> {/* 왼쪽 공간 */}
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <span className="text-2xl font-bold text-purple-600">Holy AI Studio</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors">로그인</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">회원가입</button>
            </div>
          </div>
          {/* 두 번째 줄: 네비게이션 메뉴 */}
          <div className="border-t border-gray-200">
            <div className="flex items-center justify-center space-x-8 py-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">홈</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">개인콘텐츠</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">제품콘텐츠</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">썸네일</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">상세페이지</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">마케팅문구</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">기능소개</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">가격정책</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">이용가이드</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">문의하기</a>
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
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-6xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">콘텐츠 제작의 어려움</h3>
              <p className="text-gray-600">매일 새로운 블로그 포스팅, SNS 게시물 작성에 지쳐있어요</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-6xl mb-4">🤯</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">눈길 끄는 썸네일 부족</h3>
              <p className="text-gray-600">수많은 포스팅 중에서도 눈에 띄는 썸네일 만들기가 어려워요</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
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

      {/* 플랫폼 지원 섹션 - 고급 디자인 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              지원하는 플랫폼
            </h2>
            <p className="text-xl text-gray-600">
              하나의 콘텐츠로 11개 플랫폼을 모두 정복하세요
            </p>
          </div>
          
          {/* 메인 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                🎯 메인
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">📝</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">구글 블로그</h4>
                    <p className="text-gray-600">SEO 최적화된 전문 블로그 포스팅</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    BLOG
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">🧵</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">스레드</h4>
                    <p className="text-gray-600">실시간 소통을 위한 스레드 포스팅</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    THREAD
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 자동 업로드 SNS */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                ⚡ 자동 업로드 SNS
              </span>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📸</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">인스타그램</h4>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AUTO
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">👥</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">페이스북</h4>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AUTO
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🐦</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">트위터</h4>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AUTO
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">링크드인</h4>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AUTO
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📌</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">핀터레스트</h4>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AUTO
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 수동 업로드 플랫폼 */}
          <div>
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                📱 수동 업로드 플랫폼
              </span>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🟢</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">네이버블로그</h4>
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    MANUAL
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📝</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">티스토리</h4>
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    MANUAL
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">☕</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">브런치</h4>
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    MANUAL
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">카카오채널</h4>
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    MANUAL
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🎬</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">유튜브</h4>
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    MANUAL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 베타 사용자 성과 섹션 */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">실제 베타 사용자들의 놀라운 성과</h2>
            <p className="text-xl text-purple-100">데이터로 증명된 Holy AI Studio의 효과</p>
          </div>
          
          {/* 성과 지표 */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">97%</div>
              <div className="text-purple-200 text-lg font-medium">시간 단축</div>
              <div className="text-sm text-purple-300">3시간 → 5분</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">340%</div>
              <div className="text-purple-200 text-lg font-medium">조회수 증가</div>
              <div className="text-sm text-purple-300">평균 대비</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-purple-200 text-lg font-medium">참여율 향상</div>
              <div className="text-sm text-purple-300">댓글, 좋아요 증가</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2,500</div>
              <div className="text-purple-200 text-lg font-medium">월 평균 콘텐츠</div>
              <div className="text-sm text-purple-300">사용자당 생성량</div>
            </div>
          </div>

          {/* 사용자 후기 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div>
                  <div className="font-bold text-lg">마케터 김○○님</div>
                  <div className="text-purple-200 text-sm">디지털 마케팅 전문가</div>
                </div>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                "매일 3시간씩 콘텐츠 만들던 게 이제 5분이면 끝나요! 
                퀄리티는 오히려 더 좋아졌어요."
              </p>
              <div className="flex items-center">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-purple-200 text-sm">5.0/5.0</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <div>
                  <div className="font-bold text-lg">크리에이터 이○○님</div>
                  <div className="text-purple-200 text-sm">인플루언서</div>
                </div>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                "11개 플랫폼 동시 업로드가 정말 혁신적이에요! 
                팔로워가 3배나 늘었습니다."
              </p>
              <div className="flex items-center">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-purple-200 text-sm">5.0/5.0</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <div className="font-bold text-lg">사업자 박○○님</div>
                  <div className="text-purple-200 text-sm">온라인 쇼핑몰 운영</div>
                </div>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                "매출이 40% 증가했어요! AI가 만든 콘텐츠가 
                이렇게 효과적일 줄 몰랐습니다."
              </p>
              <div className="flex items-center">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-purple-200 text-sm">5.0/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 가격 정책 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              지금 시작하면 200 크레딧 무료!
            </h2>
            <p className="text-xl text-gray-600">
              베타 테스트 참여자에게만 제공되는 특별 혜택
            </p>
          </div>
          
          {/* 가격 플랜 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pro 플랜 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">월 299,000원</span>
                  <div className="text-gray-600 mt-2">1,000 크레딧</div>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">개인 브랜딩 콘텐츠</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">제품 마케팅 콘텐츠</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">11개 플랫폼 지원</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">기본 고객 지원</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  시작하기
                </button>
              </div>
            </div>

            {/* Premium 플랜 */}
            <div className="bg-white border-2 border-purple-500 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  가장 인기
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">월 499,000원</span>
                  <div className="text-gray-600 mt-2">2,500 크레딧</div>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Pro 플랜 모든 기능</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">썸네일 자동 생성</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">상세페이지 생성</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">우선 고객 지원</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  시작하기
                </button>
              </div>
            </div>

            {/* VIP 플랜 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">VIP</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">월 999,000원</span>
                  <div className="text-gray-600 mt-2">무제한 크레딧</div>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Premium 플랜 모든 기능</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">무제한 콘텐츠 생성</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">전용 계정 매니저</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">24/7 프리미엄 지원</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  시작하기
                </button>
              </div>
            </div>
          </div>
          
          {/* 최종 CTA */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 mb-4">
              ✅ 지금 무료로 시작하기
            </button>
            <p className="text-sm text-gray-500">
              ⚡ 20명 한정 • 신용카드 불필요 • 언제든 취소 가능
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}