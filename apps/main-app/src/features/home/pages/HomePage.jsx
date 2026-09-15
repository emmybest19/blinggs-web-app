import ComingSoon from '../components/ComingSoon'
import EverythingYouNeed from '../components/EverythingYouNeed'
import HomeHero from '../components/HomeHero'
import HomeStats from '../components/HomeStats'
import Mockup from '../components/Mockup'
import StartInMinutes from '../components/StartInMinutes'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Mockup />
      <EverythingYouNeed />
      <StartInMinutes />
      <HomeStats />
      <Testimonials />
      <ComingSoon />
    </>
  )
}
