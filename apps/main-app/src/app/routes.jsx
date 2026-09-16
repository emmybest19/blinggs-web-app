import { createBrowserRouter } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import PartnerDashboardLayout from './layouts/PartnerDashboardLayout'
import PartnerLayout from './layouts/PartnerLayout'
import RootLayout from './layouts/RootLayout'

import { AboutPage } from '@features/about'
import { ArticlePage, BlogPage } from '@features/blog'
import { FaqPage } from '@features/faq'
import { HomePage } from '@features/home'
import { HowItWorksPage } from '@features/how-it-works'
import {
    CookiesPolicyPage,
    PrivacyPolicyPage,
    TermsOfServicePage,
} from '@features/legal'
import {
    PartnerApplyPage,
    PartnerDashboardPage,
    PartnerLoginPage,
    PartnerPage,
} from '@features/partner'
import { FeaturesPage } from '@features/product-features'
import { WaitlistPage } from '@features/waitlist'

/*
 * Two shells hang off one pathless root. The root owns what every route shares
 * — scroll restoration and motion — while each shell supplies its own header.
 * The partner programme wears a different one; everything else wears the
 * marketing header.
 */
const router = createBrowserRouter([
    {
        element: <RootLayout />,

        children: [
            {
                path: '/',
                element: <MainLayout />,

                children: [
                    { index: true, element: <HomePage /> },

                    { path: 'features', element: <FeaturesPage /> },
                    { path: 'how-it-works', element: <HowItWorksPage /> },

                    { path: 'blog', element: <BlogPage /> },
                    { path: 'blog/:slug', element: <ArticlePage /> },

                    { path: 'faq', element: <FaqPage /> },
                    { path: 'about', element: <AboutPage /> },
                    { path: 'waitlist', element: <WaitlistPage /> },

                    { path: 'terms-of-service', element: <TermsOfServicePage /> },
                    { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
                    { path: 'cookies-policy', element: <CookiesPolicyPage /> },
                ]
            },

            {
                path: '/affiliate',
                element: <PartnerLayout />,

                children: [
                    { index: true, element: <PartnerPage /> },
                ]
            },

            /*
             * The portal screens are siblings of the partner shell, not children
             * of it: they carry no site header and no footer. They still sit
             * under RootLayout so they keep scroll restoration.
             */
            { path: '/affiliate/login', element: <PartnerLoginPage /> },
            { path: '/affiliate/apply', element: <PartnerApplyPage /> },

            /* The dashboard wears its own header and no footer. */
            {
                path: '/affiliate/dashboard',
                element: <PartnerDashboardLayout />,

                children: [
                    { index: true, element: <PartnerDashboardPage /> },
                ]
            },
        ]
    }
])

export default router
