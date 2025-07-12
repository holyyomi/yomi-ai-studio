import * as React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <h1 className="text-xl font-bold mb-6">Holy AI Studio</h1>
          <nav className="space-y-2">
            <a href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">대시보드</a>
            <a href="/dashboard/content" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">콘텐츠 생성</a>
            <a href="/dashboard/credits" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">크레딧</a>
          </nav>
        </div>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
} 