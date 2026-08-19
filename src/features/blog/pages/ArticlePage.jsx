import ArticleBody from '../components/ArticleBody'
import ArticleHeader from '../components/ArticleHeader'
import ShareArticle from '../components/ShareArticle'
import { useArticle } from '../hooks/useArticle'

export default function ArticlePage() {
  const article = useArticle()

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#434c5d]">
        <p className="text-white text-lg">Article not found</p>
      </div>
    )
  }

  return (
    <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
      <ShareArticle />
    </div>
  )
}
