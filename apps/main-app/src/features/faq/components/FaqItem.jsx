/**
 * One question. The trigger is a real <button> with aria-expanded, and the
 * answer is a region labelled by it, so the accordion works with a keyboard and
 * announces its state to a screen reader.
 */
export default function FaqItem({ item, isOpen, onToggle }) {
  const buttonId = `faq-trigger-${item.id}`
  const panelId = `faq-panel-${item.id}`

  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors duration-250 ${
        isOpen
          ? 'border-[#2e2e2e] bg-[#151515]'
          : 'border-[#232323] bg-[#121212] hover:border-[#2e2e2e]'
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-[18px]"
        >
          <span className="text-[13.5px] leading-[1.45] font-semibold text-[#ededed] sm:text-[15px]">
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className={`flex size-5 shrink-0 items-center justify-center text-[17px] leading-none transition-colors duration-250 ${
              isOpen ? 'text-brand' : 'text-[#6f7477]'
            }`}
          >
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>

      {/* Unmounted when closed rather than hidden, so collapsed answers are not
          read out by assistive tech or found by in-page browser search. */}
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-5 pb-5 sm:px-6 sm:pb-[18px]"
        >
          <p className="max-w-[880px] font-sans text-[12.5px] leading-[1.75] text-[#8b9094] sm:text-[13.5px]">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}
