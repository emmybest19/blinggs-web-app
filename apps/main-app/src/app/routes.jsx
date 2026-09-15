import { createBrowserRouter } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

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
import { FeaturesPage } from '@features/product-features'
import { WaitlistPage } from '@features/waitlist'

const router = createBrowserRouter([
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
    }
])

export default router
