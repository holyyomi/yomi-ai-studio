import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">설정</h1>
      <Card>
        <CardHeader>
          <CardTitle>계정 설정</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">설정 기능 준비 중입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
