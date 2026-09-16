/**
 * Copy and options for the institution registration step at /affiliate/apply.
 *
 * The three lists are hard-coded for now. When the partner API lands they are
 * the obvious thing to fetch — the form reads them as plain arrays, so the
 * shape does not have to change.
 */
export const institutionCopy = {
  title: 'Register Your Affiliated Institutions',
  subtitle:
    'Select the organizations, universities, or religious communities you represent to link them to your dashboard.',

  typeLabel: 'Institution Type',
  universitiesLabel: 'Select Universities (Highly Active)',
  churchesLabel: 'Affiliated Churches',

  addChurchLabel: 'Add Your Church',
  addChurchPlaceholder: 'e.g. House on the Rock, Elevation Church',

  customLabel: 'Custom Institution Name',
  customPlaceholder: 'Enter custom institution…',
  customHint: "Can't find your institution? Add it here.",

  submitLabel: 'Continue',
  submittingLabel: 'Saving…',
}

export const institutionTypes = [
  { id: 'university', label: 'University' },
  { id: 'church', label: 'Church' },
  { id: 'other', label: 'Other / Custom' },
]

export const universities = [
  { id: 'unilag', label: 'University of Lagos' },
  { id: 'covenant', label: 'Covenant University' },
  { id: 'babcock', label: 'Babcock University' },
  { id: 'ui', label: 'University of Ibadan' },
  { id: 'oau', label: 'Obafemi Awolowo University' },
  { id: 'lasu', label: 'Lagos State University' },
]

export const churches = [
  { id: 'rccg', label: 'RCCG' },
  { id: 'winners', label: 'Winners Chapel' },
  { id: 'deeper-life', label: 'Deeper Life' },
  { id: 'catholic', label: 'Catholic Church' },
  { id: 'anglican', label: 'Anglican Church' },
]
