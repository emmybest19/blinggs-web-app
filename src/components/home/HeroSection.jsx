import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen p-4 rounded-3xl bg-[#0b1220] text-white flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Main Section */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] rounded-3xl p-8 md:p-12 flex flex-col justify-between relative">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              The Super App for Finance
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Message. Pay. <br />
              <span className="text-emerald-400">Grow Together.</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-xl">
              Blingg combines secure messaging with powerful financial tools.
              Send money, manage group savings, and trade crypto—all in one
              place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
                Download App
              </button>
              <button className="border border-white/30 px-6 py-3 rounded-full">
                How it Works
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="mt-12 hidden md:flex justify-center absolute  -bottom-3 right-1">
            <img
              src="/images/iPhone.png"
              alt="App preview"
              className="max-w-xs md:max-w-sm drop-shadow-2xl w-[150px]"
            />
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 gap-6 ">
          {/* Global Reach */}
          <div className="bg-white text-black rounded-3xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-emerald-600 font-medium flex items-center gap-2">
                🌍 Global Reach
              </div>
              <h2 className="text-4xl font-bold mt-4">12+</h2>
              <p className="text-black/60 mt-2">
                Countries supported for instant transfers and payments.
              </p>
            </div>
          </div>

          {/* Crypto Ready */}
          <div className="bg-[#0f1b2d] rounded-3xl p-6 flex flex-col justify-between relative">
            <img src="/images/mainbit.png" alt="" className="absolute w-[160px] top-0 right-0" />
            <div>
              <img src="/images/graph.png" alt=""  className="w-[40.77px] h-[40.77px] mb-[17.5px]"/>
              <div className="text-emerald-400 font-medium flex items-center gap-2">
                 Crypto Ready
              </div>
              <p className="text-white/70 mt-5 text-xs">
                Trade BTC instantly with zero hidden fees.
              </p>
            </div>
            <button className="text-emerald-400 mt-6 flex  items-center gap-4 text-xs">
              <p>View Rates </p>
              <span><img src="/images/greenarrow.png" alt="" className="w-4" /></span>
              
            </button>
          </div>

          {/* Join Users */}
          <div className="bg-slate-100 text-black rounded-3xl p-6 flex items-center justify-between py-18">
            <div>
              <h3 className="text-emerald-600 font-semibold">
                Join 50k+ Users
              </h3>
              <p className="text-black/60">Start your journey today</p>
            </div>
            <div>
             <img src="/images/rightArror.png" alt="" className="w-12"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
