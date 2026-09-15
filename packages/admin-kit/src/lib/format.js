/**
 * Display formatters. Blingg settles in Naira, so currency defaults to NGN and
 * every console shows the same thing for the same number.
 */

const nairaFormatter = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
})

const compactFormatter = new Intl.NumberFormat('en-NG', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

const dateFormatter = new Intl.DateTimeFormat('en-NG', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

const dateTimeFormatter = new Intl.DateTimeFormat('en-NG', {
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

export const formatNaira = (value) => nairaFormatter.format(value)

export const formatCompact = (value) => compactFormatter.format(value)

export const formatNumber = (value) => new Intl.NumberFormat('en-NG').format(value)

export const formatDate = (value) => dateFormatter.format(new Date(value))

export const formatDateTime = (value) => dateTimeFormatter.format(new Date(value))

/** "3h ago" / "2d ago" — good enough for queues and audit trails. */
export function formatRelative(value) {
  const deltaMs = Date.now() - new Date(value).getTime()
  const minutes = Math.round(deltaMs / 60000)

  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`

  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours}h ago`

  return `${Math.round(hours / 24)}d ago`
}
