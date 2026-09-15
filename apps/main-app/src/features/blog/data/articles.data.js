/**
 * Blog content.
 *
 * Two summaries per article, because the designs use two different ones:
 *   `excerpt` — the listing card summary (blog index, related cards)
 *   `dek`     — the standfirst under the title on the article page
 * `dek` falls back to `excerpt` when an article does not define its own.
 *
 * Article bodies use the same { type, ... } block shape as the legal documents,
 * so the renderer stays a switch over known block types rather than raw HTML.
 *
 * COVER IMAGES: no asset in public/ is usable as cover art — they are small
 * white icons. Every article therefore carries `cover: null` plus a `tone`, and
 * ArticleCover paints a designed gradient in place of the photograph. Drop a
 * file in public/blog/ and set `cover: '/blog/<file>.jpg'` to replace it.
 */

/** Canonical origin used to build share links. Must match the deployed domain. */
export const siteUrl = 'https://blinggapp.com'

/** Cards shown per page on the index, matching the design's 2 x 3 grid. */
export const PAGE_SIZE = 6

export const author = {
  name: 'Blingg Team',
  role: 'Product & Tech',
}

export const articles = [
  {
    slug: 'understanding-bitcoin-to-naira-conversion',
    category: 'Security',
    tone: 'teal',
    cover: null,
    coverAlt: 'Bitcoin to Naira conversion network',
    title: 'Understanding Bitcoin to Naira Conversion',
    excerpt:
      "Navigating conversion spreads and real-time market rates doesn't have to be complicated. We break down how Blingg delivers low-spread paths natively.",
    dek: 'A detailed look at minimizing transaction slippage, evaluating peer-to-peer rates, and securing your exchange transactions in one smooth app flow.',
    publishedAt: '2025-06-15',
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
   * The six below are the index grid. The designs supply their card copy only,
   * so `sections` is empty and the article page shows an honest "being written"
   * state rather than invented body copy.
   */
  {
    slug: '5-tips-for-secure-online-payments',
    category: 'Payments',
    tone: 'indigo',
    cover: null,
    coverAlt: 'Isometric secure payment network',
    title: '5 Tips for Secure Online Payments',
    excerpt:
      'Protect your digital wealth with these essential habits. Learn how multi-sig verification and transient payment routing safeguard your funds.',
    publishedAt: '2025-06-12',
    readTime: '5 Min Read',
    sections: [],
  },
  {
    slug: 'how-group-savings-can-change-your-life',
    category: 'Tips',
    tone: 'emerald',
    cover: null,
    coverAlt: 'Connected savings network core',
    title: 'How Group Savings Can Change Your Life',
    excerpt:
      "Pooling resources shouldn't be stressful. Discover the collaborative power of automated mutual saving targets with your flatmates.",
    publishedAt: '2025-06-08',
    readTime: '5 Min Read',
    sections: [],
  },
  {
    slug: 'the-future-of-mobile-banking-in-nigeria',
    category: 'Payments',
    tone: 'violet',
    cover: null,
    coverAlt: 'City skyline at night',
    title: 'The Future of Mobile Banking in Nigeria',
    excerpt:
      'As instant rails expand rapidly across West Africa, mobile-first fintech integrations are dismantling classical deposit barriers.',
    publishedAt: '2025-05-29',
    readTime: '5 Min Read',
    sections: [],
  },
  {
    slug: 'crypto-trading-a-beginners-guide',
    category: 'Tips',
    tone: 'amber',
    cover: null,
    coverAlt: 'Bitcoin held in a data mesh',
    title: "Crypto Trading: A Beginner's Guide",
    excerpt:
      'New to crypto inside Blingg? Learn how seamless on-off ramps let you trade, send, and hold stablecoins without external friction.',
    publishedAt: '2025-05-20',
    readTime: '5 Min Read',
    sections: [],
  },
  {
    slug: 'why-end-to-end-encryption-matters',
    category: 'Security',
    tone: 'cyan',
    cover: null,
    coverAlt: 'Encrypted circuit landscape',
    title: 'Why End-to-End Encryption Matters',
    excerpt:
      'Every transaction message is a private deal. We unpack the mathematics of keeping your financial chats absolutely unreadable to outsiders.',
    publishedAt: '2025-05-15',
    readTime: '5 Min Read',
    sections: [],
  },
  {
    slug: 'managing-your-finances-with-blingg',
    category: 'Tips',
    tone: 'emerald',
    cover: null,
    coverAlt: 'Blingg app on a phone',
    title: 'Managing Your Finances with Blingg',
    excerpt:
      'Say goodbye to scattered apps. Budget, coordinate communal targets, trade, and chat inside one high-integrity super app.',
    publishedAt: '2025-05-02',
    readTime: '5 Min Read',
    sections: [],
  },
]

export const featuredArticle =
  articles.find((article) => article.featured) ?? articles[0]

/** Everything the index grid paginates over — the featured article is already
 *  shown above it, so it is excluded here rather than appearing twice. */
export const listedArticles = articles.filter((article) => !article.featured)

export const findArticle = (slug) =>
  articles.find((article) => article.slug === slug)

/** Used by the Related Articles strip on an article page. */
export const relatedArticles = (slug, limit = 3) =>
  articles.filter((article) => article.slug !== slug).slice(0, limit)

export const totalPages = Math.max(1, Math.ceil(listedArticles.length / PAGE_SIZE))

export function articlesForPage(page) {
  const start = (page - 1) * PAGE_SIZE
  return listedArticles.slice(start, start + PAGE_SIZE)
}
