import { siteUrl } from '../data/articles.data'

/**
 * Share links are built from the canonical site URL plus the article slug
 * rather than from `window.location`, so they keep working from a dev server or
 * preview deploy and never leak a localhost address into a shared post.
 */
const ICONS = {
  twitter: {
    label: 'Share on X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  linkedin: {
    label: 'Share on LinkedIn',
    path: 'M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5 1.12 1 2.5 1s2.48 1.119 2.48 2.5zM.22 8.02h4.56V24H.22zM8.34 8.02h4.37v2.18h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v9.16h-4.56v-8.12c0-1.94-.03-4.43-2.7-4.43-2.7 0-3.11 2.11-3.11 4.29V24H8.34z',
  },
  facebook: {
    label: 'Share on Facebook',
    path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.12 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.5c-1.48 0-1.94.92-1.94 1.87v2.24h3.3l-.53 3.49h-2.77V24C19.61 23.09 24 18.1 24 12.07z',
  },
}

export default function ShareRail({ article }) {
  const url = encodeURIComponent(`${siteUrl}/blog/${article.slug}`)
  const text = encodeURIComponent(article.title)

  const links = [
    { key: 'twitter', href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
    { key: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { key: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
  ]

  return (
    <aside className="lg:sticky lg:top-[100px]">
      <p className="mb-4 font-sans text-[9px] font-semibold tracking-[0.14em] text-[#6f7477] uppercase">
        Share this article
      </p>

      <div className="flex items-center gap-2.5">
        {links.map((link) => {
          const icon = ICONS[link.key]

          return (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.label}
              title={icon.label}
              className="flex size-9 items-center justify-center rounded-full border border-[#242424] bg-[#141414] text-[#777777] transition-colors duration-250 hover:border-brand hover:bg-[#101817] hover:text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-[13px]"
              >
                <path d={icon.path} />
              </svg>
            </a>
          )
        })}
      </div>
    </aside>
  )
}
