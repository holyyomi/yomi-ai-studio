import { getCurrentUser } from '@/lib/auth'
import { CreditManagement } from '@/components/dashboard/credit-management'
import { redirect } from 'next/navigation'

export default async function CreditsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          크레딧 관리
        </h1>
        <p className="text-gray-600">
          크레딧 사용 내역을 확인하고 플랜을 관리하세요
        </p>
      </div>

      <CreditManagement 
        user={user}
        transactions={user.transactions || []}
      />
    </div>
  )
}
