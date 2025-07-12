import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PaymentSuccessPage() {
  return (
    <div className="max-w-md mx-auto mt-20 text-center">
      <div className="mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          결제가 완료되었습니다!
        </h1>
        <p className="text-gray-600">
          구독이 성공적으로 처리되었습니다. 크레딧이 추가되었습니다.
        </p>
      </div>
      
      <div className="space-y-4">
        <Link href="/dashboard">
          <Button className="w-full">
            대시보드로 돌아가기
          </Button>
        </Link>
        <Link href="/dashboard/credits">
          <Button variant="outline" className="w-full">
            크레딧 관리
          </Button>
        </Link>
      </div>
    </div>
  )
} 