/**
 * Shared input styling for the portal screens.
 *
 * Exported as class strings rather than a wrapper component: the sign-in
 * passcode field needs a button layered inside it, which a component that owns
 * its own markup would get in the way of.
 */
export const FIELD =
  'box-border w-full rounded-[10px] border bg-[#111a25] px-4 font-sans text-[14px] text-[#e9edf1] outline-none transition-colors placeholder:text-[#5f6b78]'

export const FIELD_OK = 'border-[#1d2938] focus:border-[rgba(30,195,170,0.65)]'

export const FIELD_BAD = 'border-[#7f3535] focus:border-[#ff8080]'

export const LABEL = 'mb-2 block font-sans text-[13px] font-medium text-[#c3cad1]'

export const ERROR = 'mt-2 font-sans text-[12px] text-[#ff8080]'

export const SUBMIT =
  'mt-2 inline-flex h-[54px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#00D4AB] font-sans text-[15px] font-bold text-[#071312] transition-all duration-250 hover:-translate-y-px hover:bg-[#00b894] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'
