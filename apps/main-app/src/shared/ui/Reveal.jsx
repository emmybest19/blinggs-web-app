// `m` rather than `motion`, paired with the LazyMotion in MainLayout: the full
// `motion` component pulls every framer feature into the bundle, while `m`
// takes only the ones LazyMotion was given.
//
// Aliased to a capital because the shared ESLint config has no
// eslint-plugin-react, so `no-unused-vars` cannot see a name that is only
// referenced from JSX, and exempts capitalised names to compensate.
import { m as M, useReducedMotion } from 'framer-motion'

/**
 * Fades its children in as they scroll into view and back out as they leave.
 *
 * `once: false` is the default and the whole point — a section re-animates
 * every time it crosses the viewport edge, rather than latching on after the
 * first reveal. Pass `once` for long-form prose, where fading the text back
 * out as the reader scrolls up through it is worse than no effect at all.
 *
 * `amount: 'some'` rather than a fraction: a section taller than the viewport
 * can never have 30% of itself on screen at once, so a fractional threshold
 * would leave the long legal pages permanently invisible. The negative
 * `margin` shrinks the trigger box instead, so the fade starts just inside the
 * viewport rather than exactly at its edge.
 *
 * Sections built around a text input are deliberately left unwrapped —
 * WaitlistHero, FaqHeader, ContactSection and NewsletterCta. On mobile the
 * on-screen keyboard resizes the viewport, which can drag a focused field out
 * of the trigger box and fade it out mid-typing.
 */
const MARGIN = '-80px 0px -80px 0px'

export default function Reveal({
  children,
  className,
  once = false,
  delay = 0,
  y = 24,
  duration = 0.55,
}) {
  // Honours the OS "reduce motion" setting: no transform, no fade, no
  // observer — the content is simply always there.
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <M.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 'some', margin: MARGIN }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M.div>
  )
}
