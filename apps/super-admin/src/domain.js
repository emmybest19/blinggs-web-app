/**
 * Identity of this console. @blingg/admin-kit reads it to build the sidebar,
 * the login screen, the accent colour and the storage key for its session.
 */
export const domain = {
  id: 'super',
  accent: 'super',
  short: 'SA',
  name: 'Super Admin',
  console: 'Super Admin Console',
  role: 'Platform Owner',
  environment: 'Staging · full platform scope',
  nav: [
    { to: '/', label: 'Overview', end: true },
    { to: '/staff', label: 'Staff & Roles' },
    { to: '/consoles', label: 'Consoles' },
    { to: '/flags', label: 'Feature Flags' },
    { to: '/audit', label: 'Audit Log' },
  ],
}
