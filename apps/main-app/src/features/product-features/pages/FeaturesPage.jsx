import Reveal from '@shared/ui/Reveal'

import ConvertToNaira from '../components/ConvertToNaira'
import FeatureChat from '../components/FeatureChat'
import FeaturePayments from '../components/FeaturePayments'
import FeaturesHero from '../components/FeaturesHero'
import Groups from '../components/Groups'
import SaveTogether from '../components/SaveTogether'

export default function FeaturesPage() {
  return (
    <>
      <Reveal>
        <FeaturesHero />
      </Reveal>

      <Reveal>
        <FeatureChat />
      </Reveal>

      <Reveal>
        <FeaturePayments />
      </Reveal>

      <Reveal>
        <Groups />
      </Reveal>

      <Reveal>
        <SaveTogether />
      </Reveal>

      <Reveal>
        <ConvertToNaira />
      </Reveal>
    </>
  )
}
