const SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/**
 * Formats an ISO date (YYYY-MM-DD) for display.
 *
 * Parses the parts by hand rather than going through `new Date()`: a bare
 * date string is parsed as UTC, so in a negative-offset timezone the rendered
 * day would slip backwards by one.
 *
 * @param style 'short' → "Jun 08, 2025"  ·  'long' → "June 8, 2025"
 */
export function formatDate(iso, style = 'short') {
  const [year, month, day] = iso.split('-').map(Number)

  if (style === 'long') {
    return `${LONG[month - 1]} ${day}, ${year}`
  }

  return `${SHORT[month - 1]} ${String(day).padStart(2, '0')}, ${year}`
}
