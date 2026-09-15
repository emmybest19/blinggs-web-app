import { useNewsletterSignup } from '../hooks/useNewsletterSignup'

export default function NewsletterCta() {
  const { email, changeEmail, submit, status, error, isSubmitting, isSuccess } =
    useNewsletterSignup()

  return (
    <section className="px-4 pt-14 xs:px-5 sm:px-8 sm:pt-16 lg:px-12 xl:px-20">
      <div className="mx-auto w-full max-w-[1180px] rounded-2xl border border-[#242424] bg-[#131313] px-6 py-9 sm:px-9 sm:py-11 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="min-w-0 lg:max-w-[460px]">
            <h2 className="text-[22px] leading-[1.2] font-bold tracking-[-0.02em] text-[#f2f2f2] sm:text-[27px]">
              Stay in the loop
            </h2>

            <p className="mt-3 font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[14px]">
              Get notified when we publish new deep-dives into peer-to-peer
              security, crypto rates, and mutual finance mechanics.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[460px]">
            <form
              onSubmit={submit}
              noValidate
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                name="email"
                value={email}
                onChange={(event) => changeEmail(event.target.value)}
                placeholder="Enter your professional email..."
                aria-invalid={status === 'error'}
                aria-describedby={error ? 'newsletter-error' : undefined}
                className="box-border h-11 w-full flex-1 rounded-[9px] border border-[#2a2c2d] bg-[#0f1011] px-4 font-sans text-[13px] text-[#e6e6e6] outline-none transition-colors placeholder:text-[#666b6d] focus:border-[rgba(30,195,170,0.6)]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-[9px] bg-brand px-6 font-sans text-[13px] font-semibold text-[#071312] transition-all duration-250 hover:-translate-y-px hover:bg-[#25d1bb] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>

            {/* Reserved space so the panel does not jump when a message appears */}
            <div aria-live="polite" className="min-h-[20px]">
              {error && (
                <p
                  id="newsletter-error"
                  className="mt-3 font-sans text-[12.5px] text-[#ff8080]"
                >
                  {error}
                </p>
              )}

              {isSuccess && (
                <p className="mt-3 font-sans text-[12.5px] font-medium text-brand">
                  You&apos;re subscribed — we&apos;ll be in touch.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
