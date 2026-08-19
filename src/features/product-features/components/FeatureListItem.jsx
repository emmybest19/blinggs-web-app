import { ArrowRight } from 'lucide-react'

import { cn } from '@shared/lib/cn'

export default function FeatureListItem({ feature, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(feature)}
      aria-pressed={isSelected}
      className={cn(
        'w-full text-left flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all duration-200',
        isSelected
          ? 'bg-[#009875] text-white shadow-lg'
          : 'bg-white/5 hover:bg-white/10 text-slate-300'
      )}
    >
      <span className="flex items-center gap-3.5">
        <img
          src={feature.image}
          alt=""
          className="w-12 h-12 rounded-xl object-cover object-top shrink-0 border border-white/20 bg-slate-900"
        />
        <span className="block">
          <span className="block text-sm font-bold leading-snug">
            {feature.title}
          </span>
          <span
            className={cn(
              'block text-xs line-clamp-1',
              isSelected ? 'text-emerald-100' : 'text-slate-400'
            )}
          >
            {feature.description}
          </span>
        </span>
      </span>

      <ArrowRight
        className={cn(
          'w-4 h-4 shrink-0',
          isSelected ? 'text-white' : 'text-slate-500'
        )}
      />
    </button>
  )
}
