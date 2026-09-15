import { LazyMotion, domAnimation } from 'framer-motion'
import { Outlet, ScrollRestoration } from 'react-router-dom'

/**
 * The chrome every route shares, whichever header it wears.
 *
 * MainLayout and PartnerLayout both nest inside this, so the scroll behaviour
 * and the motion features are declared once rather than drifting apart.
 */
export default function RootLayout() {
    return (
        /*
         * `domAnimation` is the trimmed feature set — animations, gestures and
         * the in-view observer Reveal needs, without drag/layout projection.
         * `strict` makes the full `motion` component throw if anyone reaches
         * for it later, which is what stops the heavy bundle creeping back in.
         */
        <LazyMotion features={domAnimation} strict>
            {/*
              * Without this, navigating from a footer link lands the reader at
              * the bottom of the next page, because the router preserves scroll
              * position across routes. It also honours #hash targets.
              */}
            <ScrollRestoration />

            <Outlet />
        </LazyMotion>
    )
}
