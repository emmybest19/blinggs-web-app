import { useEffect, useState } from 'react'

/**
 * Tracks which section heading is currently at the top of the viewport, so the
 * table of contents can highlight the reader's place in a long document.
 *
 * `ids` must be referentially stable — memoise it in the caller, or the effect
 * re-subscribes on every render.
 */
export function useActiveSection(ids, offset = 140) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!headings.length) return

    const update = () => {
      // The active section is the last one whose top has passed the offset.
      let current = headings[0].id

      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > offset) break
        current = heading.id
      }

      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return activeId
}
