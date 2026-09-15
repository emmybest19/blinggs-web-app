import { createBrowserRouter } from 'react-router-dom'

import AdminShell from './components/AdminShell'
import ErrorScreen from './components/ErrorScreen'
import LoginPage from './components/LoginPage'
import RequireAuth from './components/RequireAuth'

/**
 * Builds the router every console shares: a public `/login`, an authenticated
 * shell wrapping the console's own routes, and a catch-all.
 *
 * `routes` is a plain React Router children array, so a console can use
 * `lazy`, nested routes, loaders — anything the router supports.
 *
 * Kept out of AdminApp.jsx so that file exports a component and nothing else,
 * which is what Fast Refresh needs to hot-reload the shell.
 */
export function createAdminRouter({ domain, routes }) {
  return createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage domain={domain} />,
    },
    {
      path: '/',
      element: (
        <RequireAuth>
          <AdminShell domain={domain} />
        </RequireAuth>
      ),
      errorElement: <ErrorScreen />,
      children: routes,
    },
    {
      path: '*',
      element: (
        <ErrorScreen
          title="Page not found"
          description="That route does not exist in this console."
        />
      ),
    },
  ])
}
