export const domain = {
  id: 'security',
  accent: 'security',
  short: 'SC',
  name: 'Security',
  console: 'Security Console',
  role: 'Security Engineer',
  environment: 'Staging · elevated privileges',
  nav: [
    { to: '/', label: 'Overview', end: true },
    { to: '/access', label: 'Access Control' },
    { to: '/alerts', label: 'Threat Alerts', badge: 3 },
    { to: '/devices', label: 'Device Audit' },
  ],
}
