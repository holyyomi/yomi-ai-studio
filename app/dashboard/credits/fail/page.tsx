import { Button } from '../../../../components/ui/button'
import Link from 'next/link'

export default function CreditsFailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-red-500 text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">결제 실패</h1>
        <p className="text-gray-600 mb-6">크레딧 구매 중 오류가 발생했습니다.</p>
        <Link href="/dashboard/credits">
          <Button>크레딧 페이지로 돌아가기</Button>
        </Link>
      </div>
    </div>
  )
} 