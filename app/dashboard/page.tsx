import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>보유 크레딧</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">200</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>생성된 콘텐츠</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>현재 플랜</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">무료</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>시스템 상태</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">정상</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
