import Audit from './pages/Audit'
import Consoles from './pages/Consoles'
import Flags from './pages/Flags'
import Overview from './pages/Overview'
import Staff from './pages/Staff'

/** Children of the authenticated shell. Paths are relative to '/'. */
export const routes = [
  { index: true, element: <Overview /> },
  { path: 'staff', element: <Staff /> },
  { path: 'consoles', element: <Consoles /> },
  { path: 'flags', element: <Flags /> },
  { path: 'audit', element: <Audit /> },
]
