import { Link } from 'react-router-dom'

/**
 * Page links for the index. Real navigation, not decoration: each control is a
 * `<Link>` to ?page=N, so pages are addressable, shareable and work with the
 * browser's back button.
 *
 * Renders nothing when everything fits on one page — a lone "1" with two dead
 * arrows tells the reader less than no control at all.
 */
const box =
  'flex size-9 items-center justify-center rounded-lg border font-sans text-[12.5px] tabular-nums no-underline transition-colors duration-200'

export default function Pagination({ page, totalPages, pageHref }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
  const hasPrev = page > 1
  const hasNext = page < totalPages

  const arrow = (enabled) =>
    `${box} ${
      enabled
        ? 'border-[#2a2a2a] bg-[#151515] text-[#9a9fa3] hover:border-[#3a3a3a] hover:text-white'
        : 'pointer-events-none border-[#1e1e1e] bg-[#121212] text-[#4a4e50]'
    }`

  return (
    <nav
      aria-label="Blog pages"
      className="mt-12 flex items-center justify-center gap-2 sm:mt-14"
    >
      <Link
        to={pageHref(page - 1)}
        aria-label="Previous page"
        aria-disabled={!hasPrev}
        tabIndex={hasPrev ? undefined : -1}
        className={arrow(hasPrev)}
      >
        &lsaquo;
      </Link>

      {pages.map((number) => {
        const isCurrent = number === page

        return (
          <Link
            key={number}
            to={pageHref(number)}
            aria-label={`Page ${number}`}
            aria-current={isCurrent ? 'page' : undefined}
            className={`${box} ${
              isCurrent
                ? 'border-[rgba(45,209,189,0.35)] bg-[rgba(45,209,189,0.1)] font-semibold text-brand'
                : 'border-[#2a2a2a] bg-[#151515] text-[#9a9fa3] hover:border-[#3a3a3a] hover:text-white'
            }`}
          >
            {number}
          </Link>
        )
      })}

      <Link
        to={pageHref(page + 1)}
        aria-label="Next page"
        aria-disabled={!hasNext}
        tabIndex={hasNext ? undefined : -1}
        className={arrow(hasNext)}
      >
        &rsaquo;
      </Link>
    </nav>
  )
}
