import { cn } from '../lib/cn'

const VARIANTS = {
  primary: 'bg-brand text-ink-deep font-semibold hover:bg-brand-dark disabled:hover:bg-brand',
  secondary: 'border border-border-strong bg-white/5 text-text hover:bg-white/10',
  ghost: 'text-text-dim hover:bg-white/5 hover:text-text',
  danger: 'border border-danger/40 bg-danger/10 text-danger hover:bg-danger/20',
}

const SIZES = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-[13px]',
}

export default function Button({
  variant = 'secondary',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg transition-colors duration-150',
        'disabled:cursor-not-allowed disabled:opacity-55',
        VARIANTS[variant] ?? VARIANTS.secondary,
        SIZES[size] ?? SIZES.md,
        className
      )}
      {...props}
    />
  )
}
