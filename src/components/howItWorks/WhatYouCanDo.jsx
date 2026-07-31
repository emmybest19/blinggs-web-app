import React from 'react'
import {
  Receipt,
  PiggyBank,
  ArrowRightLeft,
  ShieldCheck,
  Check,
  Sparkles,
  Users,
  CheckCheck
} from 'lucide-react'

export default function WhatYouCanDo() {
  const features = [
    {
      id: 'split-bills',
      title: 'Split Bills Seamlessly',
      description: 'Out for dinner or sharing rent? Pay the bill upfront and request instant split payments directly inside your group chat.',
      icon: <Receipt className="w-6 h-6 text-indigo-400" />,
      accentColor: 'indigo',
      preview: (
        <div className=" border border-white/10 rounded-2xl p-4 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs text-slate-400">Dinner at Charcoal</span>
            <span className="text-xs font-bold text-indigo-400">₦45,000 Total</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between bg-white/5 px-3 py-1.5 rounded-lg">
              <span className="text-slate-300">You paid</span>
              <span className="text-indigo-300 font-semibold">₦15,000</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 px-3 py-1.5 rounded-lg">
              <span className="text-slate-300">David (Requested)</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                ₦15,000 <CheckCheck className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'save-together',
      title: 'Save & Pool Funds',
      description: 'Create a shared community pool or cooperative wallet. Track contributions transparently with multi-sig approval safeguards.',
      icon: <PiggyBank className="w-6 h-6 text-[#00D4AA]" />,
      accentColor: 'emerald',
      preview: (
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 space-y-3 shadow-xl">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Cooperative Target</span>
            <span className="text-[#00D4AA] font-bold">₦1,200,000</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-[#00D4AA] h-full rounded-full w-[70%]" />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span>12 Members Joined</span>
            <span className="text-emerald-400 font-medium">70% Funded</span>
          </div>
        </div>
      )
    },
    {
      id: 'instant-send',
      title: 'Zero-Fee Transfers',
      description: 'Send and receive money instantly to any Blingg user or external bank account with zero hidden fees.',
      icon: <ArrowRightLeft className="w-6 h-6 text-sky-400" />,
      accentColor: 'sky',
      preview: (
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs">
              P2P
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Instant Wallet Transfer</p>
              <p className="text-[10px] text-slate-400">Settled in 0.2 seconds</p>
            </div>
          </div>
          <span className="bg-sky-500/20 border border-sky-500/30 text-sky-300 text-[10px] px-2.5 py-1 rounded-full font-semibold">
            0% Fee
          </span>
        </div>
      )
    },
    {
      id: 'safe-escrow',
      title: 'Protected Payments',
      description: 'Every group transaction and individual payout is guarded by strict bank-grade encryption and automated anti-fraud checks.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      accentColor: 'amber',
      preview: (
        <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-white">Scam Shield & Escrow Active</p>
            <p className="text-[10px] text-slate-400">Funds released only upon verified approval.</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="w-full bg-[#0b1220] py-20 px-4 md:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#009875]/15 border border-[#009875]/30 px-4 py-1.5 rounded-full text-xs font-semibold text-[#00D4AA] uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Endless Possibilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What Can You Do With Blingg?
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Built to unify your conversations, everyday payments, and group financial goals into one seamless experience.
          </p>
        </div>

        {/* Features 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#0f1b2d] border border-white/10 hover:border-[#00D4AA]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00D4AA] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Interactive Visual Preview Box */}
              <div className="pt-2">
                {feature.preview}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}