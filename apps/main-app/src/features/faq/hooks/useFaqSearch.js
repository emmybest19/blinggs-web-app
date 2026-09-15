import { useMemo, useState } from 'react'

import { faqGroups } from '../data/faqs.data'

/**
 * Filters the question groups by a free-text query, matching on both the
 * question and its answer. Groups with no surviving items drop out entirely, so
 * a category heading never sits above an empty list.
 */
export function useFaqSearch() {
  const [query, setQuery] = useState('')

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return faqGroups

    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          `${item.question} ${item.answer}`.toLowerCase().includes(needle)
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  const matchCount = useMemo(
    () => groups.reduce((count, group) => count + group.items.length, 0),
    [groups]
  )

  return {
    query,
    setQuery,
    groups,
    matchCount,
    isSearching: query.trim().length > 0,
  }
}
