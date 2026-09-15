import { cn } from '../lib/cn'

/** A bordered surface. Every block of admin content sits in one of these. */
export default function Panel({ title, description, actions, children, className, bodyClassName }) {
  const hasHeader = title || description || actions

  return (
    <section
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-surface-raised',
        className
      )}
    >
      {hasHeader && (
        <header className="flex flex-wrap items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div className="min-w-0">
            {title && (
              <h2 className="text-sm font-semibold text-text">{title}</h2>
            )}
            {description && (
              <p className="mt-1 text-xs leading-relaxed text-text-faint">
                {description}
              </p>
            )}
          </div>

          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </header>
      )}

      <div className={cn(hasHeader ? '' : 'pt-0', bodyClassName ?? 'p-5')}>{children}</div>
    </section>
  )
}
