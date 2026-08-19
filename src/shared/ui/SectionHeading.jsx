import { cn } from '@shared/lib/cn'

/**
 * The pill + title + subtitle block repeated at the top of nearly every
 * marketing section. `align` switches between the left-aligned (Features,
 * Blog) and centred (How it works) variants.
 */
export default function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  subtitle,
  align = 'left',
  as: Title = 'h2',
  className,
}) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'space-y-3',
        centered && 'text-center max-w-2xl mx-auto',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 bg-[#009875]/20 border border-[#009875]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00D4AA] uppercase tracking-wider">
          {Icon && <Icon className="w-3.5 h-3.5" />}
          <span>{eyebrow}</span>
        </div>
      )}

      <Title className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </Title>

      {subtitle && (
        <p
          className={cn(
            'text-slate-400 text-base md:text-lg',
            !centered && 'max-w-2xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
