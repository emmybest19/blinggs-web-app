import { useMemo } from 'react'

import { useActiveSection } from '../hooks/useActiveSection'
import LegalBlocks from './LegalBlocks'
import TableOfContents from './TableOfContents'

/**
 * Renders any legal document descriptor from ../data. Section numbers come from
 * position, so inserting a clause renumbers the rest automatically.
 */
export default function LegalDocument({ document: doc }) {
  const sectionIds = useMemo(
    () => doc.sections.map((section) => section.id),
    [doc.sections]
  )

  const activeId = useActiveSection(sectionIds)

  return (
    <main className="box-border w-full max-w-full overflow-x-clip bg-ink-deep pb-16 sm:pb-20">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-ink-soft px-4 pt-[70px] pb-10 xs:px-5 xs:pt-[80px] sm:px-8 sm:pt-[90px] sm:pb-12 lg:px-12 xl:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-140px] left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.07)] blur-[90px]"
        />

        <div className="relative z-[1] mx-auto w-full max-w-[1180px]">
          <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.12em] text-[#2ca897] uppercase sm:text-[11px]">
            Legal
          </p>

          <h1 className="text-[27px] leading-[1.15] font-bold tracking-[-0.03em] text-[#f1f1f1] xs:text-[32px] sm:text-[42px] lg:text-[52px]">
            {doc.title}
          </h1>

          {doc.subtitle && (
            <p className="mt-4 max-w-[620px] font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[15px]">
              {doc.subtitle}
            </p>
          )}

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            <div className="flex items-baseline gap-2">
              <dt className="font-sans text-[11px] text-[#6f7477]">
                Effective date
              </dt>
              <dd className="font-sans text-[12px] font-medium text-[#b9bdc0] tabular-nums sm:text-[13px]">
                {doc.effectiveDate}
              </dd>
            </div>

            <div className="flex items-baseline gap-2">
              <dt className="font-sans text-[11px] text-[#6f7477]">
                Last updated
              </dt>
              <dd className="font-sans text-[12px] font-medium text-[#b9bdc0] tabular-nums sm:text-[13px]">
                {doc.lastUpdated}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto w-full max-w-[1180px] px-4 pt-9 xs:px-5 sm:px-8 sm:pt-12 lg:px-12 xl:px-20">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-14">
          <div className="w-full shrink-0 xl:w-[260px]">
            <TableOfContents sections={doc.sections} activeId={activeId} />
          </div>

          <article className="w-full min-w-0 max-w-[760px]">
            {/* Intro */}
            {doc.intro?.length > 0 && (
              <div className="mb-12 border-b border-ink-soft pb-10">
                {doc.intro.map((text) => (
                  <p
                    key={text}
                    className="mt-4 font-sans text-[13px] leading-[1.8] text-[#9a9fa3] first:mt-0 xs:text-sm sm:text-[15px]"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}

            {/* Sections */}
            {doc.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                // Clears the sticky navbar when jumped to from the contents.
                className="scroll-mt-[84px] border-b border-ink-soft/70 py-8 first:pt-0 last:border-b-0 sm:py-10"
              >
                <h2 className="mb-4 flex gap-3 text-[16px] leading-[1.3] font-semibold tracking-[-0.01em] text-[#e8e8e8] sm:text-[19px]">
                  <span className="shrink-0 font-sans text-[#2ca897] tabular-nums">
                    {index + 1}.
                  </span>
                  <span>{section.title}</span>
                </h2>

                <div className="xl:pl-[30px]">
                  <LegalBlocks blocks={section.blocks} />
                </div>
              </section>
            ))}

            {/* Closing */}
            {doc.closing && (
              <section className="mt-10 rounded-xl border border-ink-line bg-[#141414] px-5 py-7 sm:px-7 sm:py-8">
                <h2 className="mb-4 text-[15px] font-semibold tracking-[-0.01em] text-[#e8e8e8] sm:text-[17px]">
                  {doc.closing.title}
                </h2>

                <LegalBlocks blocks={doc.closing.blocks} />
              </section>
            )}
          </article>
        </div>
      </div>
    </main>
  )
}
