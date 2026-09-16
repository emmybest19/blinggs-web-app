import {
  PAYOUT_RATE,
  dashboardCopy,
  payoutOf,
} from '../data/dashboard.data'
import { CARD, CARD_SUB, CARD_TITLE } from './DashboardCard'
import { SUBMIT } from './PortalField'

export default function ClaimReward({ partner }) {
  // Nothing to withdraw until some points exist, so the button says so rather
  // than opening a flow that would immediately fail.
  const hasPoints = partner.points > 0

  return (
    <section className={`${CARD} px-6 py-6 sm:px-7`}>
      <h2 className={CARD_TITLE}>{dashboardCopy.claimTitle}</h2>

      <p className={`${CARD_SUB} mt-2`}>{dashboardCopy.claimSubtitle}</p>

      <div className="mt-5 rounded-xl border border-[rgba(33,199,176,0.3)] bg-[rgba(33,199,176,0.06)] px-5 py-5">
        <p className="font-sans text-[10px] font-semibold tracking-[0.1em] text-brand uppercase">
          {dashboardCopy.payoutLabel}
        </p>

        <p className="mt-2.5 text-[28px] leading-none font-bold tracking-[-0.02em] text-white tabular-nums">
          {payoutOf(partner.points)}
        </p>

        <p className="mt-2.5 font-sans text-[11.5px] text-[#7f888f]">
          Calculated at {PAYOUT_RATE.points} BP = ₦{PAYOUT_RATE.naira}
        </p>
      </div>

      {/* Stubbed — there is no withdrawal endpoint. See partnerLinks. */}
      <button type="button" disabled={!hasPoints} className={`${SUBMIT} h-12`}>
        {dashboardCopy.withdrawLabel}
      </button>
    </section>
  )
}
