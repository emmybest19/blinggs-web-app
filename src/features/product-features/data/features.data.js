/**
 * The canonical Blingg feature list.
 *
 * This used to be duplicated in the header (with Unsplash placeholders) and in
 * the features grid (with local art) which meant the two drifted apart. Both
 * now read from here.
 *
 * NOTE: image paths must match the casing of the files in `public/features/`
 * exactly — Vercel serves from a case-sensitive filesystem.
 */
export const productFeatures = [
  {
    id: 'secure-messaging',
    title: 'Secure Messaging',
    description: 'End-to-end encrypted chat & instant voice messaging.',
    image: '/features/secure-messaging.png',
  },
  {
    id: 'private-calls',
    title: 'Private & Group Calls',
    description: 'HD voice and video calling for teams and friends.',
    image: '/features/group-calls.png',
  },
  {
    id: 'secure-scanning',
    title: 'Secure Scanning',
    description: 'Real-time automatic scanning for links and files.',
    image: '/features/Secure-scanning.png',
  },
  {
    id: 'in-chat-payment',
    title: 'In-Chat Payment',
    description: 'Send and request money directly inside any chat.',
    image: '/features/In-chat-payment.png',
  },
  {
    id: 'group-contribution',
    title: 'Group Contribution',
    description: 'Personal & General savings pools with multi-sig approval.',
    image: '/features/Group-contribution.png',
  },
  {
    id: 'instant-bank-payout',
    title: 'Instant Bank Payouts',
    description: 'Transfer funds directly to any Nigerian bank account.',
    image: '/features/instant-payment.png',
  },
  {
    id: 'stories-status',
    title: 'Stories & Status',
    description: 'Share photos, updates, and moments with contacts.',
    image: '/features/Stories.png',
  },
]

export const DEFAULT_FEATURE_ID = productFeatures[0].id

export const featureHighlights = [
  'Bank-grade security',
  'Real-time instant processing',
  'Zero hidden fees',
  'Available on iOS & Android',
]

export function getFeatureById(id) {
  return productFeatures.find((feature) => feature.id === id)
}
