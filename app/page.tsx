import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, Clock, Target, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-24 lg:py-32">
        {/* 배경 효과 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* 메인 헤드라인 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fadeIn">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                복잡한 콘텐츠 제작,
              </span>
              <br />
              <span className="text-gray-900">
                시간 낭비, 비효율적인
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                마케팅은 이제 그만!
              </span>
            </h1>

            {/* 서브 헤드라인 */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium leading-relaxed animate-slideUp">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
                Holy AI
              </span>
              는 당신의 비즈니스 성장을 위한 최적의 AI 자동화 솔루션입니다.
            </p>

            {/* 설명 */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp">
              11개 플랫폼 최적화 콘텐츠를 원클릭으로 생성하고, 자동 업로드까지 완료하세요.
            </p>

            {/* 핵심 가치 3개 */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slideUp">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">99% 시간 절약</h3>
                  <p className="text-sm text-gray-600">5분만에 완성</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">플랫폼 최적화</h3>
                  <p className="text-sm text-gray-600">완벽한 맞춤형</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">바이럴 보장</h3>
                  <p className="text-sm text-gray-600">AI 분석 기반</p>
                </div>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp">
              <Link href="/register">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-bold">
                  <Zap className="w-6 h-6 mr-2" />
                  무료로 시작하기
                  <span className="ml-2 text-purple-200">→</span>
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-purple-500 hover:text-purple-600 transition-all duration-300 text-lg px-8 py-6 font-medium">
                  기능 자세히 보기
                </Button>
              </Link>
            </div>

            {/* 신뢰도 표시 */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 animate-fadeIn">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>신용카드 불필요</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>3분 내 가입 완료</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>언제든 취소 가능</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문제점 제시 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              이런 고민 있으시죠?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-4">😰</div>
                <h3 className="text-xl font-semibold mb-2 text-red-700">시간 부족</h3>
                <p className="text-red-600">11개 플랫폼에 각각 다른 콘텐츠를 만들 시간이 없어요</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <div className="text-4xl mb-4">🤯</div>
                <h3 className="text-xl font-semibold mb-2 text-orange-700">복잡함</h3>
                <p className="text-orange-600">각 플랫폼마다 다른 규칙과 최적화 방법을 알기 어려워요</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <div className="text-4xl mb-4">📉</div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">낮은 성과</h3>
                <p className="text-yellow-600">열심히 만든 콘텐츠가 생각만큼 반응이 좋지 않아요</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Holy AI Studio가 해결해드립니다
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">99% 시간 절약</h3>
                <p className="text-gray-600">11개 플랫폼 콘텐츠를 5분만에</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">플랫폼 최적화</h3>
                <p className="text-gray-600">각 플랫폼에 맞는 완벽한 콘텐츠</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">바이럴 보장</h3>
                <p className="text-gray-600">AI가 분석한 바이럴 요소 적용</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">완전 자동화</h3>
                <p className="text-gray-600">클릭 한 번으로 모든 것 완료</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 플랫폼 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              지원하는 플랫폼
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              11개 주요 SNS 플랫폼을 모두 지원합니다
            </p>
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
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-110 cursor-pointer border"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{platform.icon}</div>
                    <p className="text-xs font-medium text-gray-700">{platform.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 사회적 증명 섹션 */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              베타 사용자 성과
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">1,247%</div>
                <div className="text-purple-100">평균 조회수 증가</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-purple-100">시간 절약</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">18개</div>
                <div className="text-purple-100">평균 바이럴 게시물</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              지금 시작하면 <span className="text-purple-600">200 크레딧</span> 무료!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              베타 테스트 참여자에게만 제공되는 특별 혜택
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg transform hover:scale-105 transition-all animate-pulse text-lg px-8 py-4">
                ✅ 지금 무료로 시작하기
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-6">
              ⚡ 20명 한정 • 신용카드 불필요 • 언제든 취소 가능
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
