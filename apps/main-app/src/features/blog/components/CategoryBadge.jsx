export default function CategoryBadge({ category, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md border border-[rgba(16,190,165,0.18)] bg-[rgba(16,190,165,0.09)] px-2.5 py-1 font-sans text-[9px] font-semibold tracking-[0.1em] text-brand uppercase ${className}`}
    >
      {category}
    </span>
  )
}
