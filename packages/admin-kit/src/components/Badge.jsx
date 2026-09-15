import { cn } from '../lib/cn'

const TONES = {
  neutral: 'border-border-strong bg-white/5 text-text-dim',
  success: 'border-success/30 bg-success/10 text-success',
  warning: 'border-warning/30 bg-warning/10 text-warning',
  danger: 'border-danger/30 bg-danger/10 text-danger',
  info: 'border-info/30 bg-info/10 text-info',
}

export default function Badge({ tone = 'neutral', children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap',
        TONES[tone] ?? TONES.neutral,
        className
      )}
    >
      {children}
    </span>
  )
}
