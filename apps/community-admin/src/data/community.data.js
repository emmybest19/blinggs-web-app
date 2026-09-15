/**
 * Mock records standing in for the community API.
 * TODO: replace each export with a call in src/api/.
 */

export const communityStats = [
  { label: 'Active groups', value: '1,284', delta: '8.2%', deltaDirection: 'up', hint: 'vs last month' },
  { label: 'Pooled savings', value: '₦640.1M', delta: '11.4%', deltaDirection: 'up', hint: 'vs last month' },
  { label: 'Reports queued', value: '6', delta: '2', deltaDirection: 'up', hint: 'vs yesterday' },
  { label: 'Avg. group size', value: '14', deltaDirection: 'flat', hint: 'members' },
]

export const groups = [
  { id: 'GRP-3301', name: 'Lagos Tech Savers', type: 'Public', members: 84, pooled: 42800000, cadence: 'Monthly', status: 'active' },
  { id: 'GRP-3300', name: 'Ajo Ijebu Cooperative', type: 'Public', members: 126, pooled: 91200000, cadence: 'Weekly', status: 'active' },
  { id: 'GRP-3299', name: 'Flatmates — Yaba', type: 'Private', members: 4, pooled: 640000, cadence: 'Monthly', status: 'active' },
  { id: 'GRP-3298', name: 'Market Women Union', type: 'Public', members: 212, pooled: 108400000, cadence: 'Daily', status: 'active' },
  { id: 'GRP-3297', name: 'Quick Returns Circle', type: 'Public', members: 38, pooled: 12200000, cadence: 'Weekly', status: 'under review' },
  { id: 'GRP-3296', name: 'Uni Friends 2019', type: 'Private', members: 9, pooled: 1840000, cadence: 'Monthly', status: 'dormant' },
]

export const moderationQueue = [
  { id: 'MOD-771', type: 'Group name', target: 'Quick Returns Circle', reason: 'Possible investment scheme', reports: 5, at: '2026-09-15T07:30:00Z', severity: 'high' },
  { id: 'MOD-770', type: 'Message', target: '@fastcash_ng', reason: 'Spam — repeated payment links', reports: 9, at: '2026-09-15T06:12:00Z', severity: 'high' },
  { id: 'MOD-769', type: 'Profile photo', target: '@bigboss22', reason: 'Impersonation of a public figure', reports: 3, at: '2026-09-14T20:44:00Z', severity: 'medium' },
  { id: 'MOD-768', type: 'Message', target: '@trader_ade', reason: 'Off-platform trade solicitation', reports: 2, at: '2026-09-14T18:05:00Z', severity: 'medium' },
  { id: 'MOD-767', type: 'Group description', target: 'Double Your Money', reason: 'Guaranteed-returns claim', reports: 7, at: '2026-09-14T12:20:00Z', severity: 'high' },
  { id: 'MOD-766', type: 'Message', target: '@user_99213', reason: 'Harassment in group chat', reports: 1, at: '2026-09-14T09:55:00Z', severity: 'low' },
]

export const announcements = [
  { id: 'ANN-88', title: 'Scheduled maintenance — Sunday 02:00', audience: 'All users', channel: 'In-app banner', publishAt: '2026-09-16T02:00:00Z', status: 'scheduled' },
  { id: 'ANN-87', title: 'Multi-signature payouts now in public groups', audience: 'Public group admins', channel: 'Push + in-app', publishAt: '2026-09-14T10:00:00Z', status: 'published' },
  { id: 'ANN-86', title: 'Watch out for guaranteed-returns scams', audience: 'All users', channel: 'In-app banner', publishAt: '2026-09-10T09:00:00Z', status: 'published' },
  { id: 'ANN-85', title: 'Referral rewards beta', audience: 'Waitlist members', channel: 'Email', publishAt: null, status: 'draft' },
]
