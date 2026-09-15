/**
 * Public API of the `legal` feature.
 *
 * All three policies share one renderer: a new document is a data file plus a
 * two-line page, not another page component.
 */
export { default as TermsOfServicePage } from './pages/TermsOfServicePage'
export { default as PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
export { default as CookiesPolicyPage } from './pages/CookiesPolicyPage'
export { default as LegalDocument } from './components/LegalDocument'
export { termsOfService } from './data/terms.data'
export { privacyPolicy } from './data/privacy.data'
export { cookiesPolicy } from './data/cookies.data'
