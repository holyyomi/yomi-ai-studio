import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function AdminUsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">사용자 관리</h1>
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">사용자 관리 기능 준비 중입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
