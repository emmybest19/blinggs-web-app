const FAQS = [
  {
    q: 'When will Blingg launch publicly?',
    a: 'We are currently operating in a Private Beta to refine core transaction mechanics. Our general public launch on iOS and Android is planned for late Q2 2026.',
  },
  {
    q: 'Is it completely free to join the waitlist?',
    a: 'Yes. Joining the waitlist and participating in our pre-launch community program is entirely free and guarantees early benefits.',
  },
  {
    q: 'What platforms will be supported?',
    a: 'Blingg will release native applications built specifically for Apple iOS through the App Store and Google Android through the Play Store.',
  },
]

export default function HowItWorksFaq() {
  return (
    <section className="box-border flex min-h-[620px] w-full flex-col items-center border-t border-ink-soft bg-[#141414] px-4 pt-[60px] pb-[70px] sm:px-[18px] sm:pt-[70px] sm:pb-20 lg:px-5 lg:pt-[90px] lg:pb-[100px]">
      <div className="mb-8 flex w-full flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center justify-center rounded-[20px] border border-[rgba(20,180,160,0.12)] bg-[rgba(20,180,160,0.06)] px-[10px] py-1 text-[8px] font-semibold tracking-[0.08em] text-[#20bca9]">
          QUESTIONS
        </span>

        <h2 className="text-xl leading-[1.2] font-semibold tracking-[-0.02em] text-[#e5e5e5] xs:text-[22px] sm:text-[25px] lg:text-[28px]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex w-full max-w-[620px] flex-col gap-[10px]">
        {FAQS.map((faq) => (
          <div
            key={faq.q}
            className="box-border w-full overflow-hidden rounded-[10px] border border-ink-line bg-[#202020] transition-all duration-250 hover:border-[#323232] hover:bg-[#222222]"
          >
            <div className="box-border flex min-h-12 w-full items-center justify-between gap-[14px] px-[14px] pt-3 pb-1.5 text-[8.5px] leading-[1.4] font-semibold text-[#d8d8d8] xs:text-[9px] sm:gap-5 sm:px-[18px] sm:pt-[14px] sm:text-[10px]">
              <span className="flex-1">{faq.q}</span>
              <span className="flex size-[18px] shrink-0 items-center justify-center text-[15px] leading-none font-normal text-[#898989]">
                +
              </span>
            </div>

            <div className="box-border w-full px-[14px] pb-3 sm:px-[18px] sm:pb-[14px]">
              <p className="max-w-[540px] text-[8.5px] leading-[1.6] font-normal text-[#747474] sm:text-[9px]">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
