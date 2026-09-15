/**
 * Mock records standing in for the security API.
 * TODO: replace each export with a call in src/api/.
 */

export const securityStats = [
  { label: 'Open alerts', value: '3', delta: '1', deltaDirection: 'up', hint: 'vs yesterday' },
  { label: 'Blocked logins', value: '218', delta: '34%', deltaDirection: 'up', hint: 'last 24h' },
  { label: 'Active sessions', value: '41', deltaDirection: 'flat', hint: 'staff consoles' },
  { label: 'MFA coverage', value: '92%', delta: '5pp', deltaDirection: 'up', hint: 'of staff accounts' },
]

export const alerts = [
  { id: 'ALT-1192', title: 'Credential stuffing against /auth/login', source: 'WAF', severity: 'critical', signals: '2,400 attempts from 38 IPs', at: '2026-09-15T08:05:00Z', status: 'open' },
  { id: 'ALT-1191', title: 'Impossible travel on staff account', source: 'Identity', severity: 'high', signals: 'Lagos → Frankfurt in 14m', at: '2026-09-15T06:30:00Z', status: 'open' },
  { id: 'ALT-1190', title: 'Rapid withdrawal pattern across 12 wallets', source: 'Fraud engine', severity: 'high', signals: '₦8.4M in 6 minutes', at: '2026-09-14T23:12:00Z', status: 'open' },
  { id: 'ALT-1189', title: 'Expired TLS certificate on staging edge', source: 'Infra', severity: 'medium', signals: 'edge-03.staging', at: '2026-09-14T14:40:00Z', status: 'resolved' },
  { id: 'ALT-1188', title: 'Unusual admin API call volume', source: 'API gateway', severity: 'low', signals: '4x baseline for 20m', at: '2026-09-13T10:15:00Z', status: 'resolved' },
]

export const accessGrants = [
  { id: 'acc-1', account: 'adaeze.nwosu@blingg.africa', consoles: ['Super', 'Finance'], mfa: true, lastRotated: '2026-08-28T00:00:00Z', privilege: 'owner' },
  { id: 'acc-2', account: 'samuel.oyelaran@blingg.africa', consoles: ['Security', 'Super'], mfa: true, lastRotated: '2026-09-01T00:00:00Z', privilege: 'owner' },
  { id: 'acc-3', account: 'tunde.bakare@blingg.africa', consoles: ['Finance'], mfa: true, lastRotated: '2026-07-14T00:00:00Z', privilege: 'operator' },
  { id: 'acc-4', account: 'ngozi.eze@blingg.africa', consoles: ['Compliance'], mfa: true, lastRotated: '2026-06-02T00:00:00Z', privilege: 'operator' },
  { id: 'acc-5', account: 'halima.yusuf@blingg.africa', consoles: ['Support'], mfa: false, lastRotated: '2026-02-19T00:00:00Z', privilege: 'agent' },
  { id: 'acc-6', account: 'ci-deploy@blingg.africa', consoles: ['All'], mfa: false, lastRotated: '2026-09-10T00:00:00Z', privilege: 'service' },
]

export const deviceEvents = [
  { id: 'dev-1', account: 'samuel.oyelaran@blingg.africa', device: 'MacBook Pro · Chrome 141', location: 'Lagos, NG', ip: '197.210.x.x', at: '2026-09-15T08:01:00Z', outcome: 'allowed' },
  { id: 'dev-2', account: 'samuel.oyelaran@blingg.africa', device: 'Unknown · curl/8.4', location: 'Frankfurt, DE', ip: '89.163.x.x', at: '2026-09-15T06:29:00Z', outcome: 'blocked' },
  { id: 'dev-3', account: 'tunde.bakare@blingg.africa', device: 'Windows 11 · Edge 141', location: 'Abuja, NG', ip: '105.112.x.x', at: '2026-09-15T05:44:00Z', outcome: 'allowed' },
  { id: 'dev-4', account: 'halima.yusuf@blingg.africa', device: 'iPhone 15 · Safari', location: 'Lagos, NG', ip: '197.211.x.x', at: '2026-09-14T22:10:00Z', outcome: 'challenged' },
  { id: 'dev-5', account: 'ngozi.eze@blingg.africa', device: 'MacBook Air · Firefox 133', location: 'Lagos, NG', ip: '197.210.x.x', at: '2026-09-14T17:38:00Z', outcome: 'allowed' },
]
