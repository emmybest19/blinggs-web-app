/**
 * Mock records standing in for the ledger API.
 *
 * TODO: replace each export with a call in src/api/. Amounts are minor-unit
 * free (whole Naira) to match what formatNaira expects.
 */

export const financeStats = [
  { label: 'Volume (30d)', value: '₦2.41B', delta: '12.8%', deltaDirection: 'up', hint: 'vs previous 30d' },
  { label: 'Fees collected', value: '₦18.2M', delta: '4.1%', deltaDirection: 'up', hint: 'vs previous 30d' },
  { label: 'Float balance', value: '₦412.6M', deltaDirection: 'flat', hint: 'across 4 banks' },
  { label: 'Failed transfers', value: '0.31%', delta: '0.08pp', deltaDirection: 'down', hint: 'vs previous 30d' },
]

export const transactions = [
  { id: 'TXN-90412', user: 'Ifeoma Chukwu', type: 'Transfer', amount: 250000, channel: 'Bank', status: 'settled', at: '2026-09-15T08:12:00Z' },
  { id: 'TXN-90411', user: 'Musa Danjuma', type: 'Group payout', amount: 1850000, channel: 'Wallet', status: 'settled', at: '2026-09-15T07:58:00Z' },
  { id: 'TXN-90410', user: 'Blessing Ade', type: 'Crypto off-ramp', amount: 640000, channel: 'Bank', status: 'pending', at: '2026-09-15T07:45:00Z' },
  { id: 'TXN-90409', user: 'Emeka Obi', type: 'Transfer', amount: 42000, channel: 'Wallet', status: 'settled', at: '2026-09-15T07:31:00Z' },
  { id: 'TXN-90408', user: 'Zainab Bello', type: 'Deposit', amount: 3200000, channel: 'Bank', status: 'settled', at: '2026-09-15T07:04:00Z' },
  { id: 'TXN-90407', user: 'Kelechi Nnaji', type: 'Transfer', amount: 91500, channel: 'Bank', status: 'failed', at: '2026-09-15T06:52:00Z' },
  { id: 'TXN-90406', user: 'Aisha Lawal', type: 'Group contribution', amount: 120000, channel: 'Wallet', status: 'settled', at: '2026-09-15T06:20:00Z' },
]

export const settlementBatches = [
  { id: 'BATCH-2026-0915-A', bank: 'GTBank', count: 1842, amount: 184200000, status: 'awaiting approval', cutoff: '2026-09-15T14:00:00Z' },
  { id: 'BATCH-2026-0915-B', bank: 'Access Bank', count: 964, amount: 96410000, status: 'awaiting approval', cutoff: '2026-09-15T14:00:00Z' },
  { id: 'BATCH-2026-0915-C', bank: 'Zenith Bank', count: 512, amount: 51200000, status: 'awaiting approval', cutoff: '2026-09-15T14:00:00Z' },
  { id: 'BATCH-2026-0914-A', bank: 'GTBank', count: 1790, amount: 179050000, status: 'settled', cutoff: '2026-09-14T14:00:00Z' },
  { id: 'BATCH-2026-0914-B', bank: 'Kuda', count: 388, amount: 38800000, status: 'settled', cutoff: '2026-09-14T14:00:00Z' },
]

export const reconciliation = [
  { id: 'rec-1', account: 'GTBank · 0231', ledger: 184200000, statement: 184200000, variance: 0, status: 'matched' },
  { id: 'rec-2', account: 'Access Bank · 7741', ledger: 96410000, statement: 96395000, variance: -15000, status: 'variance' },
  { id: 'rec-3', account: 'Zenith Bank · 1180', ledger: 51200000, statement: 51200000, variance: 0, status: 'matched' },
  { id: 'rec-4', account: 'Kuda · 5502', ledger: 38800000, statement: 38800000, variance: 0, status: 'matched' },
  { id: 'rec-5', account: 'Crypto custody', ledger: 41600000, statement: 41538000, variance: -62000, status: 'investigating' },
]

export const feeRules = [
  { id: 'fee-1', name: 'Peer transfer', basis: 'Flat', value: '₦0', applies: 'All users', active: true },
  { id: 'fee-2', name: 'Bank withdrawal', basis: 'Flat', value: '₦25', applies: 'Above ₦10,000', active: true },
  { id: 'fee-3', name: 'Crypto off-ramp', basis: 'Percentage', value: '0.85%', applies: 'All conversions', active: true },
  { id: 'fee-4', name: 'Group payout', basis: 'Flat', value: '₦50', applies: 'Public groups', active: true },
  { id: 'fee-5', name: 'Instant settlement', basis: 'Percentage', value: '0.25%', applies: 'Merchant accounts', active: false },
]
