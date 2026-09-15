import { Link } from 'react-router-dom'

import { formatDate } from '../lib/formatDate'
import ArticleCover from './ArticleCover'
import CategoryBadge from './CategoryBadge'
import ReadArticleLink from './ReadArticleLink'

/**
 * One article card.
 *
 * @param meta 'date' on the blog index, 'readTime' on an article's related
 *   strip — the two designs put different information in that corner.
 * @param cta  whether to show the "Read Article →" line beneath the excerpt.
 */
export default function ArticleCard({ article, meta = 'date', cta = true }) {
  return (
    <article className="group h-full">
      <Link
        to={`/blog/${article.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-[#242424] bg-[#131313] p-3.5 no-underline transition-colors duration-250 hover:border-[#3a3a3a]"
      >
        <ArticleCover
          article={article}
          aspect="aspect-[16/9]"
          rounded="rounded-lg"
        />

        <div className="flex flex-1 flex-col px-1.5 pt-4 pb-1.5">
          <div className="mb-3.5 flex items-center justify-between gap-3">
            <CategoryBadge category={article.category} />

            {meta === 'readTime' ? (
              <span className="font-sans text-[10.5px] text-[#6f7477]">
                {article.readTime}
              </span>
            ) : (
              <time
                dateTime={article.publishedAt}
                className="font-sans text-[10.5px] text-[#6f7477]"
              >
                {formatDate(article.publishedAt)}
              </time>
            )}
          </div>

          <h3 className="mb-2.5 text-[15px] leading-[1.35] font-semibold text-[#e9e9e9] transition-colors duration-250 group-hover:text-white sm:text-base">
            {article.title}
          </h3>

          <p className="font-sans text-[12px] leading-[1.65] text-[#7c8184]">
            {article.excerpt}
          </p>

          {cta && <ReadArticleLink className="mt-4" />}
        </div>
      </Link>
    </article>
  )
}
