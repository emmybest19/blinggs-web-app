import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const blinggFeatures = [
  {
    id: 'secure-messaging',
    title: 'Secure Messaging',
    description: 'End-to-end encrypted chat & instant voice messaging.',
    image: '/features/secure-messaging.png'
  },
  {
    id: 'private-calls',
    title: 'Private & Group Calls',
    description: 'HD voice and video calling for teams and friends.',
    image: '/features/group-calls.png'
  },
  {
    id: 'secure-scanning',
    title: 'Secure Scanning',
    description: 'Real-time automatic scanning for links and files.',
    image: '/features/Secure-scanning.png'
  },
  {
    id: 'in-chat-payment',
    title: 'In-Chat Payment',
    description: 'Send and request money directly inside any chat.',
    image: '/features/In-chat-payment.png'
  },
  {
    id: 'group-contribution',
    title: 'Group Contribution',
    description: 'Personal & General savings pools with multi-sig approval.',
    image: '/features/Group-contribution.png'
  },
  {
    id: 'instant-bank-payout',
    title: 'Instant Bank Payouts',
    description: 'Transfer funds directly to any Nigerian bank account.',
    image: '/features/instant-payment.png'
  },
  {
    id: 'stories-status',
    title: 'Stories & Status',
    description: 'Share photos, updates, and moments with contacts.',
    image: '/features/Stories.png'
  }
]

export default function FeaturesGrid() {
  const [searchParams] = useSearchParams()
  const selectedId = searchParams.get('selected') || 'secure-messaging'

  const [activeFeature, setActiveFeature] = useState(
    () => blinggFeatures.find((f) => f.id === selectedId) || blinggFeatures[0]
  )

  useEffect(() => {
    const found = blinggFeatures.find((f) => f.id === selectedId)
    if (found) {
      setActiveFeature(found)
    }
  }, [selectedId])

  return (
    <section className="w-full px-4 py-12 bg-[#0b1220] text-white font-sans min-h-[85vh]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#009875]/20 border border-[#009875]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00D4AA] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explore Capabilities</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Blingg Features
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Select a feature to view full details and interactive capabilities.
          </p>
        </div>

        {/* Feature Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0f1b2d] border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl items-stretch">
          
          {/* Left Sidebar List */}
          <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
                Select Feature
              </h3>

              <div className="space-y-2">
                {blinggFeatures.map((item) => {
                  const isSelected = activeFeature.id === item.id
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveFeature(item)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#009875] text-white shadow-lg'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-xl object-cover object-top shrink-0 border border-white/20 bg-slate-900"
                        />
                        <div>
                          <h4 className="text-sm font-bold leading-snug">
                            {item.title}
                          </h4>
                          <p
                            className={`text-xs line-clamp-1 ${
                              isSelected ? 'text-emerald-100' : 'text-slate-400'
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-white' : 'text-slate-500'
                        }`}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Detailed Display Panel */}
          <div className="lg:col-span-7 bg-[#0b1220] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Image Preview Window */}
              <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-[#070d18] border border-white/10 shadow-2xl p-4 md:p-6 flex items-center justify-center">
                
                {/* Feature Image */}
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="h-full w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300 hover:scale-102"
                />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0b1220]/80 backdrop-blur-md text-[#00D4AA] border border-[#009875]/40 shadow-sm">
                    Blingg Core Feature
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                  {activeFeature.title}
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {activeFeature.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                    <span>Bank-grade security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                    <span>Real-time instant processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                    <span>Zero hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                    <span>Available on iOS & Android</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#00D4AA]" />
                <span>Protected by Blingg Shield</span>
              </div>
              <button className="px-6 py-2.5 bg-[#009875] hover:bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md">
                Try {activeFeature.title}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}