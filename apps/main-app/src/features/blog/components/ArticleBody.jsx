/**
 * Renders an article's numbered sections. Blocks use the same shape as the
 * legal documents, but this is a separate renderer on purpose: features do not
 * import from one another, and blog typography is looser than a contract's.
 */
const paragraph =
  'font-sans text-[13px] leading-[1.85] text-[#9a9fa3] sm:text-[14.5px]'

function Blocks({ blocks }) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`

    if (block.type === 'list') {
      return (
        <ul key={key} className="mt-4 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-[10px] size-1 shrink-0 rounded-full bg-[#5c6164]"
              />
              <span className={paragraph}>{item}</span>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={key} className={`${paragraph} mt-5 first:mt-0`}>
        {block.text}
      </p>
    )
  })
}

export default function ArticleBody({ article }) {
  if (!article.sections.length) {
    return (
      <div className="rounded-xl border border-ink-line bg-surface px-6 py-10 text-center">
        <p className="font-sans text-sm font-medium text-[#c8cccf]">
          This article is being written
        </p>
        <p className="mx-auto mt-2 max-w-[420px] font-sans text-[13px] leading-[1.7] text-[#7c8184]">
          {article.excerpt}
        </p>
      </div>
    )
  }

  return (
    <div>
      {article.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-[84px] border-b border-ink-soft py-9 first:pt-0 last:border-b-0 sm:py-11"
        >
          <h2 className="mb-5 text-[19px] leading-[1.3] font-bold tracking-[-0.01em] text-[#ededed] sm:text-[22px]">
            {index + 1}. {section.title}
          </h2>

          <Blocks blocks={section.blocks} />
        </section>
      ))}
    </div>
  )
}
