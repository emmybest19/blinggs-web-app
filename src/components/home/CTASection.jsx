import React from "react";

export default function CTASection() {
  return (
    <section className="w-full px-4 mt-[30px] pb-[30px] flex justify-center">
      <div className="relative w-full max-w-7xl rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
        {/* subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-emerald-500/10" />

        <div className="relative z-10 px-6 sm:px-10 md:px-20 py-16 text-center text-white">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full text-sm bg-indigo-500/20 text-indigo-300">
              Available soon
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Ready to upgrade your <br className="hidden sm:block" />
            financial life?
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of users who trust Blingg for their daily payments,
            group savings, and crypto transactions.
          </p>

          {/* Store buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium w-full sm:w-auto justify-center">
              <span className="text-xl"></span>
              App Store
            </button>

            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 w-full sm:w-auto justify-center">
              <span className="text-xl">▶</span>
              Google Play
            </button>
          </div>

          {/* Footer info */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/50 text-sm">
            <span className="flex items-center gap-2">🔒 Bank-grade Security</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">📱 iOS & Android</span>
          </div>
        </div>
      </div>
    </section>
  );
}
