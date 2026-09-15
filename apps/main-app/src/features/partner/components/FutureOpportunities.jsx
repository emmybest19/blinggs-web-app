import { futureOpportunities } from '../data/partner.data'
import SectionHeading from './SectionHeading'

export default function FutureOpportunities() {
  return (
    <section className="box-border w-full border-t border-ink-soft bg-surface px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <SectionHeading
          title={futureOpportunities.title}
          subtitle={futureOpportunities.subtitle}
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {futureOpportunities.tracks.map((track) => (
            <article
              key={track.id}
              className="box-border flex flex-col rounded-xl border border-[#282828] bg-[#1c1c1c] px-6 py-7 transition-colors duration-250 hover:border-[#343434] sm:px-7 sm:py-8"
            >
              <h3 className="mb-2.5 text-[15px] leading-[1.25] font-bold tracking-[-0.01em] text-[#ededed] sm:text-[17px]">
                {track.title}
              </h3>

              <p className="font-sans text-[12px] leading-[1.75] text-[#878c90] sm:text-[13px]">
                {track.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
