import { ArrowRight, MessageSquare } from 'lucide-react'

export default function SupportCard() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[320px]">
      <div className="space-y-3 z-10">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">Need more help?</h3>
        <p className="text-sm text-indigo-100 leading-relaxed max-w-xs">
          Our dedicated support team is available 24/7 to assist you with any
          questions.
        </p>
      </div>

      <div className="z-10 pt-6">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all shadow-sm active:scale-95"
        >
          <span>Contact Support</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Decorative background accent */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
    </div>
  )
}
