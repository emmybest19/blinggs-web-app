import { ArrowRight, Sparkles } from 'lucide-react'

import SectionHeading from '@shared/ui/SectionHeading'

import { onboardingSteps } from '../data/onboardingSteps.data'

export default function StartInMinutes() {
  return (
    <section className="w-full bg-[#0b1220] py-20 px-4 md:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          align="center"
          eyebrow="Simple Onboarding"
          icon={Sparkles}
          title="Start in Minutes"
          subtitle="No paperwork, no long queues, no hassle. Just download and go."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting gradient line across steps (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] -translate-y-6 h-[2px] bg-gradient-to-r from-[#009875]/0 via-[#00D4AA]/40 to-[#009875]/0 z-0 pointer-events-none" />

          {onboardingSteps.map(({ icon: Icon, ...step }) => (
            <div
              key={step.id}
              className="relative z-10 bg-[#0f1b2d] border border-white/10 hover:border-[#00D4AA]/40 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Top Row: Icon & Step Badge */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-[#009875]/15 border border-[#009875]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#009875]/25 transition-all duration-300 shadow-lg">
                  <Icon className="w-7 h-7 text-[#00D4AA]" />
                </div>
                <span className="text-3xl font-extrabold text-white/15 font-mono group-hover:text-[#00D4AA]/30 transition-colors">
                  {step.stepNumber}
                </span>
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-semibold text-slate-300 border border-white/10">
                  {step.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00D4AA] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-end text-slate-500 group-hover:text-[#00D4AA] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
