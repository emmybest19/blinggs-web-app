import { getArticles } from '../api/articles'
import ArticlesGrid from '../components/ArticlesGrid'

export default function BlogPage() {
  const articles = getArticles()

  return (
    <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
      <ArticlesGrid articles={articles} />
    </div>
  )
}
