import { BONUS_TARGET, bonusMessage, dashboardCopy } from '../data/dashboard.data'
import { CARD, CARD_SUB } from './DashboardCard'

export default function BonusProgress({ partner }) {
  const { activations } = partner

  // Clamped so an over-target partner cannot push the fill past the track.
  const percent = Math.min((activations / BONUS_TARGET) * 100, 100)

  return (
    <section className={`${CARD} px-6 py-6 sm:px-7`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-[16px] leading-[1.25] font-bold tracking-[-0.01em] text-[#ededed]">
          {dashboardCopy.bonusTitle}
        </h2>

        <span className="font-sans text-[12.5px] text-[#8b949c] tabular-nums">
          {activations} / {BONUS_TARGET} Wallet Activations
        </span>
      </div>

      {/* Width comes off the same number as the label, so the bar and the
        * count cannot drift apart. */}
      <div
        role="progressbar"
        aria-valuenow={activations}
        aria-valuemin={0}
        aria-valuemax={BONUS_TARGET}
        aria-label={dashboardCopy.bonusTitle}
        className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#1b2430]"
      >
        <div
          className="h-full rounded-full bg-brand transition-[width] duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className={`${CARD_SUB} mt-4`}>{bonusMessage(activations)}</p>
    </section>
  )
}
