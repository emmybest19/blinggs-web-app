/**
 * Joins conditional class names, dropping falsy values.
 * Deliberately dependency-free — the project has no `clsx`/`tailwind-merge`.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
