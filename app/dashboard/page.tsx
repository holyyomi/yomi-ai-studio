import * as React from "react"
import { getCurrentUser } from '@/lib/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  PlusCircle, 
  BarChart3, 
  Clock, 
  TrendingUp,
  Zap,
  Users
} from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  const stats = [
    {
      title: '생성된 콘텐츠',
      value: user?.contents?.length || 0,
      icon: BarChart3,
      color: 'text-blue-600'
    },
    {
      title: '사용한 크레딧',
      value: (1000 - (user?.credits || 0)).toLocaleString(),
      icon: Zap,
      color: 'text-purple-600'
    },
    {
      title: '이번 달 활동',
      value: '12일',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      title: '평균 성과',
      value: '+247%',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* 환영 메시지 */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">
          환영합니다, {user?.name}님! 🚀
        </h2>
        <p className="text-purple-100 mb-4">
          오늘도 멋진 콘텐츠를 만들어 11개 플랫폼을 정복해보세요
        </p>
        <Link href="/dashboard/content">
          <Button variant="secondary" size="lg">
            <PlusCircle className="w-5 h-5 mr-2" />
            새 콘텐츠 만들기
          </Button>
        </Link>
      </div>

      {/* 통계 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 최근 활동 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>최근 생성된 콘텐츠</CardTitle>
          </CardHeader>
          <CardContent>
            {user?.contents && user.contents.length > 0 ? (
              <div className="space-y-4">
                {user.contents.slice(0, 3).map((content) => (
                  <div key={content.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{content.title}</h4>
                      <p className="text-sm text-gray-600">
                        {content.platforms.length}개 플랫폼 • {content.creditsUsed} 크레딧
                      </p>
                    </div>
                    <Badge variant={content.status === 'COMPLETED' ? 'success' : 'secondary'}>
                      {content.status}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <PlusCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>아직 생성된 콘텐츠가 없습니다</p>
                <p className="text-sm">첫 번째 콘텐츠를 만들어보세요!</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>플랫폼 성과</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">인스타그램</span>
                <Badge variant="success">+125%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">페이스북</span>
                <Badge variant="success">+89%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">트위터</span>
                <Badge variant="success">+156%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">링크드인</span>
                <Badge variant="success">+203%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
