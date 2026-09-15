/**
 * Mock records standing in for the platform API.
 *
 * TODO: replace each export with a call in src/api/. The pages read these
 * shapes, so swapping the source does not touch the components.
 */

export const platformStats = [
  { label: 'Total users', value: '184,203', delta: '6.4%', deltaDirection: 'up', hint: 'vs last month' },
  { label: 'Active staff', value: '38', delta: '2', deltaDirection: 'up', hint: 'new this week' },
  { label: 'Consoles online', value: '6 / 6', deltaDirection: 'flat', hint: 'all healthy' },
  { label: 'Open incidents', value: '1', delta: '1', deltaDirection: 'down', hint: 'vs last week' },
]

export const staffMembers = [
  { id: 'stf-1', name: 'Adaeze Nwosu', email: 'adaeze.nwosu@blingg.africa', role: 'Platform Owner', consoles: ['Super', 'Finance'], status: 'active', lastActive: '2026-09-15T08:10:00Z' },
  { id: 'stf-2', name: 'Tunde Bakare', email: 'tunde.bakare@blingg.africa', role: 'Finance Operator', consoles: ['Finance'], status: 'active', lastActive: '2026-09-15T07:42:00Z' },
  { id: 'stf-3', name: 'Ngozi Eze', email: 'ngozi.eze@blingg.africa', role: 'Compliance Officer', consoles: ['Compliance'], status: 'active', lastActive: '2026-09-14T16:20:00Z' },
  { id: 'stf-4', name: 'Samuel Oyelaran', email: 'samuel.oyelaran@blingg.africa', role: 'Security Engineer', consoles: ['Security', 'Super'], status: 'active', lastActive: '2026-09-15T06:05:00Z' },
  { id: 'stf-5', name: 'Halima Yusuf', email: 'halima.yusuf@blingg.africa', role: 'Support Agent', consoles: ['Support'], status: 'suspended', lastActive: '2026-09-02T11:30:00Z' },
  { id: 'stf-6', name: 'Chidi Okonkwo', email: 'chidi.okonkwo@blingg.africa', role: 'Community Manager', consoles: ['Community'], status: 'invited', lastActive: null },
]

export const consoles = [
  { id: 'super', name: 'Super Admin', port: 4100, owner: 'Platform', staff: 3, status: 'healthy' },
  { id: 'finance', name: 'Finance', port: 4200, owner: 'Finance Ops', staff: 9, status: 'healthy' },
  { id: 'compliance', name: 'Compliance', port: 4300, owner: 'Risk & Compliance', staff: 7, status: 'healthy' },
  { id: 'support', name: 'Support', port: 4400, owner: 'Customer Ops', staff: 12, status: 'degraded' },
  { id: 'community', name: 'Community', port: 4500, owner: 'Growth', staff: 4, status: 'healthy' },
  { id: 'security', name: 'Security', port: 4600, owner: 'Security', staff: 3, status: 'healthy' },
]

export const featureFlags = [
  { id: 'flg-1', key: 'crypto_offramp', description: 'Crypto to Naira conversion in-app', rollout: 'Internal only', enabled: true },
  { id: 'flg-2', key: 'group_multisig', description: 'Multi-signature approval on public group payouts', rollout: '25% of groups', enabled: true },
  { id: 'flg-3', key: 'chat_payments', description: 'Send money inside a chat thread', rollout: 'All users', enabled: true },
  { id: 'flg-4', key: 'bill_payments', description: 'Utility and airtime bill payments', rollout: 'Disabled', enabled: false },
  { id: 'flg-5', key: 'referral_rewards', description: 'Affiliate referral payout engine', rollout: 'Waitlist only', enabled: false },
]

export const auditEvents = [
  { id: 'aud-1', actor: 'samuel.oyelaran@blingg.africa', action: 'Revoked session', target: 'halima.yusuf@blingg.africa', console: 'Security', at: '2026-09-15T08:02:00Z' },
  { id: 'aud-2', actor: 'adaeze.nwosu@blingg.africa', action: 'Enabled feature flag', target: 'group_multisig', console: 'Super', at: '2026-09-15T07:15:00Z' },
  { id: 'aud-3', actor: 'tunde.bakare@blingg.africa', action: 'Approved settlement batch', target: 'BATCH-2026-0914', console: 'Finance', at: '2026-09-14T18:40:00Z' },
  { id: 'aud-4', actor: 'ngozi.eze@blingg.africa', action: 'Escalated KYC case', target: 'KYC-88412', console: 'Compliance', at: '2026-09-14T15:22:00Z' },
  { id: 'aud-5', actor: 'adaeze.nwosu@blingg.africa', action: 'Invited staff member', target: 'chidi.okonkwo@blingg.africa', console: 'Super', at: '2026-09-14T09:05:00Z' },
]
