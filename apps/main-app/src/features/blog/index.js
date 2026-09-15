/**
 * Public API of the `blog` feature.
 *
 * `/blog` renders BlogPage (the index) and `/blog/:slug` renders ArticlePage.
 */
export { default as BlogPage } from './pages/BlogPage'
export { default as ArticlePage } from './pages/ArticlePage'
export { default as ArticleCard } from './components/ArticleCard'
export {
  articles,
  featuredArticle,
  findArticle,
  listedArticles,
  relatedArticles,
} from './data/articles.data'
