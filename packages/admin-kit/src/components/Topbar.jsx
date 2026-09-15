import { useState } from 'react'

import { cn } from '../lib/cn'
import { useSession } from '../session/useSession'
import { getAccent } from '../theme/accents'
import Button from './Button'

export default function Topbar({ domain, onOpenMenu }) {
  const { user, signOut } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)
  const accent = getAccent(domain.accent ?? domain.id)

  const initials = (user?.name ?? '?')
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between gap-4 border-b border-border bg-ink-deep/95 px-4 backdrop-blur sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open navigation"
          className="flex size-9 shrink-0 flex-col items-center justify-center gap-[5px] rounded-lg text-text-dim hover:bg-white/5 lg:hidden"
        >
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </button>

        <span className={cn('hidden text-xs font-medium sm:block', accent.text)}>
          {domain.console}
        </span>
      </div>

      <div className="relative flex shrink-0 items-center gap-3">
        <span className="hidden text-right sm:block">
          <span className="block text-xs font-medium text-text">{user?.name}</span>
          <span className="block text-[11px] text-text-faint">{user?.role}</span>
        </span>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Account menu"
          aria-expanded={menuOpen}
          className={cn(
            'flex size-9 items-center justify-center rounded-full border text-[11px] font-semibold text-text',
            accent.border,
            accent.softBg
          )}
        >
          {initials}
        </button>

        {menuOpen && (
          <>
            {/* Click-away layer so the menu closes without a document listener */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            <div className="absolute top-full right-0 z-20 mt-2 w-56 rounded-xl border border-border bg-surface-raised p-2 shadow-xl shadow-black/40">
              <div className="border-b border-border px-3 pt-1.5 pb-3">
                <p className="truncate text-xs font-medium text-text">{user?.name}</p>
                <p className="truncate text-[11px] text-text-faint">{user?.email}</p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="mt-2 w-full justify-start"
              >
                Sign out
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
