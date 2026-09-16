/**
 * Public API of the `partner` feature.
 */
export { default as PartnerPage } from './pages/PartnerPage'
export { default as PartnerLoginPage } from './pages/PartnerLoginPage'
export { default as PartnerApplyPage } from './pages/PartnerApplyPage'
export { default as PartnerDashboardPage } from './pages/PartnerDashboardPage'

export { partnerLinks } from './data/partner.data'

/* The dashboard header lives in app/components with the site's other headers,
 * so it needs the identity and copy from here. */
export { dashboardCopy, initials, partner } from './data/dashboard.data'
export { ExitIcon } from './components/DashboardIcons'
