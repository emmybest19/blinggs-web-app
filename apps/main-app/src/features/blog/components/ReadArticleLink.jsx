/**
 * The "Read Article →" affordance. A <span>, not an <a>: every place it appears
 * the whole card is already a link, and nesting an anchor inside an anchor is
 * invalid. The arrow nudges on card hover via the parent's `group`.
 */
export default function ReadArticleLink({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-brand ${className}`}
    >
      Read Article
      <span
        aria-hidden="true"
        className="transition-transform duration-250 group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </span>
  )
}
