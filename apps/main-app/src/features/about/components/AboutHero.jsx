import { aboutCopy } from '../data/about.data'

export default function AboutHero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-ink-deep px-4 pt-[70px] pb-12 xs:px-5 xs:pt-[80px] sm:px-8 sm:pt-[95px] sm:pb-16 lg:px-12 lg:pt-[110px] lg:pb-20 xl:px-20">
      {/* Glow — matches the home and features heroes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-120px] left-1/2 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.08)] blur-[80px] sm:h-[380px] sm:w-[620px] sm:blur-[95px] lg:h-[430px] lg:w-[820px] lg:blur-[110px]"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[860px] flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center justify-center rounded-[20px] border border-[rgba(16,190,165,0.16)] bg-[rgba(16,190,165,0.07)] px-3.5 py-1.5 text-[9px] font-semibold tracking-[0.1em] text-brand sm:text-[10px]">
          {aboutCopy.badge}
        </span>

        <h1 className="max-w-[700px] text-[32px] leading-[1.15] font-bold tracking-[-0.03em] text-[#f4f4f4] xs:text-[38px] sm:text-[48px] lg:text-[58px] 2xl:text-[66px]">
          {aboutCopy.title}
        </h1>

        <p className="mt-5 max-w-[660px] font-sans text-[13px] leading-[1.75] text-[#8d9298] xs:text-sm sm:mt-6 sm:text-[16px] lg:text-[17px]">
          {aboutCopy.lead}
        </p>
      </div>
    </section>
  )
}
