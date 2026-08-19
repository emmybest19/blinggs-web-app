import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from '@features/home'

import AdminLayout from '../layouts/AdminLayout'
import MainLayout from '../layouts/MainLayout'
import NotFoundPage from '../pages/NotFoundPage'
import RouteFallback from './RouteFallback'
import { ROUTES } from './routes'

/**
 * Home ships in the initial bundle; every other feature is code-split so a
 * visitor only downloads the feature they navigate to.
 */
const named = (loader, exportName) =>
  lazy(() => loader().then((module) => ({ default: module[exportName] })))

const FeaturesPage = named(
  () => import('@features/product-features'),
  'FeaturesPage'
)
const HowItWorksPage = named(
  () => import('@features/how-it-works'),
  'HowItWorksPage'
)
const BlogPage = named(() => import('@features/blog'), 'BlogPage')
const ArticlePage = named(() => import('@features/blog'), 'ArticlePage')
const FaqPage = named(() => import('@features/faq'), 'FaqPage')
const AboutPage = named(() => import('@features/about'), 'AboutPage')
const TermsOfServicePage = named(
  () => import('@features/legal'),
  'TermsOfServicePage'
)
const PrivacyPolicyPage = named(
  () => import('@features/legal'),
  'PrivacyPolicyPage'
)
const CookiesPolicyPage = named(
  () => import('@features/legal'),
  'CookiesPolicyPage'
)
const ArticleEditorPage = named(
  () => import('@features/admin'),
  'ArticleEditorPage'
)

export default function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        {/* Public marketing site */}
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.features} element={<FeaturesPage />} />
          <Route path={ROUTES.howItWorks} element={<HowItWorksPage />} />
          <Route path={ROUTES.blog} element={<BlogPage />} />
          <Route path={ROUTES.blogDetail} element={<ArticlePage />} />
          <Route path={ROUTES.faq} element={<FaqPage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route
            path={ROUTES.termsOfService}
            element={<TermsOfServicePage />}
          />
          <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicyPage />} />
          <Route path={ROUTES.cookiesPolicy} element={<CookiesPolicyPage />} />
        </Route>

        {/* Admin */}
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.subAdmin} element={<ArticleEditorPage />} />
        </Route>

        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
