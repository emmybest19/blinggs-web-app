import { dashboardCopy } from '../data/dashboard.data'
import { CARD, CARD_SUB, CARD_TITLE } from './DashboardCard'
import DashboardEmpty from './DashboardEmpty'
import { PeopleIcon } from './DashboardIcons'

export default function ReferralLeaderboard({ rows }) {
  return (
    <section className={`${CARD} px-6 py-6 sm:px-7`}>
      <h2 className={CARD_TITLE}>{dashboardCopy.leaderboardTitle}</h2>

      <p className={`${CARD_SUB} mt-2`}>{dashboardCopy.leaderboardSubtitle}</p>

      {rows.length === 0 ? (
        <DashboardEmpty
          icon={PeopleIcon}
          title={dashboardCopy.leaderboardEmptyTitle}
          body={dashboardCopy.leaderboardEmptyBody}
          className="mt-5"
        />
      ) : (
        <ol className="mt-5 flex flex-col gap-1">
          {rows.map((row) => (
            <li
              key={row.rank}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 odd:bg-[#0b1118]"
            >
              <span className="w-6 shrink-0 font-sans text-[12px] font-semibold text-brand tabular-nums">
                #{row.rank}
              </span>

              <span className="min-w-0 flex-1 truncate font-sans text-[12.5px] font-medium text-[#ededed]">
                {row.name}
              </span>

              <span className="shrink-0 font-sans text-[12.5px] font-semibold text-brand tabular-nums">
                {row.points}
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
