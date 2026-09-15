import { Link } from 'react-router-dom'

import { aboutCopy } from '../data/about.data'

export default function Vision() {
  return (
    <section className="relative w-full overflow-hidden bg-ink-deep px-4 py-16 xs:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.06)] blur-[100px]"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        <h2 className="text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-[#f1f1f1] xs:text-[28px] sm:text-[34px] lg:text-[40px]">
          {aboutCopy.visionTitle}
        </h2>

        <div className="mt-6">
          {aboutCopy.vision.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 font-sans text-[13px] leading-[1.8] text-[#8d9298] first:mt-0 xs:text-sm sm:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-10 text-[15px] leading-[1.4] font-bold tracking-[-0.01em] text-[#2ed1bd] sm:text-[18px]">
          {aboutCopy.tagline}
        </p>

        {/*
          * Not in the supplied copy — added so the page does not dead-end.
          * Delete this Link if About should stay purely editorial.
          */}
        <Link
          to="/waitlist"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-[9px] bg-brand-dark px-7 font-sans text-[13px] font-semibold text-[#071312] no-underline transition-all duration-250 hover:-translate-y-px hover:bg-[#25d1bb]"
        >
          Join the waitlist
        </Link>
      </div>
    </section>
  )
}
