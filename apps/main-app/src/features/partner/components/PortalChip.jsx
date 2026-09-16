/**
 * A selectable pill.
 *
 * A real `button` with `aria-pressed` rather than a styled div: it is a toggle,
 * so it needs to be reachable by keyboard and announced as on or off. Groups of
 * these are wrapped in a `role="group"` with a label — see InstitutionForm.
 */
export default function PortalChip({ label, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`box-border cursor-pointer rounded-full border px-5 py-2.5 font-sans text-[14px] transition-colors duration-200 ${
        selected
          ? 'border-brand bg-[rgba(33,199,176,0.14)] font-medium text-brand'
          : 'border-[#1d2938] bg-[#111a25] text-[#c3cad1] hover:border-[#2b3b4d] hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}
