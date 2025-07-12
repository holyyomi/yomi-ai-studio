import { AdminSidebar } from '../../components/admin/admin-sidebar'
import { AdminHeader } from '../../components/admin/admin-header'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminHeader admin={{ name: '관리자' }} />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
} 