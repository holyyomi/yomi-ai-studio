// 인증 관련 유틸리티 및 미들웨어 예시
export function requireAdmin(user: { role: string }) {
  if (user.role !== 'admin') {
    throw new Error('관리자 권한이 필요합니다.')
  }
}

export function requireAuth(user: any) {
  if (!user) {
    throw new Error('로그인이 필요합니다.')
  }
}
