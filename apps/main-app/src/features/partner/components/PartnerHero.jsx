import { Link } from 'react-router-dom'

import { affiliateButton, waitlistButton } from '@shared/ui/ctaStyles'

import { partnerHero, partnerLinks } from '../data/partner.data'

export default function PartnerHero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-ink-deep px-4 pt-[70px] pb-12 xs:px-5 xs:pt-[80px] sm:px-8 sm:pt-[95px] sm:pb-14 lg:px-12 lg:pt-[110px] lg:pb-16 xl:px-20">
      {/* Glow — matches the home, features and about heroes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-120px] left-1/2 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.08)] blur-[80px] sm:h-[380px] sm:w-[620px] sm:blur-[95px] lg:h-[430px] lg:w-[820px] lg:blur-[110px]"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center justify-center rounded-[20px] border border-[rgba(16,190,165,0.16)] bg-[rgba(16,190,165,0.07)] px-3.5 py-1.5 text-[9px] font-semibold tracking-[0.1em] text-brand sm:text-[10px]">
          {partnerHero.badge}
        </span>

        <h1 className="max-w-[820px] text-[30px] leading-[1.15] font-bold tracking-[-0.03em] text-[#f4f4f4] xs:text-[36px] sm:text-[46px] lg:text-[56px] 2xl:text-[62px]">
          <span className="block">{partnerHero.title}</span>
          <span className="block">{partnerHero.accentTitle}</span>
        </h1>

        <p className="mt-5 max-w-[660px] font-sans text-[12px] leading-[1.75] text-[#8d9298] xs:text-[13px] sm:mt-6 sm:text-[15px]">
          {partnerHero.subtitle}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          <Link to={partnerLinks.apply} className={affiliateButton}>
            Apply as Partner Rep
          </Link>

          {/* Still a plain anchor — partner terms do not exist yet. */}
          <a href={partnerLinks.terms} className={waitlistButton}>
            Partner Terms
          </a>
        </div>
      </div>
    </section>
  )
}
