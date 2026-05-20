import React from 'react'
export default function FeaturesGrid() {
  return (
    <section className="w-full md:px-4 py-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Powerful Features
          </h2>
          <p className="text-white/60">
            Everything you need to manage money and connect with others
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-6">
          {/* Chat & Pay */}
          <div
            className="relative bg-white rounded-3xl p-6 md:p-8 shadow-lg overflow-hidden col-span-2 space-y-2 card-hover animate-fade-in-left"
            style={{ animationDelay: '0.1s' }}
          >
            <img
              src="/images/chat.png"
              alt="Chat icon"
              className="w-12"
              loading="lazy"
            />

            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
              Chat & Pay
            </h3>

            <p className="text-slate-600 mb-6 text-sm md:text-lg">
              Seamlessly blend conversations with transactions. Send money to
              friends directly within your chat window without leaving the
              conversation.
            </p>

            <ul className="space-y-3 text-slate-700 text-sm md:text-lg">
              <li className="flex items-center gap-3">
                <img
                  src="/images/good.png"
                  alt="check"
                  className="w-5 h-5"
                  loading="lazy"
                />
                End-to-end encryption
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/images/good.png"
                  alt="check"
                  className="w-5 h-5"
                  loading="lazy"
                />
                Instant settlement
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/images/good.png"
                  alt="check"
                  className="w-5 h-5"
                  loading="lazy"
                />
                Media sharing
              </li>
            </ul>

            <img
              src="/images/chatpay.png"
              alt="Chat payment preview"
              className="absolute bottom-0 right-0 w-[130px] md:w-[270px]"
              loading="lazy"
            />
          </div>

          {/* Smart Protection */}
          <div
            className="bg-indigo-50 rounded-3xl p-6 md:p-8 shadow-lg flex flex-col justify-between text-sm md:text-lg card-hover animate-fade-in-up-delay-1"
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <img
                src="/images/smart.png"
                alt="Security icon"
                className="w-12"
                loading="lazy"
              />

              <h3 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Smart File & Link Protection
              </h3>

              <p className="text-slate-600 mb-2">
                Share with confidence on Blingg.
              </p>
            </div>

            <p>
              Every file and link is checked for scams, phishing, and malware
              before you open it, keeping conversations safe and secure.
            </p>
          </div>

          {/* Group Power */}

          {/* Crypto to Cash */}
          {/* <div
            className="bg-white rounded-3xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row gap-6 items-start md:items-center col-span-2 md:text-lg card-hover animate-fade-in-up-delay-2"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex-1">
              <img src="/images/crypto.png" alt="Crypto icon" className="w-14" loading="lazy" />

              <h3 className="text-xl mt-2 md:text-2xl font-semibold text-slate-900 mb-3">
                Crypto to Cash
              </h3>

              <p className="text-slate-600 mb-6 max-w-md text-sm md:text-lg">
                Convert Bitcoin to Naira instantly with competitive rates and
                zero hidden fees.
              </p>

              <div className="flex gap-4">
                <div className="bg-slate-50 rounded-xl px-4 py-2 text-sm">
                  <p className="text-slate-500">Fee</p>
                  <p className="font-medium">0%</p>
                </div>

                <div className="bg-slate-50 rounded-xl px-4 py-2 text-sm">
                  <p className="text-slate-500">Speed</p>
                  <p className="font-medium">Instant</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-80 bg-slate-900 text-white rounded-2xl p-5 hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                  <img src="/images/crypto2.png" alt="Bitcoin icon" className="w-12" loading="lazy" />
                  <span className="font-medium">Bitcoin</span>
                </div>

                <img src="/images/graph.png" alt="Price graph" className="w-14" loading="lazy" />
              </div>

              <p className="text-sm text-slate-400 mb-1">Current Rate</p>
              <p className="text-2xl font-semibold mb-4">₦110,450,230</p>

              <div className="flex gap-3">
                <button className="flex-1 bg-indigo-600 rounded-xl py-2">
                  Send
                </button>
                <button className="flex-1 bg-slate-700 rounded-xl py-2">
                  Receive
                </button>
                <button className="flex-1 bg-[#009875] rounded-xl py-2">
                  Convert
                </button>
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="bg-slate-900 flex justify-between items-center w-full mt-8 rounded-3xl p-6 md:p-8 text-white shadow-lg relative text-sm md:text-lg card-hover animate-fade-in-right"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                  <img
                    src="/images/group1.png"
                    alt="Group icon"
                    className="w-12"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold">
                  Group Power
                </h3>
              </div>
              {/* <img
              src="/images/group2.png"
              alt="Group preview"
              className="w-28 h-32 absolute top-2 right-2"
              loading="lazy"
            /> */}
            </div>

            <p className="text-slate-300 max-w-md">
              Pool funds with friends or communities in a transparent and secure
              way.
            </p>

            <img
              src="/images/fiveimages.png"
              alt="Group members"
              className=" md:w-36 mt-20"
              loading="lazy"
            />
          </div>
          <img
            src="/images/gpower.png"
            className="w-[122px] h-[122px] sm:w-[272px] sm:h-[272px]"
          />
        </div>
      </div>
    </section>
  )
}
