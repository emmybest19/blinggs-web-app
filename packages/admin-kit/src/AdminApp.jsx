import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'

import { createAdminRouter } from './createAdminRouter'
import SessionProvider from './session/SessionProvider'

/**
 * The whole of a console's runtime. An app's `main.jsx` supplies its domain
 * descriptor and routes; everything else — auth, chrome, error handling —
 * comes from here.
 */
export default function AdminApp({ domain, routes }) {
  const router = useMemo(
    () => createAdminRouter({ domain, routes }),
    [domain, routes]
  )

  return (
    <SessionProvider domain={domain}>
      <RouterProvider router={router} />
    </SessionProvider>
  )
}
