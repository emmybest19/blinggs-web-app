import AboutHero from '../components/AboutHero'
import Pillars from '../components/Pillars'
import Vision from '../components/Vision'

export default function AboutPage() {
  return (
    <main className="w-full max-w-full overflow-x-clip">
      <AboutHero />
      <Pillars />
      <Vision />
    </main>
  )
}
