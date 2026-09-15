import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AdminShell({ domain }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-ink">
      <Sidebar
        domain={domain}
        open={menuOpen}
        onNavigate={() => setMenuOpen(false)}
      />

      <div className="flex min-h-screen flex-col lg:pl-[260px]">
        <Topbar domain={domain} onOpenMenu={() => setMenuOpen(true)} />

        {/* Keying on pathname resets scroll and local state between pages */}
        <main key={location.pathname} className="flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto w-full max-w-[1400px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
