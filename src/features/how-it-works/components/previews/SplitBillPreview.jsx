import { CheckCheck } from 'lucide-react'

export default function SplitBillPreview() {
  return (
    <div className="border border-white/10 rounded-2xl p-4 space-y-3 shadow-xl">
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
}
