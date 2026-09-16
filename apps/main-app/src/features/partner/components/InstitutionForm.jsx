import {
  churches,
  institutionCopy,
  institutionTypes,
  universities,
} from '../data/institutions.data'
import { useInstitutionRegistration } from '../hooks/useInstitutionRegistration'
import PortalChip from './PortalChip'
import { ERROR, FIELD, FIELD_OK, LABEL } from './PortalField'
import { SUBMIT } from './PortalField'

/** One labelled row of chips. */
function ChipGroup({ id, label, options, selected, onToggle }) {
  return (
    <div>
      <p id={id} className={LABEL}>
        {label}
      </p>

      {/* role="group" ties the chips to the label above them, so the toggles
        * are not announced as six unrelated buttons. */}
      <div role="group" aria-labelledby={id} className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <PortalChip
            key={option.id}
            label={option.label}
            selected={selected.includes(option.id)}
            onToggle={() => onToggle(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default function InstitutionForm() {
  const {
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
    isSubmitting,
    isSuccess,
    isError,
  } = useInstitutionRegistration()

  return (
    <>
      <h1 className="text-[30px] leading-[1.2] font-bold tracking-[-0.02em] text-white sm:text-[36px]">
        {institutionCopy.title}
      </h1>

      <p className="mt-3.5 font-sans text-[14px] leading-[1.65] text-[#868f99]">
        {institutionCopy.subtitle}
      </p>

      <form onSubmit={submit} noValidate className="mt-8 flex flex-col gap-6">
        <ChipGroup
          id="institution-type"
          label={institutionCopy.typeLabel}
          options={institutionTypes}
          selected={types}
          onToggle={toggleType}
        />

        <ChipGroup
          id="institution-universities"
          label={institutionCopy.universitiesLabel}
          options={universities}
          selected={selectedUniversities}
          onToggle={toggleUniversity}
        />

        <ChipGroup
          id="institution-churches"
          label={institutionCopy.churchesLabel}
          options={churches}
          selected={selectedChurches}
          onToggle={toggleChurch}
        />

        {/* Add your church */}
        <div>
          <label htmlFor="institution-added-church" className={LABEL}>
            {institutionCopy.addChurchLabel}
          </label>

          <input
            id="institution-added-church"
            name="addedChurch"
            type="text"
            autoComplete="off"
            value={text.addedChurch}
            onChange={changeText('addedChurch')}
            placeholder={institutionCopy.addChurchPlaceholder}
            className={`${FIELD} ${FIELD_OK} h-[52px]`}
          />
        </div>

        {/* Custom institution */}
        <div>
          <label htmlFor="institution-custom" className={LABEL}>
            {institutionCopy.customLabel}
          </label>

          <input
            id="institution-custom"
            name="customName"
            type="text"
            autoComplete="off"
            value={text.customName}
            onChange={changeText('customName')}
            placeholder={institutionCopy.customPlaceholder}
            aria-describedby="institution-custom-hint"
            className={`${FIELD} ${FIELD_OK} h-[52px]`}
          />

          <p
            id="institution-custom-hint"
            className="mt-2.5 font-sans text-[13px] text-[#6b7681]"
          >
            {institutionCopy.customHint}
          </p>
        </div>

        {/* One error for the whole step — see the hook for why it is the only
          * rule worth enforcing client-side. */}
        {error && (
          <p role="alert" className={`${ERROR} mt-0`}>
            {error}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className={SUBMIT}>
          {isSubmitting
            ? institutionCopy.submittingLabel
            : institutionCopy.submitLabel}
        </button>
      </form>

      {/* Reserved space so the panel does not jump when a message appears */}
      <div aria-live="polite" className="min-h-[22px]">
        {isSuccess && (
          <p className="mt-4 text-center font-sans text-[13px] font-medium text-brand">
            Institutions saved — the partner dashboard is not live yet.
          </p>
        )}

        {isError && (
          <p className="mt-4 text-center font-sans text-[13px] text-[#ff8080]">
            We could not save that. Please try again.
          </p>
        )}
      </div>
    </>
  )
}
