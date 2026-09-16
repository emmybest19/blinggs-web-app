import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DEMO_ACCESS, signInPartner } from '../api/auth'
import { partnerLinks } from '../data/partner.data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY = { email: '', passcode: '' }

/**
 * Owns the portal sign-in form: field values, per-field validation errors, the
 * remember-me and reveal-passcode toggles, and the request status. The form
 * component stays presentational.
 */
export function usePartnerSignIn() {
  const navigate = useNavigate()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [remember, setRemember] = useState(true)
  const [showPasscode, setShowPasscode] = useState(false)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const change = (field) => (event) => {
    const { value } = event.target

    setValues((current) => ({ ...current, [field]: value }))

    // Clear a field's error as soon as the user starts correcting it.
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const validate = () => {
    const found = {}

    if (!EMAIL_PATTERN.test(values.email.trim()))
      found.email = 'Enter a valid email address.'

    // No length or shape rule here on purpose: the server decides what a valid
    // passcode is, and a client-side rule would only leak that policy.
    if (!values.passcode) found.passcode = 'Enter your passcode.'

    return found
  }

  const submit = async (event) => {
    event.preventDefault()

    // Open access for review — empty fields and all. See DEMO_ACCESS.
    if (DEMO_ACCESS) {
      navigate(partnerLinks.dashboard, { replace: true })
      return
    }

    const found = validate()
    if (Object.keys(found).length) {
      setErrors(found)
      setStatus('idle')
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      await signInPartner({
        email: values.email.trim(),
        passcode: values.passcode,
        remember,
      })
      setStatus('success')
      // Clear the passcode either way — it should not outlive the request.
      setValues((current) => ({ ...current, passcode: '' }))

      /*
       * Signed in — straight to the dashboard.
       *
       * `replace` so Back from the dashboard does not land on a sign-in form
       * the partner has already cleared.
       */
      navigate(partnerLinks.dashboard, { replace: true })
    } catch {
      setStatus('error')
      setValues((current) => ({ ...current, passcode: '' }))
    }
  }

  return {
    values,
    errors,
    change,
    submit,
    remember,
    toggleRemember: () => setRemember((on) => !on),
    showPasscode,
    toggleShowPasscode: () => setShowPasscode((on) => !on),
    status,
    isSubmitting: status === 'submitting',
    // No `isSuccess`: success navigates to the dashboard, so there is no
    // success state for this form to render.
    isError: status === 'error',
  }
}
