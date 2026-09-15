/**
 * Section index for a long policy. Sticky beside the text on desktop; a
 * collapsed <details> above it on small screens, so forty links never push the
 * document itself off the first screen.
 */
export default function TableOfContents({ sections, activeId }) {
  const links = (
    <ol className="flex flex-col gap-0.5">
      {sections.map((section, index) => {
        const isActive = section.id === activeId

        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`flex gap-2.5 rounded-md px-2.5 py-1.5 font-sans text-[12px] leading-[1.45] no-underline transition-colors ${
                isActive
                  ? 'bg-[rgba(33,199,176,0.08)] text-[#2ed1bd]'
                  : 'text-[#7c8184] hover:bg-white/[0.04] hover:text-[#b9bdc0]'
              }`}
            >
              <span className="w-[18px] shrink-0 text-right tabular-nums opacity-60">
                {index + 1}
              </span>
              <span>{section.title}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )

  return (
    <>
      {/* Mobile / tablet */}
      <details className="mb-8 rounded-[10px] border border-ink-line bg-surface xl:hidden">
        <summary className="cursor-pointer list-none px-4 py-3 font-sans text-[13px] font-medium text-[#c8cccf] marker:hidden">
          Contents
          <span className="float-right text-[#6f7477]">
            {sections.length} sections
          </span>
        </summary>

        <nav aria-label="Document sections" className="max-h-[320px] overflow-y-auto border-t border-ink-line p-2">
          {links}
        </nav>
      </details>

      {/* Desktop */}
      <nav
        aria-label="Document sections"
        className="sticky top-[90px] hidden max-h-[calc(100vh-130px)] overflow-y-auto pr-2 xl:block"
      >
        <p className="mb-3 px-2.5 font-sans text-[11px] font-semibold tracking-[0.1em] text-[#6f7477] uppercase">
          Contents
        </p>

        {links}
      </nav>
    </>
  )
}
