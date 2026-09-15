import Reveal from '@shared/ui/Reveal'

import BenefitCards from '../components/BenefitCards'
import HowItWorksFaq from '../components/HowItWorksFaq'
import SocialProof from '../components/SocialProof'
import WorksHero from '../components/WorksHero'

export default function HowItWorksPage() {
  return (
    <>
      <Reveal>
        <WorksHero />
      </Reveal>

      <Reveal>
        <BenefitCards />
      </Reveal>

      <Reveal>
        <SocialProof />
      </Reveal>

      <Reveal>
        <HowItWorksFaq />
      </Reveal>
    </>
  )
}
