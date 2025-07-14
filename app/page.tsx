import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* 네비게이션 */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Holy AI Studio
              </span>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/login" 
                className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                로그인
              </Link>
              <Link 
                href="/register"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                무료 시작
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 상단 배지 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium animate-bounce">
            👥 베타 테스트 20명 한정 모집
          </div>
        </div>

        {/* 메인 헤드라인 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              11개 플랫폼,
            </span>
            <br />
            <span className="text-gray-900">한 번에 정복하세요</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            하나의 주제 입력으로 11개 SNS 플랫폼에 최적화된 콘텐츠를 자동 생성하고 업로드하는 
            <span className="font-semibold text-purple-600"> AI 콘텐츠 스튜디오</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              ⚡ 무료로 시작하기 →
            </Link>
            <Link 
              href="#demo"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition-all"
            >
              데모 영상 보기
            </Link>
          </div>
        </div>

        {/* 플랫폼 그리드 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            지원하는 플랫폼
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
            {[
              { name: '구글 블로그', icon: '📝' },
              { name: '인스타그램', icon: '📷' },
              { name: '페이스북', icon: '👥' },
              { name: '트위터', icon: '🐦' },
              { name: '링크드인', icon: '💼' },
              { name: '핀터레스트', icon: '📌' },
              { name: '네이버 블로그', icon: '🟢' },
              { name: '티스토리', icon: '📖' },
              { name: '브런치', icon: '☕' },
              { name: '카카오 채널', icon: '💬' },
              { name: '유튜브', icon: '🎥' }
            ].map((platform, index) => (
              <div
                key={platform.name}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-110 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <p className="text-xs font-medium text-gray-700">{platform.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 혜택 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { title: '99% 시간 절약', description: '11개 플랫폼 콘텐츠를 5분만에', icon: '⏰' },
            { title: '플랫폼 최적화', description: '각 플랫폼에 맞는 완벽한 콘텐츠', icon: '🎯' },
            { title: '바이럴 보장', description: 'AI가 분석한 바이럴 요소 적용', icon: '📈' },
            { title: '완전 자동화', description: '클릭 한 번으로 모든 것 완료', icon: '✨' }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            지금 시작하면 <span className="text-purple-600">200 크레딧</span> 무료!
          </h3>
          <p className="text-gray-600 mb-8">
            베타 테스트 참여자에게만 제공되는 특별 혜택
          </p>
          <Link 
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg animate-pulse"
          >
            ✅ 지금 무료로 시작하기
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            ⚡ 20명 한정 • 신용카드 불필요 • 언제든 취소 가능
          </p>
        </div>
      </div>
    </div>
  )
}
