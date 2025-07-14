import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Holy AI Studio - 11개 플랫폼 원클릭 콘텐츠 생성',
  description: 'AI 기반 멀티플랫폼 콘텐츠 생성 도구. 하나의 주제로 11개 SNS 플랫폼 최적화 콘텐츠 자동 생성',
  keywords: ['AI', '콘텐츠', 'SNS', '마케팅', '자동화'],
  // FORCE UPDATE - Cache busting and deployment force update
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
