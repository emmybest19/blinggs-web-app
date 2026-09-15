import { waitlistCopy } from '../data/waitlist.copy'
import WaitlistForm from './WaitlistForm'

export default function WaitlistHero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-ink-deep px-[18px] py-[60px] sm:px-6 sm:py-20 lg:px-5 lg:py-[100px]">
      {/* Glow */}
      <div className="pointer-events-none absolute top-[-120px] left-1/2 h-[420px] w-[820px] -translate-x-1/2 [background:radial-gradient(ellipse,rgba(0,180,160,0.13)_0%,rgba(0,180,160,0.05)_35%,transparent_70%)]" />

      <div className="relative z-[2] flex w-full max-w-[760px] flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-[20px] border border-[rgba(16,190,165,0.14)] bg-[rgba(16,190,165,0.07)] px-3.5 py-1.5 text-[9px] font-semibold tracking-[0.09em] text-brand sm:text-[10px]">
          {waitlistCopy.badge}
        </div>

        <h1 className="mb-5 max-w-full text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-faint xs:text-[38px] sm:text-[46px] lg:text-[56px]">
          <span className="block">{waitlistCopy.title}</span>
          <span className="block">
            {waitlistCopy.titleLead}{' '}
            <span className="text-[#1fc7b0]">{waitlistCopy.titleAccent}</span>
          </span>
        </h1>

        <p className="mb-9 w-full max-w-[560px] text-[14px] leading-[1.65] font-normal text-[#888d91] sm:text-[16px] lg:text-[17px]">
          {waitlistCopy.subtitle}
        </p>

        <div className="w-full max-w-[560px]">
          <WaitlistForm />
        </div>

        <p className="mt-7 text-[12px] leading-[1.4] text-[#555b5e] sm:text-[13px]">
          {waitlistCopy.reassurance}
        </p>
      </div>
    </section>
  )
}
