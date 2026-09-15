import Reveal from '@shared/ui/Reveal'

import BenefitsGrid from '../components/BenefitsGrid'
import SocialProof from '../components/SocialProof'
import WaitlistFaq from '../components/WaitlistFaq'
import WaitlistHero from '../components/WaitlistHero'

export default function WaitlistPage() {
  return (
    <main className="w-full">
      {/* The hero holds the signup form, so it is left un-animated: fading the
        * field back out while someone is typing in it is worse than no effect. */}
      <WaitlistHero />

      <Reveal>
        <BenefitsGrid />
      </Reveal>

      <Reveal>
        <SocialProof />
      </Reveal>

      <Reveal>
        <WaitlistFaq />
      </Reveal>
    </main>
  )
}
