import { faqGroups } from '../data/faqs.data'
import FaqCard from './FaqCard'
import SupportCard from './SupportCard'

export default function FaqAccordion() {
  return (
    <section className="py-12 px-4 md:px-10 max-w-7xl mx-auto font-sans">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {faqGroups.map((group) => (
            <FaqCard
              key={group.id}
              title={group.section}
              items={group.items}
            />
          ))}
        </div>

        <SupportCard />
      </div>
    </section>
  )
}
