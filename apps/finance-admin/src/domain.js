export const domain = {
  id: 'finance',
  accent: 'finance',
  short: 'FI',
  name: 'Finance',
  console: 'Finance Console',
  role: 'Finance Operator',
  environment: 'Staging · NGN ledger',
  nav: [
    { to: '/', label: 'Overview', end: true },
    { to: '/transactions', label: 'Transactions' },
    { to: '/settlements', label: 'Settlements', badge: 3 },
    { to: '/reconciliation', label: 'Reconciliation' },
    { to: '/fees', label: 'Fees' },
  ],
}
