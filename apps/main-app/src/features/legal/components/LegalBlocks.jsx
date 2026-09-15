/**
 * Renders the block array of a legal section.
 *
 * Body copy is set in Inter (`font-sans`) rather than the site-wide Nunito the
 * global stylesheet applies to <p>: a forty-section contract is dense reading,
 * and the UI font holds up far better at length than the rounded display face.
 */

const paragraph = 'font-sans text-[13px] leading-[1.8] text-[#9a9fa3] xs:text-sm sm:text-[15px]'

export default function LegalBlocks({ blocks }) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`

    switch (block.type) {
      case 'p':
        return (
          <p key={key} className={`${paragraph} mt-4 first:mt-0`}>
            {block.text}
          </p>
        )

      case 'list':
        return (
          <ul key={key} className="mt-4 flex flex-col gap-2.5 first:mt-0">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] size-1.5 shrink-0 rounded-full bg-[#2ca897]"
                />
                <span className={paragraph}>{item}</span>
              </li>
            ))}
          </ul>
        )

      case 'subheading':
        return (
          <h3
            key={key}
            className="mt-7 mb-1 text-[13px] font-semibold text-[#d6d6d6] xs:text-sm sm:text-[15px]"
          >
            {block.text}
          </h3>
        )

      case 'callout':
        return (
          <p
            key={key}
            className="mt-5 rounded-[10px] border border-[rgba(33,199,176,0.18)] bg-[rgba(33,199,176,0.06)] px-4 py-3 text-center text-sm font-semibold tracking-[0.01em] text-[#2ed1bd] sm:text-base"
          >
            {block.text}
          </p>
        )

      case 'note':
        return (
          <p
            key={key}
            className="mt-5 rounded-[10px] border border-[rgba(245,158,11,0.22)] bg-[rgba(245,158,11,0.07)] px-4 py-3 font-sans text-[13px] leading-[1.7] font-medium text-[#e0b062] sm:text-sm"
          >
            {block.text}
          </p>
        )

      case 'contact':
        return (
          <dl
            key={key}
            className="mt-4 flex flex-col gap-3 rounded-[10px] border border-ink-line bg-[#141414] px-5 py-5 first:mt-0"
          >
            {block.entries.map((entry) => (
              <div
                key={entry.label}
                className="flex flex-col gap-0.5 sm:flex-row sm:gap-4"
              >
                <dt className="font-sans text-[11px] font-medium tracking-wide text-[#6f7477] uppercase sm:w-[150px] sm:shrink-0">
                  {entry.label}
                </dt>

                <dd className="font-sans text-[13px] leading-[1.6] text-[#b9bdc0] sm:text-sm">
                  {entry.href ? (
                    <a
                      href={entry.href}
                      className="text-[#2ed1bd] no-underline transition-colors hover:text-[#4ee0ce] hover:underline"
                    >
                      {entry.value}
                    </a>
                  ) : (
                    entry.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )

      default:
        return null
    }
  })
}
