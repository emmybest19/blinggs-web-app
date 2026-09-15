import { Link, useParams } from 'react-router-dom'

import ArticleView from '../components/ArticleView'
import { findArticle } from '../data/articles.data'

/** A single article at /blog/:slug. */
export default function ArticlePage() {
  const { slug } = useParams()
  const article = findArticle(slug)

  if (!article) {
    return (
      <main className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-3 bg-ink-deep px-5 text-center">
        <h1 className="text-[22px] font-bold text-[#e6e6e6] sm:text-[26px]">
          Article not found
        </h1>

        <p className="max-w-[420px] font-sans text-[13px] leading-[1.7] text-[#8d9298]">
          We could not find an article at that address. It may have been moved
          or renamed.
        </p>

        <Link
          to="/blog"
          className="mt-3 inline-flex h-10 items-center justify-center rounded-[9px] bg-brand-dark px-6 font-sans text-[13px] font-semibold text-[#071312] no-underline transition-all duration-250 hover:-translate-y-px hover:bg-[#25d1bb]"
        >
          Back to the blog
        </Link>
      </main>
    )
  }

  return <ArticleView article={article} />
}
