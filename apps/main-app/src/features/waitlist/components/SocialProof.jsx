import avatarsRow from '@shared/assets/avatars-row.png'

import { waitlistCopy } from '../data/waitlist.copy'

export default function SocialProof() {
  return (
    <section className="box-border flex w-full flex-col items-center justify-center border-t border-ink-soft bg-ink-deep px-4 py-9 text-center sm:px-5 sm:py-10">
      <img
        src={avatarsRow}
        alt="Early Blingg waitlist members"
        className="mb-4 block h-[38px] w-auto object-contain sm:h-[42px]"
      />

      <p className="text-[14px] leading-[1.4] font-bold text-[#f0f0f0] sm:text-[15px]">
        {waitlistCopy.socialProof}
      </p>
    </section>
  )
}
