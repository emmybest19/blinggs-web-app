/**
 * The green tick that badges each partner benefit. Inline SVG rather than a
 * PNG so it stays crisp and picks up the brand colour from CSS.
 */
export default function CheckMark({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-7 shrink-0 items-center justify-center rounded-lg bg-[rgba(33,199,176,0.1)] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5 text-brand"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  )
}
