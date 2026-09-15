/**
 * Mock records standing in for the compliance API.
 * TODO: replace each export with a call in src/api/.
 */

export const complianceStats = [
  { label: 'Pending KYC', value: '4', delta: '2', deltaDirection: 'down', hint: 'vs yesterday' },
  { label: 'Screening hits', value: '7', delta: '3', deltaDirection: 'up', hint: 'last 7 days' },
  { label: 'Open cases', value: '3', deltaDirection: 'flat', hint: '1 overdue' },
  { label: 'Avg. review time', value: '4.2h', delta: '0.8h', deltaDirection: 'down', hint: 'vs last month' },
]

export const kycQueue = [
  { id: 'KYC-88412', name: 'Olumide Fashola', tier: 'Tier 3', document: 'International passport', submitted: '2026-09-15T06:40:00Z', risk: 'high', status: 'pending' },
  { id: 'KYC-88411', name: 'Grace Iyamu', tier: 'Tier 2', document: "Driver's licence", submitted: '2026-09-15T05:12:00Z', risk: 'low', status: 'pending' },
  { id: 'KYC-88410', name: 'Yusuf Abdullahi', tier: 'Tier 2', document: 'NIN slip', submitted: '2026-09-14T19:55:00Z', risk: 'medium', status: 'pending' },
  { id: 'KYC-88409', name: 'Chiamaka Eze', tier: 'Tier 3', document: 'International passport', submitted: '2026-09-14T17:30:00Z', risk: 'low', status: 'pending' },
  { id: 'KYC-88408', name: 'Tobi Adeyemi', tier: 'Tier 1', document: 'BVN match', submitted: '2026-09-14T11:02:00Z', risk: 'low', status: 'approved' },
  { id: 'KYC-88407', name: 'Hauwa Sani', tier: 'Tier 2', document: 'NIN slip', submitted: '2026-09-13T14:18:00Z', risk: 'high', status: 'rejected' },
]

export const screeningHits = [
  { id: 'SCR-2201', subject: 'Olumide Fashola', list: 'OFAC SDN', matchScore: 0.91, type: 'Name + DOB', status: 'review', at: '2026-09-15T06:41:00Z' },
  { id: 'SCR-2200', subject: 'Adebowale Ogun', list: 'UN Consolidated', matchScore: 0.74, type: 'Name only', status: 'cleared', at: '2026-09-14T13:10:00Z' },
  { id: 'SCR-2199', subject: 'Ibrahim Musa', list: 'PEP Register', matchScore: 0.88, type: 'Name + role', status: 'review', at: '2026-09-14T09:26:00Z' },
  { id: 'SCR-2198', subject: 'Funmi Alabi', list: 'Internal blocklist', matchScore: 1.0, type: 'Exact device', status: 'escalated', at: '2026-09-13T22:04:00Z' },
]

export const cases = [
  { id: 'CASE-514', subject: 'Unusual group payout pattern', owner: 'Ngozi Eze', opened: '2026-09-10T10:00:00Z', due: '2026-09-17T10:00:00Z', severity: 'high', status: 'investigating' },
  { id: 'CASE-513', subject: 'Structuring across 6 wallets', owner: 'Ngozi Eze', opened: '2026-09-08T08:30:00Z', due: '2026-09-12T08:30:00Z', severity: 'high', status: 'overdue' },
  { id: 'CASE-512', subject: 'PEP onboarding review', owner: 'Ahmed Bello', opened: '2026-09-05T15:45:00Z', due: '2026-09-19T15:45:00Z', severity: 'medium', status: 'investigating' },
]

export const reports = [
  { id: 'RPT-2026-08', name: 'Monthly AML return', period: 'August 2026', regulator: 'CBN', due: '2026-09-20T00:00:00Z', status: 'draft' },
  { id: 'RPT-2026-07', name: 'Monthly AML return', period: 'July 2026', regulator: 'CBN', due: '2026-08-20T00:00:00Z', status: 'filed' },
  { id: 'STR-0042', name: 'Suspicious transaction report', period: 'Sept 2026', regulator: 'NFIU', due: '2026-09-16T00:00:00Z', status: 'draft' },
  { id: 'RPT-2026-Q2', name: 'Quarterly capital adequacy', period: 'Q2 2026', regulator: 'CBN', due: '2026-07-31T00:00:00Z', status: 'filed' },
]
