import CategoryBadge from './CategoryBadge'

/** Initials stand in for the author photo the design shows. */
const initialsOf = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

export default function ArticleHeader({ article }) {
  return (
    <header className="relative overflow-hidden bg-ink-deep px-4 pt-[60px] pb-10 text-center xs:px-5 xs:pt-[70px] sm:px-8 sm:pt-[80px] lg:px-12 xl:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-150px] left-1/2 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.07)] blur-[100px]"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[820px] flex-col items-center">
        <CategoryBadge category={article.category} className="mb-6" />

        <h1 className="max-w-[760px] text-[28px] leading-[1.2] font-bold tracking-[-0.03em] text-[#f4f4f4] xs:text-[34px] sm:text-[42px] lg:text-[52px]">
          {article.title}
        </h1>

        <p className="mt-5 max-w-[620px] font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[15px]">
          {article.excerpt}
        </p>

        {/* Byline */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[rgba(45,209,189,0.25)] bg-[rgba(45,209,189,0.1)] font-sans text-[11px] font-semibold text-brand"
          >
            {initialsOf(article.author)}
          </span>

          <span className="text-left">
            <span className="block font-sans text-[12px] font-semibold text-[#e2e2e2] sm:text-[13px]">
              Written by {article.author}
            </span>
            <span className="block font-sans text-[11px] text-[#6f7477]">
              Published {article.publishedOn} &middot; {article.readTime}
            </span>
          </span>
        </div>
      </div>
    </header>
  )
}
