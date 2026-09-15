/**
 * Public API of the `legal` feature.
 *
 * Adding the cookie policy means adding a data file and a two-line page here —
 * LegalDocument already renders whatever descriptor it is given.
 */
export { default as TermsOfServicePage } from './pages/TermsOfServicePage'
export { default as PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
export { default as LegalDocument } from './components/LegalDocument'
export { termsOfService } from './data/terms.data'
export { privacyPolicy } from './data/privacy.data'
