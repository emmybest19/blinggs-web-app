import Reveal from '@shared/ui/Reveal'

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
      <Reveal>
        <ArticleHeader article={article} />
      </Reveal>

      {/* Cover */}
      <Reveal>
        <div className="px-4 xs:px-5 sm:px-8 lg:px-12 xl:px-20">
          <div className="mx-auto w-full max-w-[1180px]">
            <ArticleCover article={article} />
          </div>
        </div>
      </Reveal>

      {/*
        * The grid itself stays un-animated: ShareRail is `lg:sticky`, and a
        * sticky child under an animating transform is not worth the risk.
        */}
      <div className="px-4 py-12 xs:px-5 sm:px-8 sm:py-16 lg:px-12 xl:px-20">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12">
          <ShareRail article={article} />

          {/* `once` — this is the prose someone is reading. It fades in, then
            * stays put however they scroll through it. */}
          <Reveal once className="min-w-0">
            <article className="max-w-[720px]">
              <ArticleBody article={article} />
            </article>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <RelatedArticles articles={related} />
      </Reveal>
    </main>
  )
}
