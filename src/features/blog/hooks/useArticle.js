import { useParams } from 'react-router-dom'

import { getArticleById } from '../api/articles'

/** Resolves the `:id` route param to an article, or `undefined` when missing. */
export function useArticle() {
  const { id } = useParams()

  return getArticleById(id)
}
