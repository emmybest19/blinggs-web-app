import { cn } from '@shared/lib/cn'

export default function LegalHero({ eyebrow, titleLead, titleAccent, intro, meta, aside }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-6 sm:p-10 lg:p-14">
      {/* Glow */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div
        className={cn(
          'relative z-10',
          aside
            ? 'grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center'
            : 'max-w-4xl'
        )}
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {eyebrow}
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {titleLead}
            <span className="text-emerald-400"> {titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            {intro}
          </p>

          {meta?.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <p className="text-sm text-white/50">{item.label}</p>
                  <p className="mt-1 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {aside}
      </div>
    </section>
  )
}
