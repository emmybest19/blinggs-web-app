import { Sparkles } from 'lucide-react'

import { cn } from '@shared/lib/cn'
import SectionHeading from '@shared/ui/SectionHeading'

import { capabilities } from '../data/capabilities.data'

export default function WhatYouCanDo() {
  return (
    <section className="w-full bg-[#0b1220] py-20 px-4 md:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          align="center"
          eyebrow="Endless Possibilities"
          icon={Sparkles}
          title="What Can You Do With Blingg?"
          subtitle="Built to unify your conversations, everyday payments, and group financial goals into one seamless experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map(({ icon: Icon, Preview, ...capability }) => (
            <div
              key={capability.id}
              className="bg-[#0f1b2d] border border-white/10 hover:border-[#00D4AA]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className={cn('w-6 h-6', capability.iconClassName)} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00D4AA] transition-colors">
                  {capability.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {capability.description}
                </p>
              </div>

              <div className="pt-2">
                <Preview />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
