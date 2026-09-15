import { relatedArticles } from '../data/articles.data'
import ArticleBody from './ArticleBody'
import ArticleCover from './ArticleCover'
import ArticleHeader from './ArticleHeader'
import RelatedArticles from './RelatedArticles'
import ShareRail from './ShareRail'

/** One article, top to bottom. Both /blog and /blog/:slug render this. */
export default function ArticleView({ article }) {
  const related = relatedArticles(article.slug)

  return (
    <main className="w-full max-w-full overflow-x-clip bg-ink-deep">
      <ArticleHeader article={article} />

      {/* Cover */}
      <div className="px-4 xs:px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto w-full max-w-[1180px]">
          <ArticleCover article={article} />
        </div>
      </div>

      {/* Share rail + body */}
      <div className="px-4 py-12 xs:px-5 sm:px-8 sm:py-16 lg:px-12 xl:px-20">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12">
          <ShareRail article={article} />

          <article className="min-w-0 max-w-[720px]">
            <ArticleBody article={article} />
          </article>
        </div>
      </div>

      <RelatedArticles articles={related} />
    </main>
  )
}
