import { Minus, Plus } from 'lucide-react'

import { useDisclosure } from '@shared/hooks/useDisclosure'
import { cn } from '@shared/lib/cn'

export default function AccordionItem({ q, a }) {
  const { isOpen, toggle } = useDisclosure()

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-4 text-left group transition-colors"
      >
        <span className="text-sm md:text-base font-medium text-gray-900 group-hover:text-indigo-600">
          {q}
        </span>
        <span className="text-indigo-500 shrink-0 ml-2">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        )}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}
