import ComingSoonModal from '@shared/components/ComingSoonModal'
import { useDisclosure } from '@shared/hooks/useDisclosure'

import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import AboutValues from '../components/AboutValues'

export default function AboutPage() {
  const comingSoon = useDisclosure()

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 py-8 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AboutHero onGetStarted={comingSoon.open} />
        <AboutStory />
        <AboutValues />
      </div>

      <ComingSoonModal isOpen={comingSoon.isOpen} onClose={comingSoon.close} />
    </div>
  )
}
