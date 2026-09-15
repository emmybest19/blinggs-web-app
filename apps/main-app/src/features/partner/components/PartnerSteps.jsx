import { howItWorks } from '../data/partner.data'
import SectionHeading from './SectionHeading'

const CIRCLE = 'relative z-[1] flex size-8 items-center justify-center rounded-full border font-sans text-[12px] font-semibold tabular-nums'

export default function PartnerSteps() {
  return (
    <section className="box-border w-full border-t border-ink-soft bg-surface px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionHeading title={howItWorks.title} className="mb-10 sm:mb-14" />

        <div className="relative">
          {/*
            * The rail joining the three markers. It sits at the vertical
            * centre of a 32px circle and is inset by a sixth of the width at
            * each end, which is the centre of the first and last column.
            * Hidden when the steps stack.
            */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-4 right-[16.67%] left-[16.67%] hidden h-px bg-ink-line sm:block"
          />

          <ol className="grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-6">
            {howItWorks.steps.map((step, index) => {
              // The first step is the one a new partner is on, so it carries
              // the brand colour and the rest read as not-yet-reached.
              const isFirst = index === 0

              return (
                <li
                  key={step.id}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    className={`${CIRCLE} ${
                      isFirst
                        ? 'border-brand bg-[rgba(33,199,176,0.12)] text-brand'
                        : 'border-ink-line bg-[#1c1c1c] text-[#7c8185]'
                    }`}
                  >
                    {index + 1}
                  </span>

                  <h3 className="mt-4 text-[14px] leading-[1.25] font-bold tracking-[-0.01em] text-[#ededed] sm:text-[15px]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[280px] font-sans text-[11px] leading-[1.75] text-[#878c90] sm:text-[12px]">
                    {step.body}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
