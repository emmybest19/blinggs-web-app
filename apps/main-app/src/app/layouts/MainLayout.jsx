import { LazyMotion, domAnimation } from 'framer-motion'
import { Outlet, ScrollRestoration } from 'react-router-dom'

import Reveal from '@shared/ui/Reveal'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
    return (
        /*
         * Every route is a child of this layout, so one LazyMotion here feeds
         * every Reveal in the app.
         *
         * `domAnimation` is the trimmed feature set — animations, gestures and
         * the in-view observer Reveal needs, without drag/layout projection.
         * `strict` makes the full `motion` component throw if anyone reaches
         * for it later, which is what stops the heavy bundle creeping back in.
         */
        <LazyMotion features={domAnimation} strict>
            <div className="app-layout">

                {/*
                  * Without this, navigating from a footer link lands the reader at
                  * the bottom of the next page, because the router preserves scroll
                  * position across routes. It also honours #hash targets.
                  */}
                <ScrollRestoration />

                {/* Navbar stays un-animated: it is sticky, so fading it on
                  * scroll would fight the thing it is pinned to. */}
                <Navbar />

                <Outlet />

                <Reveal>
                    <Footer />
                </Reveal>

            </div>
        </LazyMotion>
    )
}
