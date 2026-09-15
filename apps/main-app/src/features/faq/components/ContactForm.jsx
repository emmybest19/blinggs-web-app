import { contactCopy, contactFields } from '../data/contact.data'
import { useContactForm } from '../hooks/useContactForm'

const field =
  'box-border w-full rounded-[9px] border bg-[#0f1011] px-4 font-sans text-[13px] text-[#e6e6e6] outline-none transition-colors placeholder:text-[#666b6d]'

export default function ContactForm() {
  const { values, errors, change, submit, isSubmitting, isSuccess, isError } =
    useContactForm()

  return (
    <div className="rounded-2xl border border-[#242424] bg-[#131313] p-6 sm:p-7 lg:p-8">
      <h2 className="mb-6 text-[18px] leading-[1.25] font-bold tracking-[-0.01em] text-[#f2f2f2] sm:text-[21px]">
        {contactCopy.formTitle}
      </h2>

      <form onSubmit={submit} noValidate className="flex flex-col gap-4">
        {contactFields.map((input) => {
          const id = `contact-${input.name}`
          const error = errors[input.name]
          const tone = error
            ? 'border-[#7f3535] focus:border-[#ff8080]'
            : 'border-[#2a2c2d] focus:border-[rgba(30,195,170,0.6)]'

          return (
            <div key={input.name}>
              <label
                htmlFor={id}
                className="mb-1.5 block font-sans text-[11.5px] font-medium text-[#9a9fa3]"
              >
                {input.label}
              </label>

              {input.type === 'textarea' ? (
                <textarea
                  id={id}
                  name={input.name}
                  rows={4}
                  value={values[input.name]}
                  onChange={change(input.name)}
                  placeholder={input.placeholder}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${id}-error` : undefined}
                  className={`${field} ${tone} resize-y py-3 leading-[1.6]`}
                />
              ) : (
                <input
                  id={id}
                  name={input.name}
                  type={input.type}
                  autoComplete={input.autoComplete}
                  value={values[input.name]}
                  onChange={change(input.name)}
                  placeholder={input.placeholder}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${id}-error` : undefined}
                  className={`${field} ${tone} h-11`}
                />
              )}

              {error && (
                <p
                  id={`${id}-error`}
                  className="mt-1.5 font-sans text-[11.5px] text-[#ff8080]"
                >
                  {error}
                </p>
              )}
            </div>
          )
        })}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-[9px] bg-brand font-sans text-[13px] font-semibold text-[#071312] transition-all duration-250 hover:-translate-y-px hover:bg-[#25d1bb] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {/* Reserved space so the panel does not jump when a message appears */}
      <div aria-live="polite" className="min-h-[20px]">
        {isSuccess && (
          <p className="mt-3 font-sans text-[12.5px] font-medium text-brand">
            Thanks — your message is with our support engineers.
          </p>
        )}

        {isError && (
          <p className="mt-3 font-sans text-[12.5px] text-[#ff8080]">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  )
}
