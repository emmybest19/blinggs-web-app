import Reveal from '@shared/ui/Reveal'

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
      <Reveal>
        <HomeHero />
      </Reveal>

      <Reveal>
        <Mockup />
      </Reveal>

      <Reveal>
        <EverythingYouNeed />
      </Reveal>

      <Reveal>
        <StartInMinutes />
      </Reveal>

      <Reveal>
        <HomeStats />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <ComingSoon />
      </Reveal>
    </>
  )
}
