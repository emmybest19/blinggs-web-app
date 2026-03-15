import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen p-4 rounded-3xl bg-[#0b1220] text-white flex items-center justify-center overflow-hidden relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Left Main Section */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] rounded-3xl p-8 md:p-12 flex flex-col justify-between relative card-hover animate-fade-in-left">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-8 animate-fade-in-down">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              The Super App for Finance
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight animate-fade-in-up-delay-1">
              Message. Pay. <br />
              <span className="text-emerald-400 animate-glow-text">Build Value Together.</span>
            </h1>

            <p className="text-white/70 mt-6 max-w-xl animate-fade-in-up-delay-2">
              Blingg is a secure messaging and financial super app that brings
              communication and payments into one trusted platform. Chat
              securely, send and receive money, manage group contributions, and
              access digital financial tools seamlessly, all in one place. Built
              for reliability. Designed for growth. Ready for Africa and beyond.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up-delay-3">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium btn-smooth hover:shadow-lg">
                Download App
              </button>
              <button className="border border-white/30 px-6 py-3 rounded-full btn-smooth hover:border-emerald-400 transition-all">
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
          <div className="bg-white text-black rounded-3xl p-6 flex flex-col justify-between card-hover animate-fade-in-up-delay-1">
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
          <div className="bg-[#0f1b2d] rounded-3xl p-6 flex flex-col justify-between relative card-hover animate-fade-in-up-delay-2">
            <img
              src="/images/mainbit.png"
              alt=""
              className="absolute w-[130px] top-0 right-0"
            />
            <div>
              <img
                src="/images/graph.png"
                alt=""
                className="w-[40.77px]  mb-[17.5px]"
              />
              <div className="text-emerald-400 font-medium flex items-center gap-2">
                Crypto Ready
              </div>
              <p className="text-white/70 mt-5 text-xs">
                Receive, send and convert BTC instantly with zero hidden fees.
              </p>
            </div>
            <button className="text-emerald-400 mt-6 flex items-center gap-4 text-xs hover-glow transition-all duration-300">
              <p>View Rates </p>
              <span>
                <img src="/images/greenarrow.png" alt="" className="w-4" />
              </span>
            </button>
          </div>

          {/* Join Users */}
          <div className="bg-slate-100 text-black rounded-3xl p-6 flex items-center justify-between py-18 card-hover animate-fade-in-up-delay-3">
            <div className="flex flex-col gap-5">
              <p className="text-black/60">
                Send, Receive and convert BTC instantly with no hidden fee
              </p>
              <h3 className="text-emerald-600 font-semibold">
                Join millions of active users
              </h3>
            </div>
            <div>
              <img src="/images/rightArror.png" alt="" className="w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
