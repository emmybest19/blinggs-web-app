import { useSearchParams } from 'react-router-dom'

import Reveal from '@shared/ui/Reveal'

import ArticleGrid from '../components/ArticleGrid'
import BlogHeader from '../components/BlogHeader'
import FeaturedArticle from '../components/FeaturedArticle'
import NewsletterCta from '../components/NewsletterCta'
import Pagination from '../components/Pagination'
import { articlesForPage, featuredArticle, totalPages } from '../data/articles.data'

/** The blog index at /blog. */
export default function BlogPage() {
  const [searchParams] = useSearchParams()

  // Clamp rather than 404: ?page=99 or ?page=abc should still show articles.
  const requested = Number.parseInt(searchParams.get('page') ?? '1', 10)
  const page = Number.isNaN(requested)
    ? 1
    : Math.min(Math.max(requested, 1), totalPages)

  const pageHref = (number) => (number <= 1 ? '/blog' : `/blog?page=${number}`)

  return (
    <main className="w-full max-w-full overflow-x-clip bg-ink-deep pb-16 sm:pb-20">
      <Reveal>
        <BlogHeader />
      </Reveal>

      {/* The featured article only belongs at the top of the first page */}
      {page === 1 && (
        <Reveal>
          <FeaturedArticle article={featuredArticle} />
        </Reveal>
      )}

      <Reveal>
        <section className="px-4 pt-10 xs:px-5 sm:px-8 sm:pt-14 lg:px-12 xl:px-20">
          <div className="mx-auto w-full max-w-[1180px]">
            <ArticleGrid articles={articlesForPage(page)} />

            <Pagination page={page} totalPages={totalPages} pageHref={pageHref} />
          </div>
        </section>
      </Reveal>

      {/* Holds the newsletter email field — see the note in Reveal.jsx. */}
      <NewsletterCta />
    </main>
  )
}
