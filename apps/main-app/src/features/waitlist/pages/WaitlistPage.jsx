import BenefitsGrid from '../components/BenefitsGrid'
import SocialProof from '../components/SocialProof'
import WaitlistFaq from '../components/WaitlistFaq'
import WaitlistHero from '../components/WaitlistHero'

export default function WaitlistPage() {
  return (
    <main className="w-full">
      <WaitlistHero />
      <BenefitsGrid />
      <SocialProof />
      <WaitlistFaq />
    </main>
  )
}
