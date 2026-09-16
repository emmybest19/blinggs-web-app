import { INSET } from './DashboardCard'

/**
 * The centred icon/title/body block shown wherever a list has nothing in it
 * yet — the registrations table and the leaderboard.
 */
export default function DashboardEmpty({ icon: Icon, title, body, className = '' }) {
  return (
    <div
      className={`${INSET} flex flex-col items-center justify-center px-6 py-10 text-center ${className}`}
    >
      <Icon className="size-5 text-[#5d666e]" />

      <p className="mt-3 font-sans text-[13px] font-semibold text-[#d8dcdf]">
        {title}
      </p>

      <p className="mt-1.5 max-w-[300px] font-sans text-[12.5px] leading-[1.6] text-[#7f888f]">
        {body}
      </p>
    </div>
  )
}
