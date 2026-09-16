/**
 * The panel every dashboard block sits in, and the inset box the two empty
 * states share. Exported as class strings as well as components so a block
 * that needs different padding can still match the rest.
 */
export const CARD =
  'box-border rounded-2xl border border-[#1b2430] bg-[#0f151d]'

export const INSET = 'rounded-xl border border-[#1b2430] bg-[#0b1118]'

export const CARD_TITLE =
  'text-[17px] leading-[1.25] font-bold tracking-[-0.01em] text-[#ededed]'

export const CARD_SUB = 'font-sans text-[12.5px] leading-[1.6] text-[#7f888f]'

export default function DashboardCard({ children, className = '' }) {
  return <section className={`${CARD} ${className}`}>{children}</section>
}
