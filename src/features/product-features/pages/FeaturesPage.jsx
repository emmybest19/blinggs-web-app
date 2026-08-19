import FeatureShowcase from '../components/FeatureShowcase'
import SaveTogether from '../components/SaveTogether'

export default function FeaturesPage() {
  return (
    <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
      <FeatureShowcase />
      <SaveTogether />
    </div>
  )
}
