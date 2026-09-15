import { NavLink } from 'react-router-dom'

import { cn } from '../lib/cn'
import { getAccent } from '../theme/accents'

export default function Sidebar({ domain, open, onNavigate }) {
  const accent = getAccent(domain.accent ?? domain.id)

  return (
    <>
      {/* Scrim — only rendered as a click target while the drawer is open */}
      <div
        onClick={onNavigate}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 z-30 bg-black/60 transition-opacity duration-200 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-border bg-ink-deep',
          'transition-transform duration-200 lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Console identity */}
        <div className="flex h-16 shrink-0 items-center gap-3 border-b border-border px-5">
          <span
            className={cn(
              'flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-ink-deep',
              accent.bg
            )}
          >
            {domain.short}
          </span>

          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-text">
              {domain.name}
            </span>
            <span className="block truncate text-[11px] text-text-faint">
              Blingg Admin
            </span>
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="flex flex-col gap-0.5">
            {domain.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-[13px] transition-colors',
                      isActive
                        ? cn(accent.softBg, accent.text, 'font-medium')
                        : 'text-text-dim hover:bg-white/5 hover:text-text'
                    )
                  }
                >
                  <span className="truncate">{item.label}</span>

                  {item.badge != null && (
                    <span className="shrink-0 rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-text-dim tabular-nums">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-border px-5 py-3.5">
          <p className="text-[11px] leading-relaxed text-text-faint">
            {domain.environment ?? 'Staging environment'}
          </p>
        </div>
      </aside>
    </>
  )
}
