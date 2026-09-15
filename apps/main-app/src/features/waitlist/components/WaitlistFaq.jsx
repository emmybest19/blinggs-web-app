import { waitlistCopy } from '../data/waitlist.copy'
import { waitlistFaqs } from '../data/faqs.data'

export default function WaitlistFaq() {
  return (
    <section className="box-border flex w-full flex-col items-center border-t border-ink-soft bg-[#141414] px-4 py-16 sm:px-[18px] sm:py-20 lg:px-5 lg:py-24">
      <div className="mb-10 flex w-full flex-col items-center text-center sm:mb-12">
        <span className="mb-5 inline-flex items-center justify-center rounded-[20px] border border-[rgba(20,180,160,0.14)] bg-[rgba(20,180,160,0.06)] px-3.5 py-1.5 text-[9px] font-semibold tracking-[0.09em] text-[#20bca9] sm:text-[10px]">
          {waitlistCopy.faqBadge}
        </span>

        <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.02em] text-[#e5e5e5] xs:text-[30px] sm:text-[34px] lg:text-[40px]">
          {waitlistCopy.faqTitle}
        </h2>
      </div>

      <div className="flex w-full max-w-[760px] flex-col gap-4">
        {waitlistFaqs.map((faq) => (
          <article
            key={faq.id}
            className="box-border w-full overflow-hidden rounded-xl border border-ink-line bg-[#202020] px-5 py-5 transition-colors duration-250 hover:border-[#323232] hover:bg-[#222222] sm:px-6 sm:py-6"
          >
            <div className="flex w-full items-start justify-between gap-5">
              <h3 className="flex-1 text-[14px] leading-[1.4] font-semibold text-[#d8d8d8] sm:text-[15px]">
                {faq.question}
              </h3>

              <span
                aria-hidden="true"
                className="shrink-0 text-[18px] leading-none font-normal text-[#898989]"
              >
                +
              </span>
            </div>

            <p className="mt-3 max-w-[640px] text-[12px] leading-[1.65] font-normal text-[#747474] sm:text-[13px]">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
