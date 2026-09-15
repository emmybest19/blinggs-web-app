export const domain = {
  id: 'compliance',
  accent: 'compliance',
  short: 'CP',
  name: 'Compliance',
  console: 'Compliance Console',
  role: 'Compliance Officer',
  environment: 'Staging · CBN reporting scope',
  nav: [
    { to: '/', label: 'Overview', end: true },
    { to: '/kyc', label: 'KYC Queue', badge: 4 },
    { to: '/screening', label: 'Screening' },
    { to: '/cases', label: 'Cases' },
    { to: '/reports', label: 'Reports' },
  ],
}
