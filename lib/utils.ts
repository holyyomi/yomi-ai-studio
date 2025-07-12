import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 크레딧 계산 함수
export function calculateCredits(platforms: string[], hasImages: boolean = false): number {
  let totalCredits = 0
  
  platforms.forEach(platform => {
    // 플랫폼별 기본 크레딧
    switch (platform) {
      case 'GOOGLE_BLOG':
        totalCredits += 3 // 긴 글
        break
      case 'INSTAGRAM':
      case 'FACEBOOK':
      case 'TWITTER':
      case 'LINKEDIN':
      case 'PINTEREST':
        totalCredits += 2 // 짧은 글
        break
      case 'NAVER_BLOG':
      case 'TISTORY':
      case 'BRUNCH':
      case 'KAKAO_CHANNEL':
        totalCredits += 2 // 중간 글
        break
      default:
        totalCredits += 2
    }
    // 이미지 생성 시 추가 크레딧
    if (hasImages) {
      totalCredits += 20
    }
  })
  return totalCredits
}

// 플랫폼 정보
export const PLATFORMS = {
  GOOGLE_BLOG: { name: '구글 블로그', icon: '📝', color: 'bg-red-500', autoUpload: true },
  INSTAGRAM: { name: '인스타그램', icon: '📷', color: 'bg-pink-500', autoUpload: true },
  FACEBOOK: { name: '페이스북', icon: '👥', color: 'bg-blue-600', autoUpload: true },
  TWITTER: { name: '트위터', icon: '🐦', color: 'bg-blue-400', autoUpload: true },
  LINKEDIN: { name: '링크드인', icon: '💼', color: 'bg-blue-700', autoUpload: true },
  PINTEREST: { name: '핀터레스트', icon: '📌', color: 'bg-red-600', autoUpload: true },
  NAVER_BLOG: { name: '네이버 블로그', icon: '🟢', color: 'bg-green-500', autoUpload: false },
  TISTORY: { name: '티스토리', icon: '📖', color: 'bg-orange-500', autoUpload: false },
  BRUNCH: { name: '브런치', icon: '☕', color: 'bg-amber-600', autoUpload: false },
  KAKAO_CHANNEL: { name: '카카오 채널', icon: '💬', color: 'bg-yellow-500', autoUpload: false },
  YOUTUBE: { name: '유튜브', icon: '🎥', color: 'bg-red-600', autoUpload: false }
}

// 가격 정보
export const PLANS = {
  FREE: { name: '무료', price: 0, credits: 200, features: ['200 크레딧', '기본 플랫폼 지원'] },
  PRO: { name: 'Pro', price: 299000, credits: 1000, features: ['1,000 크레딧', '모든 플랫폼 지원', '자동 업로드'] },
  PREMIUM: { name: 'Premium', price: 499000, credits: 2000, features: ['2,000 크레딧', '모든 플랫폼 지원', '자동 업로드', '우선 지원'] },
  VIP: { name: 'VIP', price: 999000, credits: 5000, features: ['5,000 크레딧', '모든 플랫폼 지원', '자동 업로드', '전담 지원', '커스텀 기능'] }
}

// 날짜 포맷팅
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// 숫자 포맷팅
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ko-KR').format(num)
}

// 가격 포맷팅
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(price)
}

// 텍스트 자르기
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// 상태 색상 매핑
export function getStatusColor(status: string): string {
  switch (status) {
    case 'PENDING': return 'bg-yellow-500'
    case 'PROCESSING': return 'bg-blue-500'
    case 'COMPLETED': return 'bg-green-500'
    case 'FAILED': return 'bg-red-500'
    case 'CANCELLED': return 'bg-gray-500'
    default: return 'bg-gray-500'
  }
}
