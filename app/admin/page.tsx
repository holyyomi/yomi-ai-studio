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
      <h1 className="text-3xl font-bold mb-4">관리자 대시보드</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>관리자 페이지입니다.</p>
        <p className="mt-2 text-gray-600">관리 기능을 준비 중입니다.</p>
      </div>
    </div>
  )
}
