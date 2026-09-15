import { partnerVision } from '../data/partner.data'

export default function PartnerVision() {
  return (
    <section className="box-border w-full border-t border-ink-soft bg-ink-deep px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        <h2 className="text-[24px] leading-[1.2] font-bold tracking-[-0.03em] text-[#f1f1f1] xs:text-[28px] sm:text-[34px] lg:text-[40px]">
          {partnerVision.title}
        </h2>

        <p className="mt-5 font-sans text-[12px] leading-[1.8] text-[#8d9298] sm:mt-6 sm:text-[15px]">
          {partnerVision.body}
        </p>
      </div>
    </section>
  )
}
