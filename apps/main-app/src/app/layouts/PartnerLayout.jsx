import { Outlet } from 'react-router-dom'

import Reveal from '@shared/ui/Reveal'

import PartnerNavbar from '../components/PartnerNavbar'
import Footer from '../components/Footer'

/**
 * The partner programme shell: its own header, the same footer as the rest of
 * the site. Scroll restoration and motion features come from RootLayout.
 */
export default function PartnerLayout() {
    return (
        <div className="app-layout">

            <PartnerNavbar />

            <Outlet />

            <Reveal>
                <Footer />
            </Reveal>

        </div>
    )
}
