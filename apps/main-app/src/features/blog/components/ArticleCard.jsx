import { Link } from 'react-router-dom'

import ArticleCover from './ArticleCover'
import CategoryBadge from './CategoryBadge'

export default function ArticleCard({ article }) {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-[#242424] bg-[#131313] transition-colors duration-250 hover:border-[#343434]">
      <Link
        to={`/blog/${article.slug}`}
        className="flex h-full flex-col no-underline"
      >
        <ArticleCover
          article={article}
          aspect="aspect-[16/9]"
          rounded="rounded-none"
          className="border-x-0 border-t-0"
        />

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3.5 flex items-center justify-between gap-3">
            <CategoryBadge category={article.category} />

            <span className="font-sans text-[10px] text-[#6f7477]">
              {article.readTime}
            </span>
          </div>

          <h3 className="mb-2.5 text-[15px] leading-[1.35] font-semibold text-[#e6e6e6] transition-colors duration-250 group-hover:text-white sm:text-base">
            {article.title}
          </h3>

          <p className="font-sans text-[12px] leading-[1.65] text-[#7c8184]">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
}
