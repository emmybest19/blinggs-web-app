/**
 * An article's cover. Renders the real image when one exists, and otherwise a
 * designed gradient keyed to the article's `tone` — so the page reads as
 * deliberate rather than broken while the photography is outstanding, and the
 * three related cards do not look like three identical grey boxes.
 */
const TONES = {
  teal: 'from-[#0c2b27] via-[#091d1b] to-[#060f0e]',
  indigo: 'from-[#131a33] via-[#0c1121] to-[#070a13]',
  violet: 'from-[#241533] via-[#170d22] to-[#0b0714]',
  emerald: 'from-[#0d2b1c] via-[#091e14] to-[#05100b]',
  amber: 'from-[#2e2110] via-[#1d150a] to-[#100b05]',
  cyan: 'from-[#0b2630] via-[#081a21] to-[#050e12]',
}

const GLOWS = {
  teal: 'bg-[radial-gradient(circle,rgba(45,209,189,0.30)_0%,transparent_65%)]',
  indigo: 'bg-[radial-gradient(circle,rgba(99,132,255,0.26)_0%,transparent_65%)]',
  violet: 'bg-[radial-gradient(circle,rgba(180,110,255,0.24)_0%,transparent_65%)]',
  emerald: 'bg-[radial-gradient(circle,rgba(52,211,153,0.26)_0%,transparent_65%)]',
  amber: 'bg-[radial-gradient(circle,rgba(245,180,80,0.26)_0%,transparent_65%)]',
  cyan: 'bg-[radial-gradient(circle,rgba(56,189,220,0.26)_0%,transparent_65%)]',
}

// Faint technical grid, echoing the data-mesh look of the cover artwork.
const GRID =
  '[background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:26px_26px]'

export default function ArticleCover({
  article,
  aspect = 'aspect-[16/7]',
  className = '',
  rounded = 'rounded-2xl',
}) {
  const tone = TONES[article.tone] ?? TONES.teal
  const glow = GLOWS[article.tone] ?? GLOWS.teal

  if (article.cover) {
    return (
      <img
        src={article.cover}
        alt={article.coverAlt ?? ''}
        loading="lazy"
        className={`w-full max-w-full object-cover ${aspect} ${rounded} ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={article.coverAlt ?? article.title}
      className={`relative w-full max-w-full overflow-hidden border border-white/[0.06] bg-gradient-to-br ${tone} ${aspect} ${rounded} ${className}`}
    >
      <div aria-hidden="true" className={`absolute inset-0 ${GRID}`} />

      <div
        aria-hidden="true"
        className={`absolute top-1/2 left-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 blur-[40px] ${glow}`}
      />

      {/* Ring motif at the centre, echoing the design's focal element */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[11%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
      />
    </div>
  )
}
