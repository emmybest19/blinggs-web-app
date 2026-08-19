import { Outlet } from 'react-router-dom'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

export default function MainLayout() {
  return (
    <div>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
