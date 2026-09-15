import ArticleCard from './ArticleCard'

export default function RelatedArticles({ articles }) {
  if (!articles.length) return null

  return (
    <section className="box-border w-full border-t border-ink-soft bg-surface px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="mb-8 text-[22px] leading-[1.25] font-bold tracking-[-0.02em] text-[#f1f1f1] sm:mb-10 sm:text-[27px]">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article) => (
            // The related strip shows read time rather than a date, and drops
            // the CTA line — the card itself is the link.
            <ArticleCard
              key={article.slug}
              article={article}
              meta="readTime"
              cta={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
