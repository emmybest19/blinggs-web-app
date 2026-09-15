const ICONS = {
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
}

/** Icon + label + value. Renders as a link when the channel has an href. */
export default function ContactCard({ channel }) {
  const body = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(45,209,189,0.2)] bg-[rgba(45,209,189,0.08)] text-brand">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-[17px]"
        >
          {ICONS[channel.icon]}
        </svg>
      </span>

      <span className="min-w-0">
        <span className="block font-sans text-[11px] text-[#6f7477]">
          {channel.label}
        </span>
        <span className="block truncate font-sans text-[13.5px] font-semibold text-[#e6e6e6] sm:text-[14.5px]">
          {channel.value}
        </span>
      </span>
    </>
  )

  const shell =
    'flex items-center gap-4 rounded-xl border border-[#232323] bg-[#121212] px-5 py-4 no-underline transition-colors duration-250 hover:border-[#2e2e2e]'

  if (channel.href) {
    return (
      <a href={channel.href} className={shell}>
        {body}
      </a>
    )
  }

  return <div className={shell}>{body}</div>
}
