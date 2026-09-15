import { Outlet, ScrollRestoration } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
    return (
        <div className="app-layout">

            {/*
              * Without this, navigating from a footer link lands the reader at
              * the bottom of the next page, because the router preserves scroll
              * position across routes. It also honours #hash targets.
              */}
            <ScrollRestoration />

            <Navbar />

            <Outlet />

            <Footer />

        </div>
    )
}
