import { dashboardCopy } from '../data/dashboard.data'
import { CARD } from './DashboardCard'
import DashboardEmpty from './DashboardEmpty'
import { InboxIcon } from './DashboardIcons'

const HEAD =
  'px-4 pb-3 text-left font-sans text-[10px] font-semibold tracking-[0.1em] text-[#6b747c] uppercase'

const CELL = 'px-4 py-3.5 font-sans text-[12.5px]'

/** Wallet status drives its own colour — funded reads as a win, pending does not. */
const STATUS_TONE = {
  Funded: 'text-brand',
  Pending: 'text-[#f59e0b]',
}

export default function RecentRegistrations({ rows }) {
  return (
    <div>
      <h2 className="mb-4 text-[17px] leading-[1.25] font-bold tracking-[-0.01em] text-[#ededed]">
        {dashboardCopy.recentTitle}
      </h2>

      <section className={`${CARD} px-5 py-5 sm:px-6`}>
        {/* The header row stays visible in the empty state, exactly as the
          * design shows it — it tells the partner what they will get. */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse">
            <thead>
              <tr className="border-b border-[#1b2430]">
                {dashboardCopy.recentColumns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={`${HEAD} ${
                      index === dashboardCopy.recentColumns.length - 1
                        ? 'text-right'
                        : ''
                    }`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            {rows.length > 0 && (
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-[#161d26] last:border-b-0"
                  >
                    <td className={`${CELL} font-medium text-[#ededed]`}>
                      {row.name}
                    </td>

                    <td className={`${CELL} text-[#8b949c]`}>{row.date}</td>

                    <td
                      className={`${CELL} font-medium ${
                        STATUS_TONE[row.status] ?? 'text-[#8b949c]'
                      }`}
                    >
                      {row.status}
                    </td>

                    <td
                      className={`${CELL} text-right font-semibold text-brand tabular-nums`}
                    >
                      {row.points} BP
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        {rows.length === 0 && (
          <DashboardEmpty
            icon={InboxIcon}
            title={dashboardCopy.recentEmptyTitle}
            body={dashboardCopy.recentEmptyBody}
            className="mt-4"
          />
        )}
      </section>
    </div>
  )
}
