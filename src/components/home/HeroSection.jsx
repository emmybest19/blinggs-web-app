import React from 'react'
import { ArrowDownIcon, CheckCheckIcon, Globe2Icon, SparklesIcon } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0b1220] py-6 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Card Container */}
        <div className="relative w-full min-h-155 rounded-4xl overflow-hidden bg-linear-to-br from-[#0f1b2d] to-[#0b1220] border border-white/10 shadow-2xl flex items-center p-6 md:p-12 lg:p-16">
          
          {/* Background Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* WhatsApp-Style Floating UI Badges */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-20 w-80 space-y-4 pointer-events-none">
            
            {/* Floating Community Badge */}
            <div className="bg-[#0f1b2d]/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-full shadow-xl flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Community Payments</span>
              </div>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <Globe2Icon className="w-3.5 h-3.5" /> 12+ Countries
              </span>
            </div>

            {/* Chat Bubble 1 */}
            <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-white p-3.5 rounded-2xl rounded-tr-none shadow-lg text-xs ml-auto max-w-[240px]">
              <p className="text-emerald-300 font-medium mb-1 flex items-center justify-between">
                <span>Blingg Transfer</span>
                <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
              </p>
              Send, receive instantly with zero hidden fees!
              <div className="flex items-center justify-end gap-1 text-[10px] text-white/50 mt-1">
                <span>11:53</span>
                <CheckCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Chat Bubble 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white p-3.5 rounded-2xl rounded-tl-none shadow-lg text-xs max-w-[240px]">
              <p className="text-indigo-300 font-semibold mb-1">Join Millions</p>
              Message. Pay. Build Value Together.
              <span className="block text-[10px] text-white/40 text-right mt-1">11:59</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl text-white">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs md:text-sm mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Messaging & Community Payments Made Simple</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Message. Pay. <br />
              <span className="text-emerald-400">
                Build Value Together.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 font-normal leading-relaxed mb-8 max-w-xl">
              Blingg is a SocialTech platform built to help people connect,
              communicate, grow, and move together in one trusted digital space.
              From secure messaging and community engagement to seamless
              payments and group contributions, Blingg brings everyday
              connection and digital life into a simple, reliable experience.
              Built for people. Designed for communities. Ready for Africa and
              beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button className="px-7 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-500 text-black font-semibold text-sm md:text-base flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-400/20">
                <span>Download App</span>
                <ArrowDownIcon className="w-4 h-4" />
              </button>
              <button className="px-7 py-3.5 rounded-full border border-white/30 hover:border-emerald-400 text-white font-medium text-sm md:text-base transition-all hover:bg-white/5 active:scale-95">
                How it Works
              </button>
            </div>
          </div>

          {/* Phone Preview */}
          <div className="hidden md:flex absolute -bottom-6 right-8 lg:right-96 z-10 opacity-40 lg:opacity-80 pointer-events-none">
            <img
              src="/images/iPhone.png"
              alt="App preview"
              className="w-[140px] lg:w-[180px] drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}