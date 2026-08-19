import { Outlet } from 'react-router-dom'

import AdminHeader from '../components/AdminHeader'

export default function AdminLayout() {
  return (
    <div className="bg-[#434c5d] text-white min-h-screen">
      <AdminHeader />
      <Outlet />
    </div>
  )
}
