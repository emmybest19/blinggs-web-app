import { useEffect } from 'react'
import { cn } from '@shared/lib/cn'

/**
 * Backdrop + centred panel shared by every dialog in the app.
 * Handles the two behaviours each modal used to re-implement by hand:
 * closing on backdrop click and closing on Escape.
 */
export default function Modal({ isOpen, onClose, className, children }) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className={cn('relative z-10 w-full', className)}>{children}</div>
    </div>
  )
}
