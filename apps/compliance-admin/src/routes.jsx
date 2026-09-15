import Cases from './pages/Cases'
import KycQueue from './pages/KycQueue'
import Overview from './pages/Overview'
import Reports from './pages/Reports'
import Screening from './pages/Screening'

export const routes = [
  { index: true, element: <Overview /> },
  { path: 'kyc', element: <KycQueue /> },
  { path: 'screening', element: <Screening /> },
  { path: 'cases', element: <Cases /> },
  { path: 'reports', element: <Reports /> },
]
