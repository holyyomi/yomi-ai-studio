import { XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PaymentFailPage() {
  return (
    <div className="max-w-md mx-auto mt-20 text-center">
      <div className="mb-8">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          결제에 실패했습니다
        </h1>
        <p className="text-gray-600">
          결제 처리 중 오류가 발생했습니다. 다시 시도해주세요.
        </p>
      </div>
      
      <div className="space-y-4">
        <Link href="/dashboard/credits">
          <Button className="w-full">
            다시 시도하기
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline" className="w-full">
            대시보드로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  )
} 