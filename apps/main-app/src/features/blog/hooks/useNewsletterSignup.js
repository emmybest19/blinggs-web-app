import { useState } from 'react'

import { subscribeToNewsletter } from '../api/newsletter'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Owns the newsletter form's state: the typed email, the request status and any
 * validation or transport error. The form stays presentational.
 */
export function useNewsletterSignup() {
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
      await subscribeToNewsletter(trimmed)
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
