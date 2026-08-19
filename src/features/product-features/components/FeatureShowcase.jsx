import { Sparkles } from 'lucide-react'

import SectionHeading from '@shared/ui/SectionHeading'

import { useSelectedFeature } from '../hooks/useSelectedFeature'
import FeatureDetailPanel from './FeatureDetailPanel'
import FeatureListItem from './FeatureListItem'

export default function FeatureShowcase() {
  const { features, activeFeature, selectFeature } = useSelectedFeature()

  return (
    <section className="w-full px-4 py-12 bg-[#0b1220] text-white font-sans min-h-[85vh]">
      <div className="max-w-7xl mx-auto space-y-8">
        <SectionHeading
          as="h1"
          eyebrow="Explore Capabilities"
          icon={Sparkles}
          title="Blingg Features"
          subtitle="Select a feature to view full details and interactive capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0f1b2d] border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl items-stretch">
          {/* Left Sidebar List */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
                Select Feature
              </h3>

              <div className="space-y-2">
                {features.map((feature) => (
                  <FeatureListItem
                    key={feature.id}
                    feature={feature}
                    isSelected={activeFeature.id === feature.id}
                    onSelect={selectFeature}
                  />
                ))}
              </div>
            </div>
          </div>

          <FeatureDetailPanel feature={activeFeature} />
        </div>
      </div>
    </section>
  )
}
