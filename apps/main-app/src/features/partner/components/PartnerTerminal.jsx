import { affiliateButton } from '@shared/ui/ctaStyles'

import { partnerLinks, terminal } from '../data/partner.data'
import SectionHeading from './SectionHeading'

const PANEL =
  'box-border rounded-xl border border-[#242424] bg-[#151515] px-5 py-5 sm:px-6'

export default function PartnerTerminal() {
  const { milestone, placement } = terminal

  return (
    <section className="box-border w-full border-t border-ink-soft bg-surface px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionHeading
          title={terminal.title}
          subtitle={terminal.subtitle}
          className="mb-10 sm:mb-14"
        />

        {/*
          * A preview of the terminal, not the terminal itself — every figure
          * is sample data from the design. The real thing lives behind the
          * login below.
          */}
        <div className="box-border rounded-2xl border border-[#242424] bg-[#111111] p-4 sm:p-6">
          <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {terminal.stats.map((stat) => (
              <div key={stat.id} className={PANEL}>
                <dt className="font-sans text-[9px] font-semibold tracking-[0.1em] text-[#6f7477] uppercase">
                  {stat.label}
                </dt>

                <dd
                  className={`mt-2 text-[19px] leading-none font-bold tracking-[-0.02em] tabular-nums sm:text-[22px] ${
                    stat.accent ? 'text-brand' : 'text-[#ededed]'
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:gap-4 lg:grid-cols-2">
            {/* Placement */}
            <div className={PANEL}>
              <h3 className="mb-4 font-sans text-[11px] font-semibold text-[#cfcfcf] sm:text-[12px]">
                {placement.title}
              </h3>

              <dl className="flex flex-col gap-2.5">
                {placement.rows.map((row) => (
                  <div
                    key={row.id}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <dt className="font-sans text-[10px] text-[#7c8185] sm:text-[11px]">
                      {row.label}
                    </dt>

                    <dd className="font-sans text-[10px] font-semibold text-brand tabular-nums sm:text-[11px]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Milestone */}
            <div className={`${PANEL} flex flex-col`}>
              <h3 className="mb-4 font-sans text-[11px] font-semibold text-[#cfcfcf] sm:text-[12px]">
                {milestone.title}
              </h3>

              <div className="flex items-baseline justify-between gap-3">
                <span className="font-sans text-[10px] text-[#7c8185] sm:text-[11px]">
                  {milestone.target}
                </span>

                <span className="font-sans text-[10px] font-semibold text-[#b9bdc0] tabular-nums sm:text-[11px]">
                  {milestone.percent}% Complete
                </span>
              </div>

              {/* Width comes off the same number as the label, so the bar and
                * the percentage cannot drift apart. */}
              <div
                role="progressbar"
                aria-valuenow={milestone.percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={milestone.target}
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#242424]"
              >
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${milestone.percent}%` }}
                />
              </div>

              {/* Stubbed — the terminal does not exist yet. See partnerLinks. */}
              <a
                href={partnerLinks.portal}
                className={`${affiliateButton} mt-auto w-full sm:mt-6`}
              >
                {milestone.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
