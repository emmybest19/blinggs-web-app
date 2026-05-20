// import React from 'react'

// export default function ComingSoonModal({ isOpen, onClose }) {
//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4">
//       {/* Backdrop */}
//       <div
//         onClick={onClose}
//         className="absolute inset-0 bg-black/70 backdrop-blur-md"
//       />

//       {/* Floating Glow Background */}
//       <div className="absolute top-[-120px] left-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-3xl animate-pulse"></div>

//       <div
//         className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse"
//         style={{ animationDelay: '1s' }}
//       ></div>

//       {/* Modal */}
//       <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1220] shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
//         {/* Animated Top Border */}
//         <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:rotate-90 hover:bg-white/10 hover:text-white"
//         >
//           ✕
//         </button>

//         <div className="relative px-6 py-12 sm:px-10">
//           {/* Floating Animated Dots */}
//           <div className="absolute left-10 top-12 flex gap-2">
//             <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce"></span>
//             <span
//               className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce"
//               style={{ animationDelay: '0.2s' }}
//             ></span>
//             <span
//               className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce"
//               style={{ animationDelay: '0.4s' }}
//             ></span>
//           </div>

//           <div className="absolute right-12 bottom-16 flex gap-2">
//             <span
//               className="h-2 w-2 rounded-full bg-indigo-400 animate-ping"
//               style={{ animationDuration: '2s' }}
//             ></span>
//             <span
//               className="h-2 w-2 rounded-full bg-indigo-400 animate-ping"
//               style={{
//                 animationDelay: '0.6s',
//                 animationDuration: '2s',
//               }}
//             ></span>
//           </div>

//           {/* Icon */}
//           <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
//             {/* Outer Ring */}
//             <div className="absolute h-full w-full rounded-full border border-emerald-400/20 animate-spin-slow"></div>

//             {/* Middle Ring */}
//             <div className="absolute h-[85px] w-[85px] rounded-full border border-indigo-400/20 animate-reverse-spin"></div>

//             {/* Core */}
//             <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-indigo-500 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
//               <span className="text-4xl">🚀</span>
//             </div>
//           </div>

//           {/* Text */}
//           <div className="mt-10 text-center">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
//               <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
//               Launching Soon
//             </div>

//             <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
//               Something
//               <span className="text-emerald-400"> Amazing</span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-md text-sm leading-8 text-white/60 sm:text-base">
//               The Blingg mobile experience is currently being crafted with
//               speed, security, and community in mind. Get ready for a
//               beautifully connected financial ecosystem.
//             </p>
//           </div>

//           {/* Animated Progress */}
//           <div className="mt-10">
//             <div className="mb-3 flex items-center justify-between text-sm text-white/50">
//               <span>Development Progress</span>
//               <span>87%</span>
//             </div>

//             <div className="h-3 overflow-hidden rounded-full bg-white/10">
//               <div className="progress-bar h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500"></div>
//             </div>
//           </div>

//           {/* Features */}
//           <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
//             {[
//               {
//                 icon: '💬',
//                 title: 'Messaging',
//               },
//               {
//                 icon: '💸',
//                 title: 'Payments',
//               },
//               {
//                 icon: '🤝',
//                 title: 'Communities',
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-white/10"
//               >
//                 <div className="text-2xl">{item.icon}</div>

//                 <p className="mt-3 text-sm font-medium text-white/80">
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Button */}
//           <button
//             onClick={onClose}
//             className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-indigo-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(16,185,129,0.35)]"
//           >
//             Continue Exploring
//             <span className="text-lg">✨</span>
//           </button>

//           {/* Footer */}
//           <p className="mt-6 text-center text-xs tracking-wide text-white/40">
//             Blingg — Connect. Contribute. Grow Together.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react'

export default function ComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-[#0F1B2D] p-8 text-center shadow-2xl">
        {/* Glow */}
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"></div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/50 transition hover:text-white"
        >
          ✕
        </button>

        {/* Animated Dots */}
        <div className="mb-8 flex justify-center gap-3">
          <span className="h-3 w-3 rounded-full bg-emerald-400 animate-bounce"></span>

          <span
            className="h-3 w-3 rounded-full bg-emerald-400 animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></span>

          <span
            className="h-3 w-3 rounded-full bg-emerald-400 animate-bounce"
            style={{ animationDelay: '0.4s' }}
          ></span>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-semibold text-white">Coming Soon</h2>

        <p className="mt-4 text-sm leading-7 text-white/60">
          We’re currently developing the app, Blingg will be launched and ready
          to use shortly.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
