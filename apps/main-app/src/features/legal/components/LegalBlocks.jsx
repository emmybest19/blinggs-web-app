import { Fragment } from 'react'

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

      case 'flow':
        return (
          <div
            key={key}
            className="mt-5 flex flex-wrap items-center gap-2 rounded-[10px] border border-ink-line bg-surface px-4 py-3.5 first:mt-0"
          >
            {block.steps.map((step, stepIndex) => (
              <Fragment key={step}>
                {stepIndex > 0 && (
                  <span aria-hidden="true" className="text-[13px] text-[#2ca897]">
                    &rarr;
                  </span>
                )}

                <span className="font-sans text-[12px] leading-[1.5] text-[#b9bdc0] sm:text-[13px]">
                  {step}
                </span>
              </Fragment>
            ))}
          </div>
        )

      case 'table':
        // Tables are the one thing allowed to scroll sideways on small screens.
        return (
          <div key={key} className="mt-5 w-full overflow-x-auto first:mt-0">
            <table className="w-full min-w-[520px] border-collapse rounded-[10px] text-left">
              <thead>
                <tr className="border-b border-ink-line">
                  {block.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-3 pb-2.5 font-sans text-[11px] font-semibold tracking-wide text-[#6f7477] uppercase first:pl-0 last:pr-0"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {block.rows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-ink-soft/70 last:border-b-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${row[0]}-${cellIndex}`}
                        className={`px-3 py-3 font-sans text-[12px] leading-[1.5] first:pl-0 last:pr-0 sm:text-[13px] ${
                          cellIndex === 0
                            ? 'font-medium whitespace-nowrap text-[#d6d6d6]'
                            : 'text-[#9a9fa3]'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )

      case 'contact':
        return (
          <dl
            key={key}
            className="mt-4 flex flex-col gap-3 rounded-[10px] border border-ink-line bg-surface px-5 py-5 first:mt-0"
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
