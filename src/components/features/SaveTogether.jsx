import React from 'react'
import { UserCheck, Vote, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react'

export default function SaveTogether() {
  return (
    <section className="w-full px-4 py-16 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#009875]/20 border border-[#009875]/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#00D4AA]">
            <Users className="w-3.5 h-3.5" />
            <span>Structured Group Savings</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Two ways to save together
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Choose the community structure that fits your group's financial needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Personal Groups Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#131d2e] to-[#0f1726] border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Private Control
                </span>
                <Users className="w-6 h-6 text-indigo-400 opacity-60" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Personal Groups
              </h3>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Designed for life's special moments. Personal Groups on Blingg let friends and family save, contribute, and donate together with ease. Create a shared wallet, contribute anytime, and withdraw instantly.
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Weddings', 'Birthdays', 'Baby Showers', 'Family Savings'].map((tag) => (
                  <span key={tag} className="text-[11px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Control Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Admin Controlled</p>
                <p className="text-xs text-white/50">Admin manages all funds, payouts, and members directly.</p>
              </div>
            </div>
          </div>

          {/* 2. General / Community Groups Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0f2420] to-[#0b1a17] border border-[#009875]/30 p-6 md:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#009875]/20 text-[#00D4AA] border border-[#009875]/40">
                  Community Trust
                </span>
                <ShieldCheck className="w-6 h-6 text-[#00D4AA] opacity-60" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                General Groups
              </h3>

              <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed">
                Group money deserves group control. General Groups provide maximum transparency and accountability. All contributions go into a secure wallet where no single person can misuse funds.
              </p>

              <ul className="space-y-2 pt-1 text-xs md:text-sm text-emerald-200/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                  <span>Withdrawal requests visible to all members</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                  <span>Ideal for Churches, Cooperatives, and Associations</span>
                </li>
              </ul>
            </div>

            {/* Multi-Sig Footer */}
            <div className="pt-6 border-t border-[#009875]/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#009875]/30 border border-[#009875]/50 flex items-center justify-center text-[#00D4AA] shrink-0">
                <Vote className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Multi-Sig Approval (60% Rule)</p>
                <p className="text-xs text-emerald-200/60">Requires approval from at least 60% of members to release funds.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}