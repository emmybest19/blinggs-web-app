export default function SavingsPoolPreview() {
  return (
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
}
