/**
 * Blog content.
 *
 * Articles use the same { type, ... } block shape as the legal documents, so
 * the body renderer stays a switch over known block types rather than raw HTML.
 *
 * COVER IMAGES: none of the assets in public/ are usable as cover art — they
 * are small white icons. Every article therefore carries `cover: null` and a
 * `tone`, and ArticleCover paints a designed gradient in place of the image.
 * Drop a real file in public/blog/ and set `cover: '/blog/<file>.jpg'` to
 * replace it; nothing else has to change.
 */

/** Canonical origin used to build share links. Must match the deployed domain. */
export const siteUrl = 'https://blinggapp.com'

export const articles = [
  {
    slug: 'understanding-bitcoin-to-naira-conversion',
    category: 'Security',
    tone: 'teal',
    cover: null,
    coverAlt: 'Bitcoin to Naira conversion flow',
    title: 'Understanding Bitcoin to Naira Conversion',
    excerpt:
      'A detailed look at minimizing transaction slippage, evaluating peer-to-peer rates, and securing your exchange transactions in one smooth app flow.',
    author: 'Blingg Engineering',
    publishedOn: 'Jun 15, 2025',
    readTime: '5 Min Read',
    featured: true,
    sections: [
      {
        id: 'the-currency-conversion-paradigm',
        title: 'The Currency Conversion Paradigm',
        blocks: [
          {
            type: 'p',
            text: 'Peer-to-peer and decentralized exchange networks have opened vast financial avenues for users in West Africa, but navigating the fluctuating spreads remains one of the largest financial challenges. To evaluate these exchanges effectively, one must look closely at instant bank rail speed, liquid market depths, and dynamic spread mitigation.',
          },
          {
            type: 'p',
            text: 'Blingg bridges this gap by directly linking liquidity pools to secure local payment processors, ensuring that our transaction engines lock down prices before execution, eliminating uninvited rate shifts.',
          },
        ],
      },
      {
        id: 'ensuring-transaction-sincerity',
        title: 'Ensuring Transaction Sincerity',
        blocks: [
          {
            type: 'p',
            text: 'Trust is the fundamental currency of modern peer-to-peer payments. Traditional bank rails present structural processing latency where rates degrade between deposit and final receipt. True end-to-end transparency forces absolute parity at both ends.',
          },
          {
            type: 'p',
            text: "By utilizing cryptographic verification steps natively in the conversation flow, Blingg confirms each party's intent instantaneously. When a transfer occurs, smart state machines lock the value in custody, releasing to Naira only when zero-latency criteria are verified.",
          },
        ],
      },
      {
        id: 'key-security-steps-when-off-ramping',
        title: 'Key Security Steps When Off-Ramping',
        blocks: [
          {
            type: 'p',
            text: 'When converting digital assets back to fiat currencies, follow these safety practices:',
          },
          {
            type: 'list',
            items: [
              'Confirm P2P participant score metrics directly inside our secure directory.',
              'Utilize dual-factor validation keys on every trade event.',
              'Keep communication inside secure, end-to-end encrypted chats.',
            ],
          },
        ],
      },
    ],
  },

  /*
   * The three articles below appear as cards in "Related Articles". The design
   * supplies their card copy only, so `sections` is empty and the article view
   * shows an honest "being written" state rather than invented body copy.
   */
  {
    slug: 'why-end-to-end-encryption-matters',
    category: 'Security',
    tone: 'indigo',
    cover: null,
    coverAlt: 'Encrypted message network',
    title: 'Why End-to-End Encryption Matters',
    excerpt:
      'Every transaction message is a private deal. We unpack the math behind keeping chats secure.',
    author: 'Blingg Engineering',
    publishedOn: 'Jun 02, 2025',
    readTime: '5 Min Read',
    sections: [],
  },
  {
    slug: 'the-future-of-mobile-banking',
    category: 'Payments',
    tone: 'violet',
    cover: null,
    coverAlt: 'City skyline at night',
    title: 'The Future of Mobile Banking',
    excerpt:
      'As instant rails expand rapidly across West Africa, mobile-first fintech integrations take over.',
    author: 'Blingg Engineering',
    publishedOn: 'May 21, 2025',
    readTime: '5 Min Read',
    sections: [],
  },
  {
    slug: 'crypto-trading-a-beginners-guide',
    category: 'Tips',
    tone: 'emerald',
    cover: null,
    coverAlt: 'Crypto market orb',
    title: "Crypto Trading: A Beginner's Guide",
    excerpt:
      'Seamless on-off ramps let you trade stablecoins inside Blingg without external friction.',
    author: 'Blingg Engineering',
    publishedOn: 'May 09, 2025',
    readTime: '5 Min Read',
    sections: [],
  },
]

export const featuredArticle =
  articles.find((article) => article.featured) ?? articles[0]

export const findArticle = (slug) =>
  articles.find((article) => article.slug === slug)

/** Everything except `slug`, capped — used for the Related Articles strip. */
export const relatedArticles = (slug, limit = 3) =>
  articles.filter((article) => article.slug !== slug).slice(0, limit)
