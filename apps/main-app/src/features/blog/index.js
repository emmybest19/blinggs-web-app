/**
 * Public API of the `blog` feature.
 */
export { default as BlogPage } from './pages/BlogPage'
export { default as ArticleCard } from './components/ArticleCard'
export {
  articles,
  featuredArticle,
  findArticle,
  relatedArticles,
} from './data/articles.data'
