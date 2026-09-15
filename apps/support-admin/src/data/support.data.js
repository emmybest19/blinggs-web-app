/**
 * Mock records standing in for the support API.
 * TODO: replace each export with a call in src/api/.
 */

export const supportStats = [
  { label: 'Open tickets', value: '5', delta: '2', deltaDirection: 'down', hint: 'vs yesterday' },
  { label: 'First response', value: '12m', delta: '3m', deltaDirection: 'down', hint: 'median today' },
  { label: 'Open disputes', value: '2', deltaDirection: 'flat', hint: '₦311,000 held' },
  { label: 'CSAT (7d)', value: '4.6', delta: '0.2', deltaDirection: 'up', hint: 'out of 5' },
]

export const tickets = [
  { id: 'TKT-4412', subject: 'Transfer stuck as pending for 2 hours', user: 'Emeka Obi', channel: 'In-app chat', priority: 'high', status: 'open', updated: '2026-09-15T08:20:00Z' },
  { id: 'TKT-4411', subject: 'Cannot complete Tier 2 verification', user: 'Grace Iyamu', channel: 'Email', priority: 'medium', status: 'open', updated: '2026-09-15T07:50:00Z' },
  { id: 'TKT-4410', subject: 'Group contribution charged twice', user: 'Aisha Lawal', channel: 'In-app chat', priority: 'high', status: 'open', updated: '2026-09-15T07:15:00Z' },
  { id: 'TKT-4409', subject: 'How do I change my handle?', user: 'Tobi Adeyemi', channel: 'In-app chat', priority: 'low', status: 'open', updated: '2026-09-15T06:40:00Z' },
  { id: 'TKT-4408', subject: 'Crypto conversion rate seems wrong', user: 'Blessing Ade', channel: 'Email', priority: 'medium', status: 'open', updated: '2026-09-14T21:05:00Z' },
  { id: 'TKT-4407', subject: 'Lost access after changing phone', user: 'Musa Danjuma', channel: 'Phone', priority: 'high', status: 'resolved', updated: '2026-09-14T16:30:00Z' },
]

export const users = [
  { id: 'USR-10234', name: 'Emeka Obi', handle: '@emeka', tier: 'Tier 2', wallet: 148200, joined: '2026-03-14T00:00:00Z', status: 'active' },
  { id: 'USR-10233', name: 'Aisha Lawal', handle: '@aisha.l', tier: 'Tier 3', wallet: 2410000, joined: '2026-01-08T00:00:00Z', status: 'active' },
  { id: 'USR-10232', name: 'Blessing Ade', handle: '@blessing', tier: 'Tier 2', wallet: 96400, joined: '2026-05-22T00:00:00Z', status: 'active' },
  { id: 'USR-10231', name: 'Musa Danjuma', handle: '@musa_d', tier: 'Tier 3', wallet: 812000, joined: '2025-11-30T00:00:00Z', status: 'locked' },
  { id: 'USR-10230', name: 'Grace Iyamu', handle: '@grace', tier: 'Tier 1', wallet: 12500, joined: '2026-09-11T00:00:00Z', status: 'pending KYC' },
]

export const disputes = [
  { id: 'DSP-221', reference: 'TXN-90407', user: 'Kelechi Nnaji', amount: 91500, reason: 'Transfer debited but not received', opened: '2026-09-14T09:10:00Z', status: 'investigating' },
  { id: 'DSP-220', reference: 'TXN-90388', user: 'Aisha Lawal', amount: 220000, reason: 'Duplicate group contribution charge', opened: '2026-09-13T15:42:00Z', status: 'investigating' },
  { id: 'DSP-219', reference: 'TXN-90301', user: 'Tunde Alabi', amount: 47000, reason: 'Unauthorised transaction', opened: '2026-09-09T11:20:00Z', status: 'refunded' },
]
