import Reveal from '@shared/ui/Reveal'

import FutureOpportunities from '../components/FutureOpportunities'
import PartnerHero from '../components/PartnerHero'
import PartnerLeaderboard from '../components/PartnerLeaderboard'
import PartnerMockup from '../components/PartnerMockup'
import PartnerSteps from '../components/PartnerSteps'
import PartnerTerminal from '../components/PartnerTerminal'
import PartnerVision from '../components/PartnerVision'
import PointRewards from '../components/PointRewards'
import WhyPartner from '../components/WhyPartner'

/** The public Partner Program page at /affiliate. */
export default function PartnerPage() {
  return (
    <main className="w-full max-w-full overflow-x-clip bg-ink-deep">
      <Reveal>
        <PartnerHero />
      </Reveal>

      <Reveal>
        <PartnerMockup />
      </Reveal>

      <Reveal>
        <WhyPartner />
      </Reveal>

      <Reveal>
        <PartnerSteps />
      </Reveal>

      <Reveal>
        <PointRewards />
      </Reveal>

      <Reveal>
        <PartnerTerminal />
      </Reveal>

      <Reveal>
        <PartnerLeaderboard />
      </Reveal>

      <Reveal>
        <FutureOpportunities />
      </Reveal>

      <Reveal>
        <PartnerVision />
      </Reveal>
    </main>
  )
}
