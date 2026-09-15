import { createContext } from 'react'

export const SessionContext = createContext(null)

/**
 * Sessions are namespaced per console. Signing into finance-admin does not sign
 * you into security-admin — the whole point of shipping these as separate apps
 * is that access to one is not access to another.
 */
const storageKey = (domainId) => `blingg.admin.session.${domainId}`

export function readStoredSession(domainId) {
  try {
    const raw = window.localStorage.getItem(storageKey(domainId))
    return raw ? JSON.parse(raw) : null
  } catch {
    // Private mode, blocked storage, or corrupt JSON — treat as signed out.
    return null
  }
}

export function writeStoredSession(domainId, session) {
  try {
    if (session) {
      window.localStorage.setItem(storageKey(domainId), JSON.stringify(session))
    } else {
      window.localStorage.removeItem(storageKey(domainId))
    }
  } catch {
    // Non-fatal: the session still lives in React state for this tab.
  }
}

/**
 * Stand-in for the real staff auth endpoint.
 *
 * TODO: replace with a POST to the identity service. Everything above this
 * function — the provider, the guard, the login screen — stays as it is.
 */
export async function authenticate({ email, password, domain }) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (!email || !password) {
    throw new Error('Enter your staff email and password.')
  }

  const [handle] = email.split('@')
  const name = handle
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ')

  return {
    email,
    name: name || 'Staff User',
    role: domain.role,
    domain: domain.id,
    signedInAt: new Date().toISOString(),
  }
}
