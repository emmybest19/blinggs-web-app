import ArticleCard from './ArticleCard'

export default function ArticleGrid({ articles }) {
  if (!articles.length) {
    return (
      <p className="py-14 text-center font-sans text-[13px] text-[#7c8184]">
        No articles on this page.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}
