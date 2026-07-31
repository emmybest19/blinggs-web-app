import React from 'react'
import { Download, UserPlus, Send, Sparkles, ArrowRight } from 'lucide-react'

export default function StartInMinutes() {
  const steps = [
    {
      id: 1,
      stepNumber: '01',
      title: 'Download App',
      description: 'Get Blingg instantly from iOS App Store or Google Play Store.',
      icon: <Download className="w-7 h-7 text-[#00D4AA]" />,
      badge: 'Free Download'
    },
    {
      id: 2,
      stepNumber: '02',
      title: 'Quick Sign Up',
      description: 'Create your account in under 2 minutes with zero paper paperwork.',
      icon: <UserPlus className="w-7 h-7 text-[#00D4AA]" />,
      badge: 'Instant KYC'
    },
    {
      id: 3,
      stepNumber: '03',
      title: 'Chat & Transact',
      description: 'Start messaging friends and sending money seamlessly.',
      icon: <Send className="w-7 h-7 text-[#00D4AA]" />,
      badge: 'Instant Transfer'
    },
  ]

  return (
    <section className="w-full bg-[#0b1220] py-20 px-4 md:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#009875]/15 border border-[#009875]/30 px-4 py-1.5 rounded-full text-xs font-semibold text-[#00D4AA] uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Start in Minutes
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            No paperwork, no long queues, no hassle. Just download and go.
          </p>
        </div>

        {/* Steps Grid Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Connecting Gradient Line across steps (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] -translate-y-6 h-[2px] bg-gradient-to-r from-[#009875]/0 via-[#00D4AA]/40 to-[#009875]/0 z-0 pointer-events-none" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 bg-[#0f1b2d] border border-white/10 hover:border-[#00D4AA]/40 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Top Row: Icon & Step Badge */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-[#009875]/15 border border-[#009875]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#009875]/25 transition-all duration-300 shadow-lg">
                  {step.icon}
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

              {/* Bottom Decorative Arrow */}
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