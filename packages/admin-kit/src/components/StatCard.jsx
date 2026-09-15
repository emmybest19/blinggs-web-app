import { cn } from '../lib/cn'

const DELTA_TONES = {
  up: 'text-success',
  down: 'text-danger',
  flat: 'text-text-faint',
}

export function StatCard({ label, value, delta, deltaDirection = 'flat', hint }) {
  return (
    <div className="rounded-xl border border-border bg-surface-raised px-5 py-4">
      <p className="text-[11px] font-medium tracking-wide text-text-faint uppercase">
        {label}
      </p>

      <p className="mt-2 text-2xl leading-none font-semibold text-text tabular-nums">
        {value}
      </p>

      {(delta || hint) && (
        <div className="mt-2.5 flex items-baseline gap-2">
          {delta && (
            <span
              className={cn(
                'text-xs font-medium tabular-nums',
                DELTA_TONES[deltaDirection]
              )}
            >
              {deltaDirection === 'up' ? '▲' : deltaDirection === 'down' ? '▼' : '—'} {delta}
            </span>
          )}

          {hint && <span className="text-[11px] text-text-faint">{hint}</span>}
        </div>
      )}
    </div>
  )
}

export function StatGrid({ stats }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}
