import { Outlet } from 'react-router-dom'

import DashboardHeader from '../components/DashboardHeader'

/**
 * The partner dashboard shell: its own header and no footer.
 *
 * No footer on purpose — this is an authenticated app surface, and the
 * marketing footer belongs to the public site. Scroll restoration and motion
 * features come from RootLayout.
 *
 * NOTE: this route is not guarded. There is no session to check yet, so a
 * client-side gate would only be decoration. Put the check here once the auth
 * endpoint lands.
 */
export default function PartnerDashboardLayout() {
    return (
        <div className="app-layout min-h-screen bg-[#0a0e13]">
            <DashboardHeader />
            <Outlet />
        </div>
    )
}
