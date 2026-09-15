import { useState } from 'react'

import { sendContactMessage } from '../api/contact'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY = { name: '', email: '', subject: '', message: '' }

/**
 * Owns the support form: field values, per-field validation errors and the
 * request status. The form component stays presentational.
 */
export function useContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
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

    if (!values.name.trim()) found.name = 'Enter your name.'
    if (!EMAIL_PATTERN.test(values.email.trim()))
      found.email = 'Enter a valid email address.'
    if (!values.subject.trim()) found.subject = 'Add a subject.'
    if (!values.message.trim()) found.message = 'Tell us how we can help.'

    return found
  }

  const submit = async (event) => {
    event.preventDefault()

    const found = validate()
    if (Object.keys(found).length) {
      setErrors(found)
      setStatus('idle')
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      })
      setStatus('success')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return {
    values,
    errors,
    change,
    submit,
    status,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    isError: status === 'error',
  }
}
