import { useState } from 'react'

import { registerInstitutions } from '../api/institutions'

const EMPTY_TEXT = { addedChurch: '', customName: '' }

/** Adds or removes an id, returning a new array so state stays immutable. */
const toggleIn = (list, id) =>
  list.includes(id) ? list.filter((item) => item !== id) : [...list, id]

/**
 * Owns the institution registration step: the three chip selections, the two
 * free-text fields, and the request status. The form component stays
 * presentational.
 *
 * Every chip group is multi-select. A partner can represent more than one
 * campus, and more than one kind of institution — a university chaplaincy is
 * both — so nothing here is exclusive.
 */
export function useInstitutionRegistration() {
  const [types, setTypes] = useState([])
  const [selectedUniversities, setSelectedUniversities] = useState([])
  const [selectedChurches, setSelectedChurches] = useState([])
  const [text, setText] = useState(EMPTY_TEXT)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  // Any change is progress towards a valid form, so clear the complaint.
  const clearError = () => setError(null)

  const toggleType = (id) => {
    setTypes((current) => toggleIn(current, id))
    clearError()
  }

  const toggleUniversity = (id) => {
    setSelectedUniversities((current) => toggleIn(current, id))
    clearError()
  }

  const toggleChurch = (id) => {
    setSelectedChurches((current) => toggleIn(current, id))
    clearError()
  }

  const changeText = (field) => (event) => {
    const { value } = event.target
    setText((current) => ({ ...current, [field]: value }))
    clearError()
  }

  const submit = async (event) => {
    event.preventDefault()

    const addedChurch = text.addedChurch.trim()
    const customName = text.customName.trim()

    // The only rule worth enforcing here: the step has to actually name an
    // institution, by whichever of the four routes. Which route is up to them.
    const named =
      selectedUniversities.length > 0 ||
      selectedChurches.length > 0 ||
      addedChurch ||
      customName

    if (!named) {
      setError(
        'Pick at least one institution, or add your own below.',
      )
      setStatus('idle')
      return
    }

    setStatus('submitting')
    setError(null)

    try {
      await registerInstitutions({
        types,
        universities: selectedUniversities,
        churches: selectedChurches,
        addedChurch,
        customName,
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return {
    types,
    toggleType,
    selectedUniversities,
    toggleUniversity,
    selectedChurches,
    toggleChurch,
    text,
    changeText,
    submit,
    error,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    isError: status === 'error',
  }
}
