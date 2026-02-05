export default function FeaturesGrid() {
  return (
    <section className="w-full md:px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        {/* Chat & Pay */}
        <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden  col-span-2 space-y-2">
          <div>
            <img src="/images/chat.png" alt="" className="w-12" />
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            Chat & Pay
          </h3>
          <p className="text-slate-600 mb-6 text-sm md:text-lg">
            Seamlessly blend conversations with transactions. Send money to
            friends directly within your chat window without ever leaving the
            conversation.
          </p>

          <ul className="space-y-3 text-slate-700 text-sm md:text-lg">
            <li className="flex items-center gap-3">
              <img src="/images/good.png" alt="" className="w-5 h-5" />
              End-to-end encryption
            </li>
            <li className="flex items-center gap-3">
              <img src="/images/good.png" alt="" className="w-5 h-5" />
              Instant settlement
            </li>
            <li className="flex items-center gap-3">
              <img src="/images/good.png" alt="" className="w-5 h-5" />
              Media sharing
            </li>
          </ul>
          <img
            src="/images/chatpay.png"
            alt=""
            className="absolute bottom-0 right-0 w-[130px] md:w-[270px]"
          />
        </div>

        {/* Smart Payments */}
        <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between text-sm md:text-lg">
          <div>
            <div>
              <img src="/images/smart.png" alt="" className="w-12" />
            </div>

            <h3 className="mt-1 text-xl md:text-2xl font-semibold text-slate-900 mb-3">
              Smart File & Link Protection
            </h3>
            <p className="text-slate-600 mb-2">
              Share with confidence on Blingg.
            </p>
          </div>

          <p className="">
            Every file and link is checked for scams, phishing, and malware
            before you open it, so you stay protected while you chat. Safe chats.
            No surprises.
          </p>

          {/* <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 flex justify-between text-sm">
              <span>Electric Bill</span>
              <span className="font-medium">₦15,000</span>
            </div>
            <div className="bg-white rounded-xl p-4 flex justify-between text-sm">
              <span>Airtime</span>
              <span className="font-medium">₦2,000</span>
            </div>
          </div> */}
        </div>

        {/* Group Power */}
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-sm relative text-sm md:text-lg">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                <img src="/images/group1.png" alt="" className="w-12" />
              </div>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold">
                Group Power
              </h3>
            </div>
            <img
              src="/images/group2.png"
              alt=""
              className="w-28 h-32 absolute top-2 right-2"
            />
          </div>

          <p className="text-slate-300 max-w-md">
            Pool funds with friends or communities. Transparent and secure.
          </p>

          <img
            src="/images/fiveimages.png"
            alt=""
            className="w-32 md:w-36 mt-20"
          />
        </div>

        {/* Crypto to Cash */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center col-span-2 md:text-lg">
          <div className="flex-1 ">
            <img src="/images/crypto.png" alt="" className="w-14" />
            <h3 className="text-xl mt-2 md:text-2xl font-semibold text-slate-900 mb-3">
              Crypto to Cash
            </h3>
            <p className="text-slate-600 mb-6 max-w-md text-sm md:text-lg">
              Convert Bitcoin to Naira instantly. We offer competitive rates
              with zero hidden fees.
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
              <div className="flex items-center gap-1">
                <img src="/images/crypto2.png" alt="" className="w-12" />
                <span className="font-medium">Bitcoin</span>
              </div>
              <div className="flex items-center">
                <img src="/images/graph.png" alt="" className="w-14" />
              </div>
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
        </div>
      </div>
    </section>
  );
}
