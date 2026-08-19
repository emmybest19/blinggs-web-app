import { Sparkles } from 'lucide-react'

import SectionHeading from '@shared/ui/SectionHeading'

import ArticleCard from './ArticleCard'

export default function ArticlesGrid({ articles }) {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-12 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          as="h1"
          eyebrow="Fintech & Insights"
          icon={Sparkles}
          title="Latest Articles"
          subtitle="Explore our latest insights on fintech, cryptocurrency, security, and smart group savings."
        />

        {articles.length === 0 ? (
          <p className="text-slate-400">No articles published yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
