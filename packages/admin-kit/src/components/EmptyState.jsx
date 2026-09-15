export default function EmptyState({ title = 'Nothing here yet', description, action }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-14 text-center">
      <p className="text-sm font-medium text-text-dim">{title}</p>

      {description && (
        <p className="max-w-sm text-xs leading-relaxed text-text-faint">
          {description}
        </p>
      )}

      {action && <div className="mt-3">{action}</div>}
    </div>
  )
}
