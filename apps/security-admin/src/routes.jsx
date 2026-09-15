import AccessControl from './pages/AccessControl'
import Alerts from './pages/Alerts'
import DeviceAudit from './pages/DeviceAudit'
import Overview from './pages/Overview'

export const routes = [
  { index: true, element: <Overview /> },
  { path: 'access', element: <AccessControl /> },
  { path: 'alerts', element: <Alerts /> },
  { path: 'devices', element: <DeviceAudit /> },
]
