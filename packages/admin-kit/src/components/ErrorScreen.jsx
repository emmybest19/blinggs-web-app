import { Link, useRouteError } from 'react-router-dom'

/**
 * Catches both thrown render errors and unmatched routes, so no console can
 * land a staff member on a blank white page.
 */
export default function ErrorScreen({ title, description }) {
  const error = useRouteError()
  const status = error?.status

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-ink-deep px-6 text-center">
      <p className="text-4xl font-semibold text-text-faint tabular-nums">
        {status ?? '!'}
      </p>

      <h1 className="text-lg font-semibold text-text">
        {title ?? (status === 404 ? 'Page not found' : 'Something went wrong')}
      </h1>

      <p className="max-w-sm text-[13px] leading-relaxed text-text-dim">
        {description ??
          error?.statusText ??
          error?.message ??
          'This view could not be loaded. Try again, or head back to the dashboard.'}
      </p>

      <Link
        to="/"
        className="mt-3 inline-flex h-10 items-center justify-center rounded-lg border border-border-strong bg-white/5 px-4 text-[13px] text-text no-underline transition-colors hover:bg-white/10"
      >
        Back to dashboard
      </Link>
    </div>
  )
}
