/**
 * Public API of @blingg/admin-kit.
 * Consoles import from here, never from a path inside src/.
 */

export { default as AdminApp } from './AdminApp'
export { createAdminRouter } from './createAdminRouter'

// Shell
export { default as AdminShell } from './components/AdminShell'
export { default as Sidebar } from './components/Sidebar'
export { default as Topbar } from './components/Topbar'
export { default as LoginPage } from './components/LoginPage'
export { default as RequireAuth } from './components/RequireAuth'
export { default as ErrorScreen } from './components/ErrorScreen'

// Primitives
export { default as Badge } from './components/Badge'
export { default as Button } from './components/Button'
export { default as DataTable } from './components/DataTable'
export { default as EmptyState } from './components/EmptyState'
export { default as PageHeader } from './components/PageHeader'
export { default as Panel } from './components/Panel'
export { StatCard, StatGrid } from './components/StatCard'

// Session
export { default as SessionProvider } from './session/SessionProvider'
export { useSession } from './session/useSession'

// Helpers
export { cn } from './lib/cn'
export {
  formatCompact,
  formatDate,
  formatDateTime,
  formatNaira,
  formatNumber,
  formatRelative,
} from './lib/format'
export { ACCENTS, getAccent } from './theme/accents'
