import { useEffect, useRef, useState } from 'react'

/**
 * Copies text and reports "copied" for a couple of seconds so a button can
 * confirm it worked.
 *
 * `navigator.clipboard` is missing on insecure origins and in older browsers,
 * so a failure leaves `copied` false rather than throwing — the caller shows
 * its normal state and the user can still select the text by hand.
 */
export function useCopyToClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  // Without this, unmounting mid-countdown leaves a timer holding a setState
  // on a component that is gone.
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), resetAfter)
    } catch {
      setCopied(false)
    }
  }

  return { copied, copy }
}
