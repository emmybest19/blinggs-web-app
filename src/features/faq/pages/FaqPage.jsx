import ContactSection from '../components/ContactSection'
import FaqAccordion from '../components/FaqAccordion'

export default function FaqPage() {
  return (
    <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
      <FaqAccordion />
      <ContactSection />
    </div>
  )
}
