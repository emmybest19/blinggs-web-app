import { Link } from 'react-router-dom'

export default function WorksHero() {
  return (
    <section className="box-content relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-ink-deep px-[18px] py-[50px] sm:px-6 sm:py-[60px] lg:w-[96.5%] lg:px-5 lg:py-[70px]">
      {/* Glow */}
      <div className="pointer-events-none absolute top-[-80px] left-1/2 h-[350px] w-[650px] -translate-x-1/2 [background:radial-gradient(ellipse,rgba(0,180,160,0.12)_0%,rgba(0,180,160,0.05)_35%,transparent_70%)]" />

      <div className="relative z-[2] flex w-full max-w-[620px] flex-col items-center text-center">
        <div className="mb-[18px] inline-flex items-center justify-center rounded-[20px] border border-[rgba(16,190,165,0.12)] bg-[rgba(16,190,165,0.07)] px-3 py-[5px] text-[8px] font-semibold tracking-[0.08em] text-brand">
          EARLY ACCESS PROGRAM
        </div>

        <h1 className="mb-[18px] max-w-full text-[30px] leading-[1.2] font-bold tracking-[-0.02em] text-faint xs:text-4xl sm:max-w-[600px] sm:text-[46px] lg:text-[56px] xl:text-[70px]">
          <span className="inline">Be the first to </span>
          <span>
            {' '}
            experience <span className="ml-2 text-[#1fc7b0]">Blingg</span>
          </span>
        </h1>

        <p className="mt-[10px] mb-6 w-full max-w-[520px] text-xs leading-[1.7] font-normal text-[#888d91] xs:text-[13px] sm:text-[15px]">
          Join 10,000+ people already on the waitlist. Get early access to the
          super app that combines messaging, payments, and group savings.
        </p>

        <div className="mt-[15px] flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2">
          <input
            type="text"
            placeholder="Enter your email address......"
            className="box-border h-10 w-full max-w-[320px] rounded-[7px] border border-[#292b2c] bg-[#1a1b1c] px-[14px] text-[10px] text-[#e6e6e6] outline-none placeholder:text-[#666b6d] focus:border-[rgba(30,195,170,0.6)] xs:h-[42px] sm:w-[320px]"
          />

          <Link
            to="/affiliate"
            className="inline-flex h-10 w-full max-w-[224px] items-center justify-center rounded-[7px] bg-brand-dark px-[14px] text-[10px] font-semibold text-[#071312] no-underline transition-all duration-250 hover:-translate-y-px hover:bg-[#25d1bb] xs:h-[42px] xs:px-[18px] sm:w-auto"
          >
            Join Waitlist
          </Link>
        </div>

        <br />

        <p className="mt-[18px] text-xs leading-[1.4] text-[#555b5e] sm:text-[13px]">
          No spam. Unsucribe anytime.
        </p>
      </div>
    </section>
  )
}
