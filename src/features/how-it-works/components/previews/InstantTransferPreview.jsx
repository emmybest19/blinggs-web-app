export default function InstantTransferPreview() {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs">
          P2P
        </div>
        <div>
          <p className="text-xs font-semibold text-white">
            Instant Wallet Transfer
          </p>
          <p className="text-[10px] text-slate-400">Settled in 0.2 seconds</p>
        </div>
      </div>
      <span className="bg-sky-500/20 border border-sky-500/30 text-sky-300 text-[10px] px-2.5 py-1 rounded-full font-semibold">
        0% Fee
      </span>
    </div>
  )
}
