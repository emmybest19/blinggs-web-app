/**
 * Partner Program copy, transcribed from the design. Kept out of the
 * components so wording changes stay in one place — the same pattern as
 * features/about and features/waitlist.
 */

/**
 * Every destination this page points at, in one place rather than scattered
 * through the components.
 *
 * `portal` is a real route. The rest are still stubs — wiring one up is an
 * edit here and a swap from <a href> to <Link to> at the call site.
 */
export const partnerLinks = {
  /* Real route: the public partner programme page. */
  landing: '/affiliate',

  /* Real route: the portal sign-in behind "Portal Login" and
   * "Login to Dashboard". */
  portal: '/affiliate/login',

  /* Real route: the partner dashboard, where a successful sign-in lands. */
  dashboard: '/affiliate/dashboard',

  /* Real route: the institution registration step behind "Apply Now" and
   * "Apply as Partner Rep". */
  apply: '/affiliate/apply',

  /* Stub — partner-specific terms. Deliberately NOT /terms-of-service: that
   * document covers app users, not representatives. */
  terms: '#',

  /* Stub — password recovery, linked from the portal sign-in. */
  forgot: '#',
}

export const partnerHero = {
  badge: 'PARTNERSHIP PROGRAM',
  title: 'Represent Blingg. Lead Your Community.',
  accentTitle: 'Start Earning',
  subtitle:
    'Become an official Blingg Partner Representative. Help your network discover next-generation social payments, secure communities, and unified group savings while earning rewards.',
}

export const whyPartner = {
  title: 'Why become a Partner?',
  subtitle: 'Earn, learn, and grow with the next generation of African fintech.',
  benefits: [
    {
      id: 'dashboard',
      title: 'Personal Dashboard',
      body: 'Track every click, registration, and wallet activation in real-time with your integrated analytic terminal.',
    },
    {
      id: 'tracking',
      title: 'Performance Tracking',
      body: 'Review your ranking progress metrics and monitor exactly how close you are to bonus unlock thresholds.',
    },
    {
      id: 'rewards',
      title: 'Cash Rewards',
      body: 'Every accumulated Blingg Point (BP) is fully convertible to cash with seamless automated payouts to your wallet.',
    },
    {
      id: 'internship',
      title: 'Zeta Internship Priority',
      body: 'Gain priority access and resume screening for internship programs with our parent brand, Zeta Technologies.',
    },
    {
      id: 'founding',
      title: 'Founding Rep Recognition',
      body: 'Get exclusive merchandise, official certificates, and permanent recognition as a Founding Blingg Partner.',
    },
    {
      id: 'limits',
      title: 'Zero Limit Transactions',
      body: 'Unlock elevated personal transaction parameters and experience special features ahead of standard users.',
    },
  ],
}

export const howItWorks = {
  title: 'How It Works',
  steps: [
    {
      id: 'code',
      title: 'Get Your Code',
      body: 'Generate your unique partner identification link, personal invite code, and sharing QR code.',
    },
    {
      id: 'share',
      title: 'Share and Onboard',
      body: 'Encourage your network and community members to download Blingg and register through your code.',
    },
    {
      id: 'earn',
      title: 'Earn Points',
      body: 'Gain Blingg Points instantly as soon as users fund their wallets. Swap points for direct cash settlements.',
    },
  ],
}

export const pointRewards = {
  title: 'Point Reward System',
  subtitle:
    'Blingg Points (BP) directly translate into cash payouts per activation policy.',
  cards: [
    {
      id: 'earn',
      title: 'How to Earmark Points',
      body: 'Each verified registration utilizing your code grants base points. Activations where the user funds their pocket ledger unlock maximum point scale tiers.',
      value: '500 BP',
      caption: 'Per Qualified Wallet Activation',
    },
    {
      id: 'payout',
      title: 'Payout Thresholds',
      body: 'Point accumulation is fully automated. Payout processes trigger twice monthly directly into your Blingg app wallet interface once you clear basic anti-fraud filters.',
      value: '₦25,000',
      caption: 'Minimum Direct Conversion Payout',
    },
  ],
}

export const terminal = {
  title: 'Your Partner Terminal',
  subtitle:
    'A robust private interface developed for campaign analytics. Monitor parameters, check placement rankings, and check pay structures on one screen.',
  stats: [
    { id: 'clicks', label: 'Raw Clicks', value: '4,821' },
    { id: 'registrations', label: 'Registrations', value: '1,240' },
    { id: 'activations', label: 'Activations', value: '892' },
    { id: 'points', label: 'Blingg Points', value: '14,250 BP', accent: true },
  ],
  placement: {
    title: 'Leaderboard Placement',
    rows: [
      { id: 'institution', label: 'Institution Rank', value: '#4 of 124' },
      { id: 'department', label: 'Department Rank (CS)', value: '#1 of 32' },
      { id: 'payout', label: 'Estimated Cash Payout', value: '₦71,200' },
    ],
  },
  milestone: {
    title: 'Monthly Milestone',
    target: 'Target: 1,000 activations',
    /* Drives both the label and the bar width, so the two cannot disagree. */
    percent: 89.2,
    cta: 'Login to Dashboard',
  },
}

export const leaderboard = {
  title: 'Partner Leaderboard',
  subtitle:
    'Check top-tier representatives driving adoption patterns across institutions and regions.',
  columns: ['Rank', 'Representative', 'Institution', 'Points (BP)'],
  rows: [
    {
      rank: 1,
      name: 'Tunde Alabi',
      institution: 'University of Lagos',
      points: '48,500',
    },
    {
      rank: 2,
      name: 'Fatima Yusuf',
      institution: 'Ahmadu Bello University',
      points: '41,200',
    },
    {
      rank: 3,
      name: 'Chinedu Obi',
      institution: 'University of Nigeria',
      points: '38,900',
    },
    {
      rank: 4,
      name: 'Demola Adebayo',
      institution: 'Covenant University',
      points: '34,250',
    },
  ],
}

export const futureOpportunities = {
  title: 'Future Opportunities',
  subtitle: 'Your partnership is just the first step in your career.',
  tracks: [
    {
      id: 'paid',
      title: 'Paid Roles',
      body: 'Transition from volunteer ambassador setups to formal, contract-backed marketing leadership roles.',
    },
    {
      id: 'internships',
      title: 'Zeta Internships',
      body: 'Gain first-look consideration for summer software engineering, product design, and operations internships.',
    },
    {
      id: 'fulltime',
      title: 'Full-Time Tracks',
      body: 'Top-performing partners secure direct invitations for post-graduation roles inside Zeta Technologies Limited.',
    },
  ],
}

export const partnerVision = {
  title: 'Our Vision',
  body: 'We are building a highly integrated collaboration layer for Africa’s digital economy. By empowering community leaders to act as local champions, we are creating a network of trust that connects millions.',
}
