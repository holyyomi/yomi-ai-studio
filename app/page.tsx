import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Zap, Clock, Target, TrendingUp, Sparkles, Upload, Download, FileText } from 'lucide-react'

// Holy AI Studio - Final Production Version

export default function HomePage() {
  const platforms = {
    blog: [
      {
        name: '구글 블로그',
        icon: '📝',
        description: 'SEO 최적화 긴 콘텐츠 생성',
        color: 'from-purple-500 to-pink-500',
        badge: 'blog'
      }
    ],
    auto: [
      {
        name: '인스타그램',
        icon: '📷',
        description: '해시태그 자동 생성',
        color: 'from-pink-500 to-purple-500',
        badge: 'auto'
      },
      {
        name: '페이스북',
        icon: '👥',
        description: '참여 유도 콘텐츠',
        color: 'from-blue-500 to-indigo-500',
        badge: 'auto'
      },
      {
        name: '트위터',
        icon: '🐦',
        description: '140자 최적화',
        color: 'from-sky-500 to-blue-500',
        badge: 'auto'
      },
      {
        name: '링크드인',
        icon: '💼',
        description: '전문성 강조',
        color: 'from-blue-600 to-indigo-600',
        badge: 'auto'
      },
      {
        name: '핀터레스트',
        icon: '📌',
        description: '시각적 최적화',
        color: 'from-red-500 to-pink-500',
        badge: 'auto'
      }
    ],
    manual: [
      {
        name: '네이버 블로그',
        icon: '🟢',
        description: '한국형 SEO',
        color: 'from-green-500 to-emerald-500',
        badge: 'manual'
      },
      {
        name: '티스토리',
        icon: '📖',
        description: '개인 블로그 최적화',
        color: 'from-orange-500 to-red-500',
        badge: 'manual'
      },
      {
        name: '브런치',
        icon: '☕',
        description: '스토리텔링 강화',
        color: 'from-amber-500 to-orange-500',
        badge: 'manual'
      },
      {
        name: '카카오채널',
        icon: '💬',
        description: '친근한 톤앤매너',
        color: 'from-yellow-500 to-orange-500',
        badge: 'manual'
      },
      {
        name: '유튜브',
        icon: '🎥',
        description: '영상 스크립트 생성',
        color: 'from-red-600 to-red-500',
        badge: 'manual'
      }
    ]
  }

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
                Holy AI Studio
              </span>
              <br />
              <span className="text-gray-900">
                복잡한 콘텐츠 제작,
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                시간 낭비는 이제 그만!
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
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  <Zap className="w-6 h-6 mr-2" />
                  무료로 시작하기
                  <span className="ml-2 text-purple-200">→</span>
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" className="btn-outline text-lg px-8 py-6">
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
      <section className="py-20 bg-gray-100">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              이런 고민, 혹시 있으신가요?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 콘텐츠 제작의 어려움 */}
              <div className="card p-8 hover-lift">
                <div className="text-5xl mb-6">😰</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">콘텐츠 제작의 어려움</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600 leading-relaxed">
                    매일 새로운 블로그 포스팅, SNS 게시물 작성에 지쳐있어요
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    각 플랫폼별 최적화 규칙을 알기 어려워요
                  </p>
                </div>
              </div>

              {/* 눈길 끄는 썸네일 부족 */}
              <div className="card p-8 hover-lift">
                <div className="text-5xl mb-6">🤯</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">눈길 끄는 썸네일 부족</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600 leading-relaxed">
                    수많은 포스팅 중에서도 눈에 띄는 썸네일 만들기가 어려워요
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    전문적인 디자인 도구 사용법을 모르겠어요
                  </p>
                </div>
              </div>

              {/* 마케팅 문구 완성도 한계 */}
              <div className="card p-8 hover-lift">
                <div className="text-5xl mb-6">📉</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">마케팅 문구 완성도 한계</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600 leading-relaxed">
                    고객의 마음을 움직이는 강력한 문구 작성이 어려워요
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    구매 전환율을 높이는 설득력 있는 메시지가 필요해요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 해결책 섹션 */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Holy AI Studio가 계획을 제시하고 실패를 피하게 도와드립니다
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 99% 시간 절약 */}
              <div className="card-gradient text-center p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">99% 시간 절약</h3>
                <p className="text-gray-600 leading-relaxed">11개 플랫폼 콘텐츠를 5분만에</p>
              </div>

              {/* 플랫폼 최적화 */}
              <div className="card-gradient text-center p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">플랫폼 최적화</h3>
                <p className="text-gray-600 leading-relaxed">각 플랫폼에 맞는 완벽한 콘텐츠</p>
              </div>

              {/* 바이럴 보장 */}
              <div className="card-gradient text-center p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">바이럴 보장</h3>
                <p className="text-gray-600 leading-relaxed">AI가 분석한 바이럴 요소 적용</p>
              </div>

              {/* 완전 자동화 */}
              <div className="card-gradient text-center p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">완전 자동화</h3>
                <p className="text-gray-600 leading-relaxed">클릭 한 번으로 모든 것 완료</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 플랫폼 섹션 - 고급 디자인 */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              11개 플랫폼, 한 번에 정복하세요
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              각 플랫폼에 완벽 최적화된 콘텐츠를 자동 생성합니다
            </p>

            {/* 플랫폼 카테고리 */}
            <div className="space-y-12">
              {/* 메인 블로그 */}
              <div className="animate-slideUp">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">메인 블로그</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                  {platforms.blog.map((platform, index) => (
                    <div key={platform.name} className={`platform-card-blog group transform hover:scale-105 transition-all duration-300`}>
                      <div className={`badge-blog`}>BLOG</div>
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          {platform.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{platform.name}</h4>
                          <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">{platform.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 자동 업로드 SNS */}
              <div className="animate-slideUp">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">자동 업로드 SNS</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {platforms.auto.map((platform, index) => (
                    <div key={platform.name} className={`platform-card-auto group transform hover:scale-105 transition-all duration-300`}>
                      <div className={`badge-auto`}>AUTO</div>
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          {platform.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{platform.name}</h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-500 transition-colors duration-300">{platform.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 수동 업로드 플랫폼 */}
              <div className="animate-slideUp">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">수동 업로드 플랫폼</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {platforms.manual.map((platform, index) => (
                    <div key={platform.name} className={`platform-card-manual group transform hover:scale-105 transition-all duration-300`}>
                      <div className={`badge-manual`}>MANUAL</div>
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          {platform.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{platform.name}</h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-500 transition-colors duration-300">{platform.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 베타 사용자 성과 섹션 - 고도화 */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            {/* 베타 테스트 배지 */}
            <div className="inline-flex items-center bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-ping"></span>
              베타 테스트 진행 중 - 20명 한정
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              실제 베타 사용자들의 놀라운 성과
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              20명 한정 베타 테스터들이 달성한 실제 결과입니다
            </p>
          </div>

          {/* 성과 지표 카드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-3xl font-bold mb-2">97%</div>
              <div className="text-purple-100 font-semibold mb-1">시간 단축</div>
              <div className="text-sm text-purple-200">3시간 → 5분</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-3xl font-bold mb-2">340%</div>
              <div className="text-purple-100 font-semibold mb-1">조회수 증가</div>
              <div className="text-sm text-purple-200">기존 대비 상승</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl mb-2">💡</div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100 font-semibold mb-1">만족도</div>
              <div className="text-sm text-purple-200">아이디어 고갈 해결</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-3xl font-bold mb-2">2.5배</div>
              <div className="text-purple-100 font-semibold mb-1">생산량 증가</div>
              <div className="text-sm text-purple-200">일일 콘텐츠</div>
            </div>
          </div>

          {/* 사용자 후기 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  김
                </div>
                <div>
                  <div className="font-bold">마케터 김○○님</div>
                  <div className="text-sm text-purple-200">디지털 마케팅 전문가</div>
                </div>
              </div>
              <p className="text-purple-100 leading-relaxed mb-4">
                "매일 3시간씩 콘텐츠 만들던 게 이제 5분이면 끝나요! 정말 믿기지 않아요."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  이
                </div>
                <div>
                  <div className="font-bold">블로거 이○○님</div>
                  <div className="text-sm text-purple-200">라이프스타일 블로거</div>
                </div>
              </div>
              <p className="text-purple-100 leading-relaxed mb-4">
                "11개 플랫폼에 동시 업로드가 이렇게 쉬울 줄이야. 시간이 정말 많이 절약돼요!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  박
                </div>
                <div>
                  <div className="font-bold">사업자 박○○님</div>
                  <div className="text-sm text-purple-200">온라인 쇼핑몰 운영</div>
                </div>
              </div>
              <p className="text-purple-100 leading-relaxed mb-4">
                "매출이 2배 늘었어요. 콘텐츠 마케팅 때문에 고민하지 마세요!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>

          {/* 신뢰도 강화 섹션 */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                <span className="text-sm font-semibold">실제 사용자 검증</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                <span className="text-sm font-semibold">20명 한정 특별 혜택</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                <span className="text-sm font-semibold">무료 베타 테스트</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center card-gradient p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              지금 시작하면 <span className="gradient-text">200 크레딧</span> 무료!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              베타 테스트 참여자에게만 제공되는 특별 혜택
            </p>
            <Link href="/register">
              <Button size="lg" className="btn-primary text-lg px-8 py-4 animate-bounce-subtle">
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
