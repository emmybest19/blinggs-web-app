export default function FaqSearch({ query, onChange }) {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <label htmlFor="faq-search" className="sr-only">
        Search for answers
      </label>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6f7477]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="size-[15px]"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.2-3.2" />
        </svg>
      </span>

      <input
        id="faq-search"
        type="search"
        value={query}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for answers..."
        className="box-border h-11 w-full rounded-[10px] border border-[#2a2c2d] bg-[#141516] pr-4 pl-11 font-sans text-[13px] text-[#e6e6e6] outline-none transition-colors placeholder:text-[#666b6d] focus:border-[rgba(30,195,170,0.6)]"
      />
    </div>
  )
}
