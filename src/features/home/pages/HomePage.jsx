import ComingSoonModal from '@shared/components/ComingSoonModal'
import { useDisclosure } from '@shared/hooks/useDisclosure'

import CTASection from '../components/CTASection'
import HeroSection from '../components/HeroSection'

export default function HomePage() {
  const comingSoon = useDisclosure()

  return (
    <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
      <HeroSection onDownloadClick={comingSoon.open} />
      <CTASection onStoreClick={comingSoon.open} />

      <ComingSoonModal isOpen={comingSoon.isOpen} onClose={comingSoon.close} />
    </div>
  )
}
