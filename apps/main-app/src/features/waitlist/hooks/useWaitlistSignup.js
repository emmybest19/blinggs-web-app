import { useState } from 'react'

import { submitWaitlistSignup } from '../api/waitlist'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Owns the sign-up form's state: the typed email, the request status and any
 * validation or transport error. Components stay presentational.
 */
export function useWaitlistSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const changeEmail = (value) => {
    setEmail(value)
    if (status === 'error') {
      setStatus('idle')
      setError(null)
    }
  }

  const submit = async (event) => {
    event.preventDefault()

    const trimmed = email.trim()

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus('error')
      setError('Enter a valid email address.')
      return
    }

    setStatus('submitting')
    setError(null)

    try {
      await submitWaitlistSignup(trimmed)
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return {
    email,
    changeEmail,
    submit,
    status,
    error,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
  }
}
