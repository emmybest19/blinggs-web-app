import { leaderboard } from '../data/partner.data'
import SectionHeading from './SectionHeading'

const HEAD =
  'px-4 py-3 text-left font-sans text-[9px] font-semibold tracking-[0.1em] text-[#6f7477] uppercase sm:px-5'

const CELL = 'px-4 py-3.5 font-sans text-[11px] sm:px-5 sm:py-4 sm:text-[12px]'

export default function PartnerLeaderboard() {
  return (
    <section className="box-border w-full border-t border-ink-soft bg-ink-deep px-4 py-14 xs:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionHeading
          title={leaderboard.title}
          subtitle={leaderboard.subtitle}
          className="mb-10 sm:mb-14"
        />

        {/* The table keeps its four columns and scrolls sideways inside this
          * box rather than wrapping, which would scramble the ranking. */}
        <div className="overflow-x-auto rounded-xl border border-[#242424] bg-[#151515]">
          <table className="w-full min-w-[520px] border-collapse">
            <thead>
              <tr className="border-b border-[#242424]">
                {leaderboard.columns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    // Points are numeric and right-aligned, like the figures
                    // under them.
                    className={`${HEAD} ${index === leaderboard.columns.length - 1 ? 'text-right' : ''}`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {leaderboard.rows.map((row) => (
                <tr
                  key={row.rank}
                  className="border-b border-[#1e1e1e] last:border-b-0"
                >
                  <td className={`${CELL} font-semibold text-brand tabular-nums`}>
                    #{row.rank}
                  </td>

                  <td className={`${CELL} font-medium text-[#ededed]`}>
                    {row.name}
                  </td>

                  <td className={`${CELL} text-[#878c90]`}>{row.institution}</td>

                  <td
                    className={`${CELL} text-right font-semibold text-brand tabular-nums`}
                  >
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
