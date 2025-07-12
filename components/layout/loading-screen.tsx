"use client"

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Holy AI Studio
          </h2>
          <p className="text-gray-600">AI가 준비 중입니다...</p>
        </div>
        
        <div className="w-64 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
} 