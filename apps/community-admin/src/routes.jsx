import Announcements from './pages/Announcements'
import Groups from './pages/Groups'
import Moderation from './pages/Moderation'
import Overview from './pages/Overview'

export const routes = [
  { index: true, element: <Overview /> },
  { path: 'groups', element: <Groups /> },
  { path: 'moderation', element: <Moderation /> },
  { path: 'announcements', element: <Announcements /> },
]
