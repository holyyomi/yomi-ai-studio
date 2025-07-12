import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/register')
    const isAdminPage = req.nextUrl.pathname.startsWith('/admin')
    const isDashboard = req.nextUrl.pathname.startsWith('/dashboard')

    // 인증 페이지에서 이미 로그인된 사용자 리다이렉트
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      return null
    }

    // 대시보드 접근 시 인증 필요
    if (isDashboard) {
      if (!isAuth) {
        return NextResponse.redirect(new URL('/login', req.url))
      }
      return null
    }

    // 관리자 페이지 접근 시 관리자 권한 필요
    if (isAdminPage) {
      if (!isAuth || !token?.isAdmin) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      return null
    }

    return null
  },
  {
    callbacks: {
      authorized: () => true
    }
  }
)

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/login', '/register']
} 