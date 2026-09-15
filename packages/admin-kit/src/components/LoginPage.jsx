import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { cn } from '../lib/cn'
import { useSession } from '../session/useSession'
import { getAccent } from '../theme/accents'
import Button from './Button'

export default function LoginPage({ domain }) {
  const { signIn, isAuthenticated, isSubmitting, error } = useSession()
  const [form, setForm] = useState({ email: '', password: '' })
  const accent = getAccent(domain.accent ?? domain.id)

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    signIn(form)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-deep px-4 py-12">
      <div className="w-full max-w-[380px]">
        <div className="mb-8 flex flex-col items-center text-center">
          <span
            className={cn(
              'mb-4 flex size-11 items-center justify-center rounded-xl text-base font-bold text-ink-deep',
              accent.bg
            )}
          >
            {domain.short}
          </span>

          <h1 className="text-lg font-semibold text-text">{domain.console}</h1>

          <p className="mt-1.5 text-[13px] text-text-faint">
            Sign in with your Blingg staff account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-xl border border-border bg-surface-raised p-6"
        >
          <label
            htmlFor="admin-email"
            className="mb-1.5 block text-xs font-medium text-text-dim"
          >
            Staff email
          </label>

          <input
            id="admin-email"
            type="email"
            autoComplete="username"
            value={form.email}
            onChange={update('email')}
            placeholder={`you@blingg.africa`}
            className="mb-4 h-10 w-full rounded-lg border border-border-strong bg-ink px-3 text-[13px] text-text outline-none transition-colors placeholder:text-text-faint focus:border-brand/60"
          />

          <label
            htmlFor="admin-password"
            className="mb-1.5 block text-xs font-medium text-text-dim"
          >
            Password
          </label>

          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={update('password')}
            placeholder="••••••••"
            aria-describedby={error ? 'admin-login-error' : undefined}
            className="h-10 w-full rounded-lg border border-border-strong bg-ink px-3 text-[13px] text-text outline-none transition-colors placeholder:text-text-faint focus:border-brand/60"
          />

          <div aria-live="polite" className="min-h-[18px]">
            {error && (
              <p id="admin-login-error" className="mt-2.5 text-xs text-danger">
                {error}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="mt-4 w-full"
          >
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-text-faint">
          This console is restricted to {domain.name.toLowerCase()} staff. Access
          is logged and audited.
        </p>
      </div>
    </div>
  )
}
