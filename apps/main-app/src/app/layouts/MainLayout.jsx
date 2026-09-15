import { Outlet } from 'react-router-dom'

import Reveal from '@shared/ui/Reveal'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/** The marketing site shell. Scroll restoration and motion features come from
  * RootLayout, which this nests inside. */
export default function MainLayout() {
    return (
        <div className="app-layout">

            {/* Navbar stays un-animated: it is sticky, so fading it on
              * scroll would fight the thing it is pinned to. */}
            <Navbar />

            <Outlet />

            <Reveal>
                <Footer />
            </Reveal>

        </div>
    )
}
