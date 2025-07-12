import { db } from '@/lib/db'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

export default async function AdminDashboard() {
  // 통계 데이터 조회
  const [
    totalUsers,
    activeUsers,
    totalContents,
    totalRevenue,
    recentTransactions,
    recentContents
  ] = await Promise.all([
    db.user.count(),
    db.user.count({ where: { lastLogin: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } } }),
    db.content.count(),
    db.transaction.aggregate({ 
      _sum: { amount: true },
      where: { type: 'PURCHASE', status: 'COMPLETED' }
    }),
    db.transaction.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { user: true }
    }),
    db.content.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { user: true }
    })
  ])

  const stats = [
    {
      title: '전체 사용자',
      value: totalUsers,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: '활성 사용자',
      value: activeUsers,
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: '생성된 콘텐츠',
      value: totalContents,
      icon: FileText,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: '총 매출',
      value: `₩${(totalRevenue._sum.amount || 0).toLocaleString()}`,
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <div className="space-y-6">
      {/* 통계 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`w-8 h-8 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 최근 활동 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 최근 거래 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>최근 거래</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{transaction.user.name}</p>
                    <p className="text-sm text-gray-600">{transaction.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      ₩{transaction.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 최근 콘텐츠 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>최근 생성 콘텐츠</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContents.map((content) => (
                <div key={content.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{content.title}</p>
                    <p className="text-sm text-gray-600">
                      {content.user.name} • {content.platforms.length}개 플랫폼
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {content.creditsUsed} 크레딧
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(content.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 시스템 상태 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>시스템 현황</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-sm text-green-700">시스템 가동률</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-blue-700">AI 생성 성공률</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">1.2s</div>
              <div className="text-sm text-purple-700">평균 응답 시간</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
