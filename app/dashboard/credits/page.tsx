import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function CreditsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">크레딧 관리</h1>
      <Card>
        <CardHeader>
          <CardTitle>보유 크레딧</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">200</p>
          <p className="text-sm text-gray-600 mt-2">크레딧 관리 기능 준비 중입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
