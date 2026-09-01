/**
 * Shared CTA button classes. Previously the global `.btn-waitlist` /
 * `.btn-affiliate` rules, which both the navbar and the home hero relied on.
 */
const base =
  'inline-flex items-center justify-center text-center whitespace-nowrap box-border transition-all duration-250 ' +
  'text-[0.48rem] rounded-[4px] px-1 py-[5px] ' +
  'min-[320px]:text-[0.53rem] min-[320px]:rounded-[5px] min-[320px]:px-[5px] min-[320px]:py-[6px] min-[320px]:tracking-[-0.01em] ' +
  'xs:text-[0.62rem] xs:rounded-md xs:px-2 xs:py-[7px] xs:tracking-normal ' +
  'min-[480px]:text-[0.68rem] min-[480px]:px-[10px] min-[480px]:py-2 ' +
  'md:text-[0.75rem] md:rounded-[7px] md:px-[13px] ' +
  'min-[768px]:text-[0.8rem] min-[768px]:rounded-lg min-[768px]:px-[15px] min-[768px]:py-[9px] ' +
  'min-[1024px]:text-[0.84rem] min-[1024px]:px-[17px] ' +
  '2xl:text-[0.9rem] 2xl:px-[22px] 2xl:py-[10px] ' +
  '3xl:text-[0.95rem] 3xl:px-[25px] 3xl:py-[11px]'

export const waitlistButton = `${base} border border-white/20 bg-transparent font-medium text-white hover:border-white/40 hover:bg-white/5`

export const affiliateButton = `${base} border-none bg-[#00D4AB] font-semibold text-black hover:-translate-y-px hover:bg-[#00b894]`

export const buttonGroup =
  'flex min-w-0 shrink items-center gap-[2px] min-[320px]:gap-[3px] xs:gap-[5px] min-[480px]:gap-[6px] md:gap-2 min-[768px]:gap-[9px] min-[1024px]:gap-[10px] 2xl:gap-[14px] 3xl:gap-4'
