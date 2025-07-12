import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ErrorBoundary } from '@/components/layout/error-boundary'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Holy AI Studio - 11개 플랫폼 콘텐츠 자동 생성',
  description: 'AI 기반 멀티플랫폼 콘텐츠 생성 도구. 하나의 주제로 11개 SNS 플랫폼 최적화 콘텐츠 자동 생성',
  keywords: ['AI', '콘텐츠', 'SNS', '마케팅', '자동화', '인스타그램', '페이스북', '트위터'],
  authors: [{ name: 'Holy AI Studio' }],
  creator: 'Holy AI Studio',
  publisher: 'Holy AI Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Holy AI Studio - 11개 플랫폼 콘텐츠 자동 생성',
    description: 'AI 기반 멀티플랫폼 콘텐츠 생성 도구',
    url: '/',
    siteName: 'Holy AI Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Holy AI Studio',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holy AI Studio - 11개 플랫폼 콘텐츠 자동 생성',
    description: 'AI 기반 멀티플랫폼 콘텐츠 생성 도구',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}
