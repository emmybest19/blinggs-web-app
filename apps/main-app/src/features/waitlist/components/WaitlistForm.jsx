import { waitlistCopy } from '../data/waitlist.copy'
import { useWaitlistSignup } from '../hooks/useWaitlistSignup'

export default function WaitlistForm() {
  const { email, changeEmail, submit, status, error, isSubmitting, isSuccess } =
    useWaitlistSignup()

  return (
    <div className="w-full">
      <form
        onSubmit={submit}
        noValidate
        className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3"
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>

        <input
          id="waitlist-email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => changeEmail(event.target.value)}
          placeholder={waitlistCopy.emailPlaceholder}
          aria-invalid={status === 'error'}
          aria-describedby={error ? 'waitlist-error' : undefined}
          className="box-border h-11 w-full max-w-[340px] rounded-[9px] border border-[#292b2c] bg-[#1a1b1c] px-4 text-[13px] text-[#e6e6e6] outline-none transition-colors placeholder:text-[#666b6d] focus:border-[rgba(30,195,170,0.6)] sm:w-[340px]"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 w-full max-w-[340px] items-center justify-center rounded-[9px] bg-brand-dark px-6 text-[13px] font-semibold text-[#071312] transition-all duration-250 hover:-translate-y-px hover:bg-[#25d1bb] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
        >
          {isSubmitting ? 'Joining…' : waitlistCopy.submitLabel}
        </button>
      </form>

      {/* Status messages sit below the row so the layout never shifts sideways */}
      <div aria-live="polite" className="min-h-[20px]">
        {error && (
          <p
            id="waitlist-error"
            className="mt-3 text-[13px] leading-[1.4] text-[#ff8080]"
          >
            {error}
          </p>
        )}

        {isSuccess && (
          <p className="mt-3 text-[13px] leading-[1.4] font-medium text-brand">
            You&apos;re on the list — we&apos;ll be in touch before launch.
          </p>
        )}
      </div>
    </div>
  )
}
