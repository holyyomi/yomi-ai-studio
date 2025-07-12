"use client"

import { Button } from '../ui/button'

export function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <Button variant="ghost" className="w-full text-left text-white">
          대시보드
        </Button>
      </nav>
    </div>
  )
} 