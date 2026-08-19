import { useState } from 'react'

import {
  loadDraft,
  publishArticle as publishArticleRequest,
  saveDraft,
} from '../api/articleDrafts'

export const EMPTY_ARTICLE = {
  title: '',
  excerpt: '',
  category: 'Fintech',
  image: null,
  authorName: '',
  authorRole: '',
  authorInitials: '',
  content: '',
}

/** Owns the editor's form state and its persistence side effects. */
export function useArticleDraft() {
  const [article, setArticle] = useState(() => loadDraft() ?? EMPTY_ARTICLE)

  const updateField = (event) => {
    const { name, value } = event.target
    setArticle((previous) => ({ ...previous, [name]: value }))
  }

  const updateImage = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setArticle((previous) => ({
      ...previous,
      image: URL.createObjectURL(file),
    }))
  }

  const persistDraft = () => {
    saveDraft(article)
    alert('Draft saved')
  }

  const publish = () => {
    publishArticleRequest(article)
    alert('Article published')
  }

  return { article, updateField, updateImage, persistDraft, publish }
}
