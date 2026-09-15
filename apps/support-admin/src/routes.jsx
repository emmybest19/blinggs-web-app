import Disputes from './pages/Disputes'
import Overview from './pages/Overview'
import Tickets from './pages/Tickets'
import UserLookup from './pages/UserLookup'

export const routes = [
  { index: true, element: <Overview /> },
  { path: 'tickets', element: <Tickets /> },
  { path: 'users', element: <UserLookup /> },
  { path: 'disputes', element: <Disputes /> },
]
