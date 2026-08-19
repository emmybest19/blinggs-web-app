import Modal from '@shared/ui/Modal'

export default function ComingSoonModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0F1B2D] p-8 text-center shadow-2xl">
        {/* Glow */}
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/50 transition hover:text-white"
        >
          ✕
        </button>

        {/* Animated Dots */}
        <div className="mb-8 flex justify-center gap-3">
          {[0, 0.2, 0.4].map((delay) => (
            <span
              key={delay}
              className="h-3 w-3 rounded-full bg-emerald-400 animate-bounce"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-white">Coming Soon</h2>

        <p className="mt-4 text-sm leading-7 text-white/60">
          We’re currently developing the app, Blingg will be launched and ready
          to use shortly.
        </p>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
        >
          Continue
        </button>
      </div>
    </Modal>
  )
}
