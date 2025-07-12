import { db } from '@/lib/db'
import { UserManagement } from '@/components/admin/user-management'

export default async function AdminUsersPage() {
  const users = await db.user.findMany({
    include: {
      transactions: {
        orderBy: { createdAt: 'desc' },
        take: 5
      },
      contents: {
        orderBy: { createdAt: 'desc' },
        take: 5
      },
      _count: {
        select: {
          contents: true,
          transactions: true
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          사용자 관리
        </h1>
        <p className="text-gray-600">
          등록된 사용자들을 관리하고 모니터링하세요
        </p>
      </div>

      <UserManagement users={users} />
    </div>
  )
}
