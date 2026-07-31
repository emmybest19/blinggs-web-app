import React from 'react'
import { ShieldCheckIcon, SmartphoneIcon, LockIcon, CheckCircle2Icon } from 'lucide-react'

// Custom SVGs for Store Logos to keep exact branding
const AppleIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-5.01.12-9.87-1.95-14.58-6.23-3.08-2.63-6.99-7.25-11.74-13.88-5.69-7.96-10.22-16.89-13.6-26.79-3.38-9.9-5.07-19.53-5.07-28.89 0-14.15 3.58-25.79 10.74-34.92 7.16-9.13 16.32-13.78 27.49-13.95 4.88 0 10.12 1.21 15.72 3.63 5.6 2.42 9.53 3.69 11.8 3.81 2.05 0 6.13-1.33 12.25-3.99 6.12-2.66 11.45-3.87 15.99-3.63 12.01.97 21.49 5.37 28.43 13.2-10.87 6.53-16.18 15.54-15.93 27.03.25 9.07 3.73 16.63 10.45 22.68 6.72 6.05 14.88 9.49 24.49 10.33-2.43 7.37-5.5 14.92-9.21 22.64zM119.22 31.08c0-7.01 2.5-13.68 7.5-20.01 5-6.33 11.41-10.3 19.23-11.91.5 2.18.75 4.29.75 6.33 0 7.01-2.52 13.78-7.56 20.31-5.04 6.53-11.43 10.43-19.17 11.7-0.12-.84-.25-2.98-.75-6.42z"/>
  </svg>
)

const GooglePlayIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
    <path d="M99.617 8.057a50.091 50.091 0 0 0-38.867 18.24 50.037 50.037 0 0 0-11.1 33.19v393.026a50.037 50.037 0 0 0 11.1 33.19 50.091 50.091 0 0 0 38.867 18.24c13.78 0 27.288-5.205 37.604-14.512l213.98-193.02-61.98-62.29-189.604-226.064zM385.16 230.153l-61.12-55.23 61.98 62.29 61.12-55.23c13.27-11.99 20.86-28.77 20.86-46.36s-7.59-34.37-20.86-46.36l-61.98 140.89z"/>
  </svg>
)

export default function CTASection() {
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
                  <h4 className="text-xs font-semibold text-white">Daily Payments & Group Savings</h4>
                  <p className="text-[10px] text-white/50">Trusted by millions of users</p>
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
            Join millions of users who trust Blingg for their daily payments, and group savings.
          </p>

          {/* Store Buttons with Real SVG Icons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center gap-3 px-6 py-3.5 cursor-pointer rounded-full bg-white hover:bg-gray-100 text-black font-semibold justify-center transition-all active:scale-95 shadow-md">
              <AppleIcon />
              <span>App Store</span>
            </button>

            <button className="flex items-center gap-3 px-6 py-3.5 cursor-pointer rounded-full bg-white/10 hover:bg-white/15 text-white backdrop-blur border border-white/20 justify-center transition-all active:scale-95 font-medium">
              <GooglePlayIcon />
              <span>Google Play</span>
            </button>
          </div>

          {/* Footer Info with Real Icons */}
          <div className="pt-4 flex flex-wrap gap-4 items-center text-white/50 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              Bank-grade Security
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <SmartphoneIcon className="w-4 h-4 text-indigo-400" />
              iOS & Android
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}