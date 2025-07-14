import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 로고 및 설명 */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="text-xl font-bold">Holy AI Studio</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              AI 기반 멀티플랫폼 콘텐츠 생성 도구로 11개 플랫폼에 최적화된 콘텐츠를 한 번에 만들어보세요.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-400 hover:text-white">기능소개</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">가격정책</Link></li>
              <li><Link href="/guide" className="text-gray-400 hover:text-white">이용가이드</Link></li>
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white">대시보드</Link></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객지원</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white">문의하기</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">자주묻는질문</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white">기술지원</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Holy AI Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
