"use client"

interface AdminHeaderProps {
  admin: any
}

export function AdminHeader({ admin }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b p-4">
      <h1 className="text-2xl font-bold">관리자 대시보드</h1>
      <p>환영합니다, {admin?.name || '관리자'}님</p>
    </header>
  )
} 