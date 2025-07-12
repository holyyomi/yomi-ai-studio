import { db } from '@/lib/db'

// 에러 추적 및 모니터링
export class MonitoringService {
  static async logError(error: Error, context?: any) {
    console.error('Application Error:', {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    })
    
    // 프로덕션에서는 Sentry 등 외부 서비스로 전송
    if (process.env.NODE_ENV === 'production') {
      // await sendToSentry(error, context)
    }
  }

  static async logActivity(activity: {
    userId?: string
    action: string
    details?: any
  }) {
    console.log('User Activity:', {
      ...activity,
      timestamp: new Date().toISOString()
    })
    
    // 데이터베이스에 활동 로그 저장
    try {
      await db.systemConfig.create({
        data: {
          key: `activity_${Date.now()}`,
          value: JSON.stringify(activity)
        }
      })
    } catch (error) {
      console.error('Failed to log activity:', error)
    }
  }

  static async trackPerformance(metric: {
    name: string
    value: number
    unit: string
  }) {
    console.log('Performance Metric:', {
      ...metric,
      timestamp: new Date().toISOString()
    })
  }
} 