/** Copy for the "Two ways to save together" comparison cards. */
export const savingsGroups = [
  {
    id: 'personal',
    badge: 'Private Control',
    title: 'Personal Groups',
    description:
      "Designed for life's special moments. Personal Groups on Blingg let friends and family save, contribute, and donate together with ease. Create a shared wallet, contribute anytime, and withdraw instantly.",
    tags: ['Weddings', 'Birthdays', 'Baby Showers', 'Family Savings'],
    footer: {
      title: 'Admin Controlled',
      description:
        'Admin manages all funds, payouts, and members directly.',
    },
  },
  {
    id: 'general',
    badge: 'Community Trust',
    title: 'General Groups',
    description:
      'Group money deserves group control. General Groups provide maximum transparency and accountability. All contributions go into a secure wallet where no single person can misuse funds.',
    bullets: [
      'Withdrawal requests visible to all members',
      'Ideal for Churches, Cooperatives, and Associations',
    ],
    footer: {
      title: 'Multi-Sig Approval (60% Rule)',
      description:
        'Requires approval from at least 60% of members to release funds.',
    },
  },
]
