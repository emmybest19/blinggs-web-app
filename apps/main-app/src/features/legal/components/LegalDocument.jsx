import { cn } from '@shared/lib/cn'
import Reveal from '@shared/ui/Reveal'

import LegalBlocks from './LegalBlocks'

/**
 * Renders any legal document descriptor from ../data. Section numbers come from
 * position, so inserting a clause renumbers the rest automatically.
 *
 * A single centred column: the measure is capped at 760px, which is the point
 * where a line of this size stays comfortable to read.
 *
 * Section ids are still emitted, so deep links such as
 * /privacy-policy#data-retention keep working even though nothing on the page
 * links to them any more.
 */
export default function LegalDocument({ document: doc }) {
  return (
    <main className="box-border w-full max-w-full overflow-x-clip bg-ink-deep pb-16 sm:pb-20">
      {/* Header */}
      <Reveal>
        <header className="relative overflow-hidden border-b border-ink-soft px-4 pt-[70px] pb-10 xs:px-5 xs:pt-[80px] sm:px-8 sm:pt-[90px] sm:pb-12 lg:px-12 xl:px-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[-140px] left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.07)] blur-[90px]"
          />

          <div className="relative z-[1] mx-auto w-full max-w-[760px]">
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
      </Reveal>

      {/* Body */}
      <article className="mx-auto w-full max-w-[760px] px-4 pt-9 xs:px-5 sm:px-8 sm:pt-12 lg:px-0">
        {/* Intro */}
        {doc.intro?.length > 0 && (
          <Reveal once className="mb-12 border-b border-ink-soft pb-10">
            {doc.intro.map((text) => (
              <p
                key={text}
                className="mt-4 font-sans text-[13px] leading-[1.8] text-[#9a9fa3] first:mt-0 xs:text-sm sm:text-[15px]"
              >
                {text}
              </p>
            ))}
          </Reveal>
        )}

        {/*
          * Sections. `once` throughout: a policy is read top to bottom and
          * often scrolled back through, so clauses fade in and then stay.
          */}
        {doc.sections.map((section, index) => (
          <Reveal key={section.id} once>
            <section
              id={section.id}
              // Clears the sticky navbar when arrived at via a #hash link.
              //
              // The edge cases are spelled out rather than left to `first:` /
              // `last:`: each section is now an only child of its Reveal
              // wrapper, so those variants would match every one of them.
              className={cn(
                'scroll-mt-[84px] border-b border-ink-soft/70 py-8 sm:py-10',
                index === 0 && !doc.intro?.length && 'pt-0',
                index === doc.sections.length - 1 &&
                  !doc.closing &&
                  'border-b-0',
              )}
            >
              <h2 className="mb-4 flex gap-3 text-[16px] leading-[1.3] font-semibold tracking-[-0.01em] text-[#e8e8e8] sm:text-[19px]">
                <span className="shrink-0 font-sans text-[#2ca897] tabular-nums">
                  {index + 1}.
                </span>
                <span>{section.title}</span>
              </h2>

              <LegalBlocks blocks={section.blocks} />
            </section>
          </Reveal>
        ))}

        {/* Closing */}
        {doc.closing && (
          <Reveal once>
            <section className="mt-10 rounded-xl border border-ink-line bg-surface px-5 py-7 sm:px-7 sm:py-8">
              <h2 className="mb-4 text-[15px] font-semibold tracking-[-0.01em] text-[#e8e8e8] sm:text-[17px]">
                {doc.closing.title}
              </h2>

              <LegalBlocks blocks={doc.closing.blocks} />
            </section>
          </Reveal>
        )}
      </article>
    </main>
  )
}
