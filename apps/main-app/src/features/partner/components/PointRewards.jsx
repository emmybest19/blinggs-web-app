import { pointRewards } from '../data/partner.data'
import SectionHeading from './SectionHeading'

export default function PointRewards() {
  return (
    <section className="box-border w-full border-t border-ink-soft bg-ink-deep px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionHeading
          title={pointRewards.title}
          subtitle={pointRewards.subtitle}
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {pointRewards.cards.map((card) => (
            <article
              key={card.id}
              className="box-border flex flex-col rounded-xl border border-[#282828] bg-[#1c1c1c] px-6 py-7 sm:px-7 sm:py-8"
            >
              <h3 className="mb-3 text-[17px] leading-[1.25] font-bold tracking-[-0.01em] text-[#ededed] sm:text-[19px]">
                {card.title}
              </h3>

              <p className="font-sans text-[12px] leading-[1.75] text-[#878c90] sm:text-[13px]">
                {card.body}
              </p>

              {/* The headline figure, pushed to the card foot so both cards
                * align it even when the bodies differ in length. */}
              <div className="mt-auto flex flex-wrap items-baseline gap-x-2.5 gap-y-1 pt-7">
                <span className="text-[26px] leading-none font-bold tracking-[-0.02em] text-brand sm:text-[30px]">
                  {card.value}
                </span>

                <span className="font-sans text-[10px] text-[#7c8185] sm:text-[11px]">
                  {card.caption}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
