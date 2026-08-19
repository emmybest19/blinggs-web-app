import {
  CheckCircle2Icon,
  LockIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from 'lucide-react'

import { AppleIcon, GooglePlayIcon } from './StoreIcons'

export default function CTASection({ onStoreClick }) {
  return (
    <section className="w-full bg-[#0b1220] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Mockup Card */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md bg-linear-to-br from-[#0f172a] via-[#111827] to-[#1e293b] rounded-3xl border border-white/10 p-6 shadow-2xl overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-white/40">Blingg App</span>
            </div>

            {/* Chat Content */}
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-white">
                    Daily Payments &amp; Group Savings
                  </h4>
                  <p className="text-[10px] text-white/50">
                    Trusted by millions of users
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] bg-indigo-500/20 text-indigo-300 font-medium flex items-center gap-1">
                  <CheckCircle2Icon className="w-3 h-3 text-indigo-400" /> Active
                </span>
              </div>

              <div className="bg-emerald-500/20 border border-emerald-500/30 p-3 rounded-2xl text-xs text-white/90 max-w-[85%]">
                Ready to upgrade your financial life?
              </div>

              <div className="bg-white/10 border border-white/10 p-3 rounded-2xl text-xs text-white/80 max-w-[80%] ml-auto text-right flex items-center justify-end gap-1.5">
                <span>Bank-grade Security included</span>
                <LockIcon className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Floating Call Badge */}
          <div className="absolute -top-4 -right-2 md:right-4 bg-[#0f1b2d] border border-white/15 text-white p-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs z-20">
            <div className="w-8 h-8 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center font-bold text-indigo-300">
              B
            </div>
            <div>
              <p className="font-semibold text-white">Group Savings</p>
              <p className="text-emerald-400 text-[10px]">Security verified</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-2" />
          </div>
        </div>

        {/* Right Side: Text & Download Buttons */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 animate-pulse">
            Available soon
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Ready to upgrade your <br className="hidden sm:block" />
            financial life?
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
            Join millions of users who trust Blingg for their daily payments,
            and group savings.
          </p>

          {/* Store Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={onStoreClick}
              className="flex items-center gap-3 px-6 py-3.5 cursor-pointer rounded-full bg-white hover:bg-gray-100 text-black font-semibold justify-center transition-all active:scale-95 shadow-md"
            >
              <AppleIcon />
              <span>App Store</span>
            </button>

            <button
              type="button"
              onClick={onStoreClick}
              className="flex items-center gap-3 px-6 py-3.5 cursor-pointer rounded-full bg-white/10 hover:bg-white/15 text-white backdrop-blur border border-white/20 justify-center transition-all active:scale-95 font-medium"
            >
              <GooglePlayIcon />
              <span>Google Play</span>
            </button>
          </div>

          {/* Footer Info */}
          <div className="pt-4 flex flex-wrap gap-4 items-center text-white/50 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              Bank-grade Security
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <SmartphoneIcon className="w-4 h-4 text-indigo-400" />
              iOS &amp; Android
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
