import { CheckCircle2, ShieldCheck } from 'lucide-react'

import { featureHighlights } from '../data/features.data'

export default function FeatureDetailPanel({ feature }) {
  return (
    <div className="lg:col-span-7 bg-[#0b1220] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
      <div className="space-y-6">
        {/* Image Preview Window */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-[#070d18] border border-white/10 shadow-2xl p-4 md:p-6 flex items-center justify-center">
          <img
            src={feature.image}
            alt={feature.title}
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
            {feature.title}
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Key Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-300">
            {featureHighlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                <span>{highlight}</span>
              </div>
            ))}
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
          Try {feature.title}
        </button>
      </div>
    </div>
  )
}
