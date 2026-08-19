import { Check } from 'lucide-react'

export default function EscrowPreview() {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
      <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
        <Check className="w-4 h-4" />
      </div>
      <div className="space-y-0.5">
        <p className="text-xs font-semibold text-white">
          Scam Shield &amp; Escrow Active
        </p>
        <p className="text-[10px] text-slate-400">
          Funds released only upon verified approval.
        </p>
      </div>
    </div>
  )
}
