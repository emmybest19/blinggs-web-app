import { articles } from '../data/articles.data'

/**
 * Data access for the blog feature. Today this reads from a local module;
 * when a backend lands only this file changes (return a promise and switch the
 * hooks to async).
 */

export function getArticles() {
  return articles
}

export function getArticleById(id) {
  const numericId = Number(id)
  if (Number.isNaN(numericId)) return undefined

  return articles.find((article) => article.id === numericId)
}
