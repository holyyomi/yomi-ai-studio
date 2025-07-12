import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { 
  Users, 
  FileText, 
  CreditCard, 
  TrendingUp,
  Zap,
  Calendar,
  DollarSign,
  Activity
} from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">관리자 대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>총 사용자</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>총 주문</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>총 수익</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₩0</p>
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
      </div>
    </div>
  )
}
