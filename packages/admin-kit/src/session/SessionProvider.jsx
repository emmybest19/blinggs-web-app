import { useCallback, useMemo, useState } from 'react'

import {
  SessionContext,
  authenticate,
  readStoredSession,
  writeStoredSession,
} from './sessionStore'

export default function SessionProvider({ domain, children }) {
  // Read straight from storage on first render so a refresh does not flash the
  // login screen before the stored session is restored.
  const [user, setUser] = useState(() => readStoredSession(domain.id))
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const [error, setError] = useState(null)

  const signIn = useCallback(
    async ({ email, password }) => {
      setStatus('submitting')
      setError(null)

      try {
        const session = await authenticate({ email, password, domain })
        writeStoredSession(domain.id, session)
        setUser(session)
        setStatus('idle')
        return true
      } catch (caught) {
        setStatus('error')
        setError(caught.message || 'Could not sign you in. Try again.')
        return false
      }
    },
    [domain]
  )

  const signOut = useCallback(() => {
    writeStoredSession(domain.id, null)
    setUser(null)
    setStatus('idle')
    setError(null)
  }, [domain.id])

  const value = useMemo(
    () => ({
      user,
      domain,
      signIn,
      signOut,
      status,
      error,
      isAuthenticated: Boolean(user),
      isSubmitting: status === 'submitting',
    }),
    [user, domain, signIn, signOut, status, error]
  )

  return <SessionContext value={value}>{children}</SessionContext>
}
