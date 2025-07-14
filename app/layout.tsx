import './globals.css'

export const metadata = {
  title: 'Holy AI Studio',
  description: '11개 플랫폼 AI 콘텐츠 생성 스튜디오',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
