const DRAFT_STORAGE_KEY = 'article_draft'

/**
 * Draft persistence for the article editor. Currently backed by localStorage;
 * swap the bodies here when a real admin API exists.
 */

export function loadDraft() {
  try {
    const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveDraft(article) {
  window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(article))
}

export function clearDraft() {
  window.localStorage.removeItem(DRAFT_STORAGE_KEY)
}

export function publishArticle(article) {
  // TODO: replace with a POST to the articles endpoint once the API lands.
  console.log('PUBLISHED ARTICLE:', article)
  return article
}
