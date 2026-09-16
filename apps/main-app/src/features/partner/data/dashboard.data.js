/**
 * Partner dashboard copy and sample state.
 *
 * `partner` is the shape the dashboard endpoint should return. Everything the
 * screen displays is derived from it rather than written out twice — the
 * invite link, the points label, the payout and the bonus bar all come off
 * these numbers, so none of them can disagree with another.
 *
 * The zeroes are deliberate: this is a partner who has just registered, which
 * is the state the design specifies.
 */
export const partner = {
  name: 'Babajide Alao',
  code: 'BLG-74',

  linkClicks: 0,
  registrations: 0,
  activations: 0,
  points: 0,

  /* Rows for Recent Registrations. Empty until someone signs up. */
  recent: [],

  /* Rows for the Referral Leaderboard. */
  leaderboard: [],
}

/** Points-to-Naira conversion. 1000 BP is worth ₦100. */
export const PAYOUT_RATE = { points: 1000, naira: 100 }

/** Wallet activations needed for the first bonus. */
export const BONUS_TARGET = 50

export const INVITE_HOST = 'blingg.co/join'

/** First name only — the welcome line greets, it does not address formally. */
export const firstName = (fullName) => fullName.trim().split(/\s+/)[0]

/** "Babajide Alao" -> "BA". Falls back to one letter for a single name. */
export const initials = (fullName) =>
  fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

export const inviteLink = (code) => `${INVITE_HOST}/${code}`

/** Points converted to Naira at PAYOUT_RATE, formatted as ₦0.00. */
export const payoutOf = (points) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format((points / PAYOUT_RATE.points) * PAYOUT_RATE.naira)

export const dashboardCopy = {
  badge: 'CAMPUS PARTNER',
  exitLabel: 'Exit',

  codeLabel: 'YOUR PARTNER CODE',
  linkLabel: 'YOUR CUSTOM INVITE LINK',
  copyLabel: 'Copy invite link',
  copiedLabel: 'Copied',
  qrLabel: 'Show invite QR code',

  bonusTitle: 'Bonus Reward Progress',
  bonusEmpty:
    "You haven't activated any wallets yet. Keep sharing your link to unlock your first bonus.",
  bonusDone: 'Bonus unlocked. Your reward is on its way.',

  recentTitle: 'Recent Registrations',
  recentColumns: [
    'Name',
    'Registration Date',
    'Wallet Status',
    'Points Earned',
  ],
  recentEmptyTitle: 'No registrations yet',
  recentEmptyBody: 'Share your invite link to start seeing registrations here.',

  claimTitle: 'Claim Cash Reward',
  claimSubtitle: 'Convert Blingg Points (BP) directly to Naira.',
  payoutLabel: 'ESTIMATED PAYOUT',
  withdrawLabel: 'Withdraw to Blingg Account',

  leaderboardTitle: 'Referral Leaderboard',
  leaderboardSubtitle: 'Top Partners on the referral board.',
  leaderboardEmptyTitle: 'Leaderboard',
  leaderboardEmptyBody:
    'No registrations yet. Start sharing your link to appear here.',
}

/**
 * The line under the bonus bar. The design only specifies the zero case, but
 * that sentence is wrong the moment a wallet is activated, so the in-between
 * and finished states are spelled out too.
 */
export const bonusMessage = (activations) => {
  if (activations <= 0) return dashboardCopy.bonusEmpty
  if (activations >= BONUS_TARGET) return dashboardCopy.bonusDone

  const left = BONUS_TARGET - activations
  return `${left} more wallet activation${left === 1 ? '' : 's'} to unlock your first bonus.`
}

/** The four headline metrics, in the order the design lays them out. */
export const statsFor = (data) => [
  { id: 'clicks', label: 'Link Clicks', value: `${data.linkClicks}` },
  { id: 'registrations', label: 'Registrations', value: `${data.registrations}` },
  { id: 'activations', label: 'Activations', value: `${data.activations}` },
  { id: 'points', label: 'Points Earned', value: `${data.points} BP` },
]
