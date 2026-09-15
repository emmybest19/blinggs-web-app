import { aboutCopy, pillars } from '../data/about.data'

export default function Pillars() {
  return (
    <section className="box-border w-full border-t border-b border-ink-soft bg-surface px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* The principle the whole product is organised around */}
        <div className="mb-11 flex flex-col items-center text-center sm:mb-14">
          <p className="max-w-[520px] font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[15px]">
            {aboutCopy.principleIntro}
          </p>

          <p className="mt-4 text-[20px] leading-[1.3] font-bold tracking-[-0.02em] text-[#2ed1bd] xs:text-[24px] sm:text-[30px] lg:text-[36px]">
            {aboutCopy.principle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="box-border flex flex-col rounded-xl border border-[#282828] bg-[#1c1c1c] px-6 py-7 transition-colors duration-250 hover:border-[#343434] sm:px-7 sm:py-8"
            >
              <span className="mb-5 flex size-8 items-center justify-center rounded-lg bg-[rgba(33,199,176,0.1)] font-sans text-[12px] font-semibold text-brand tabular-nums">
                {index + 1}
              </span>

              <h2 className="mb-2.5 text-[19px] leading-[1.25] font-bold tracking-[-0.01em] text-[#ededed] sm:text-[21px]">
                {pillar.word}
              </h2>

              <p className="font-sans text-[13px] leading-[1.75] text-[#878c90] sm:text-sm">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-11 max-w-[720px] text-center font-sans text-[13px] leading-[1.8] text-[#8d9298] sm:mt-14 sm:text-[15px]">
          {aboutCopy.unified}
        </p>
      </div>
    </section>
  )
}
