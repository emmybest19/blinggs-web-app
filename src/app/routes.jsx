import { createBrowserRouter } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home/Home'
import Features from './pages/Features/Features'
import HowItWorks from './pages/HowItWorks/HowItWorks'
import Blog from './pages/Blog/Blog'
import FAQ from './pages/FAQ/FAQ'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,

        children: [

            {
                index: true,
                element: <Home />
            },

            {
                path: 'features',
                element: <Features />
            },
            {
                path: 'how-it-works',
                element: <HowItWorks />
            },
            {
                path: 'blog',
                element: <Blog />
            },

            {
                path: 'faq',
                element: <FAQ />
            }

        ]
    }
])

export default router