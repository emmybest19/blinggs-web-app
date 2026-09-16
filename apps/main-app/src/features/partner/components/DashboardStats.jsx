import { statsFor } from '../data/dashboard.data'
import { CARD } from './DashboardCard'

export default function DashboardStats({ partner }) {
  return (
    <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {statsFor(partner).map((stat) => (
        <div key={stat.id} className={`${CARD} px-5 py-5`}>
          <dt className="font-sans text-[12.5px] text-[#8b949c]">
            {stat.label}
          </dt>

          <dd className="mt-3 text-[22px] leading-none font-bold tracking-[-0.02em] text-white tabular-nums">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
