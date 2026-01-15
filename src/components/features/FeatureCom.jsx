

export default function FeaturesGrid() {
  return (
    <section className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chat & Pay */}
        <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden  col-span-2 ">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8m-8 4h5m-9 6l3.5-3.5H20a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h2z" />
            </svg>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Chat & Pay</h3>
          <p className="text-slate-600 max-w-lg mb-6">
            Seamlessly blend conversations with transactions. Send money to friends directly within your chat window without ever leaving the conversation.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</span>
              End-to-end encryption
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</span>
              Instant settlement
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">✓</span>
              Media sharing
            </li>
          </ul>
        </div>

        {/* Smart Payments */}
        <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 11h14M7 15h10M9 19h6" />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Smart Payments</h3>
            <p className="text-slate-600 mb-6">
              Pay bills, buy airtime, and transfer to any bank instantly.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 flex justify-between text-sm">
              <span>Electric Bill</span>
              <span className="font-medium">₦15,000</span>
            </div>
            <div className="bg-white rounded-xl p-4 flex justify-between text-sm">
              <span>Airtime</span>
              <span className="font-medium">₦2,000</span>
            </div>
          </div>
        </div>

        {/* Group Power */}
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-3.741-.479M15 12a3 3 0 11-6 0 3 3 0 016 0zM6 18.72a9.094 9.094 0 013.741-.479" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">Group Power</h3>
          </div>

          <p className="text-slate-300 max-w-md">
            Pool funds with friends or communities. Transparent and secure.
          </p>
        </div>

        {/* Crypto to Cash */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center col-span-2">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 font-bold">₿</div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Crypto to Cash</h3>
            <p className="text-slate-600 mb-6 max-w-md">
              Convert Bitcoin to Naira instantly. We offer competitive rates with zero hidden fees.
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

          <div className="w-full md:w-80 bg-slate-900 text-white rounded-2xl p-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Bitcoin</span>
              <span className="text-emerald-400 text-sm">+2.4%</span>
            </div>
            <p className="text-sm text-slate-400 mb-1">Current Rate</p>
            <p className="text-2xl font-semibold mb-4">₦110,450,230</p>
            <div className="flex gap-3">
              <button className="flex-1 bg-indigo-600 rounded-xl py-2">Buy</button>
              <button className="flex-1 bg-slate-700 rounded-xl py-2">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
