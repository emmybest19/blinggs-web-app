import BonusProgress from '../components/BonusProgress'
import ClaimReward from '../components/ClaimReward'
import DashboardStats from '../components/DashboardStats'
import DashboardWelcome from '../components/DashboardWelcome'
import RecentRegistrations from '../components/RecentRegistrations'
import ReferralLeaderboard from '../components/ReferralLeaderboard'
import { partner } from '../data/dashboard.data'

/**
 * The partner dashboard at /affiliate/dashboard.
 *
 * `partner` is read straight from the data module for now. When the endpoint
 * exists this becomes the one place that fetches — every block below already
 * takes its data as a prop, so none of them change.
 */
export default function PartnerDashboardPage() {
  return (
    <main className="w-full max-w-full bg-[#0a0e13] px-4 py-8 sm:px-7 sm:py-10 lg:px-10">
      {/* Main column and sidebar. They stack below xl, where a 2-column split
        * would squeeze the registrations table. */}
      <div className="mx-auto grid w-full max-w-[1340px] grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-6">
        <div className="flex min-w-0 flex-col gap-5">
          <DashboardWelcome partner={partner} />
          <DashboardStats partner={partner} />
          <BonusProgress partner={partner} />
          <RecentRegistrations rows={partner.recent} />
        </div>

        <aside className="flex min-w-0 flex-col gap-5">
          <ClaimReward partner={partner} />
          <ReferralLeaderboard rows={partner.leaderboard} />
        </aside>
      </div>
    </main>
  )
}
