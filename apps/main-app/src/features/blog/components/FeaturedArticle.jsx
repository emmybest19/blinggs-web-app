import { Link } from 'react-router-dom'

import { author } from '../data/articles.data'
import { formatDate } from '../lib/formatDate'
import ArticleCover from './ArticleCover'
import CategoryBadge from './CategoryBadge'
import ReadArticleLink from './ReadArticleLink'

const initialsOf = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

/** The wide hero card at the top of the index: cover left, copy right. */
export default function FeaturedArticle({ article }) {
  return (
    <section className="px-4 xs:px-5 sm:px-8 lg:px-12 xl:px-20">
      <article className="group mx-auto w-full max-w-[1180px]">
        <Link
          to={`/blog/${article.slug}`}
          className="flex flex-col gap-6 rounded-2xl border border-[#242424] bg-[#131313] p-5 no-underline transition-colors duration-250 hover:border-[#3a3a3a] sm:p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-7"
        >
          <div className="w-full shrink-0 lg:w-[46%]">
            <ArticleCover
              article={article}
              aspect="aspect-[16/10]"
              rounded="rounded-xl"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <CategoryBadge category={article.category} />

              <span className="font-sans text-[10px] font-semibold tracking-[0.1em] text-[#6f7477] uppercase">
                Featured Article &middot;{' '}
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt, 'long')}
                </time>
              </span>
            </div>

            <h2 className="text-[22px] leading-[1.25] font-bold tracking-[-0.02em] text-[#f2f2f2] transition-colors duration-250 group-hover:text-white sm:text-[27px] lg:text-[31px]">
              {article.title}
            </h2>

            <p className="mt-4 max-w-[560px] font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[14.5px]">
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[rgba(45,209,189,0.25)] bg-[rgba(45,209,189,0.1)] font-sans text-[11px] font-semibold text-brand"
              >
                {initialsOf(author.name)}
              </span>

              <span>
                <span className="block font-sans text-[12.5px] font-semibold text-[#e2e2e2]">
                  {author.name}
                </span>
                <span className="block font-sans text-[11px] text-[#6f7477]">
                  {author.role}
                </span>
              </span>
            </div>

            <ReadArticleLink className="mt-5" />
          </div>
        </Link>
      </article>
    </section>
  )
}
