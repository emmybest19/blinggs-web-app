import benefitIcon from '@shared/assets/how-star.png'

import { waitlistBenefits } from '../data/benefits.data'

export default function BenefitsGrid() {
  return (
    <section className="box-border w-full border-t border-b border-[#181818] bg-[#141414] px-[18px] py-10 sm:px-7 sm:py-12 lg:px-10 lg:py-14 xl:px-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {waitlistBenefits.map((benefit) => (
          <article
            key={benefit.id}
            className="box-border flex flex-col items-start rounded-xl border border-[#282828] bg-[#1c1c1c] px-6 py-7 transition-colors duration-250 hover:border-[#343434] sm:px-7 sm:py-8"
          >
            <img
              src={benefitIcon}
              alt=""
              className="mb-5 size-[26px] object-contain"
            />

            <h2 className="mb-3 text-[17px] leading-[1.3] font-semibold text-[#dedede] sm:text-[18px]">
              {benefit.title}
            </h2>

            <p className="text-[13px] leading-[1.65] font-normal text-[#777c80]">
              {benefit.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
