import ConvertToNaira from '../components/ConvertToNaira'
import FeatureChat from '../components/FeatureChat'
import FeaturePayments from '../components/FeaturePayments'
import FeaturesHero from '../components/FeaturesHero'
import Groups from '../components/Groups'
import SaveTogether from '../components/SaveTogether'

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeatureChat />
      <FeaturePayments />
      <Groups />
      <SaveTogether />
      <ConvertToNaira />
    </>
  )
}
