/**
 * Renders one policy section. `content` entries are either a paragraph string
 * or an array of strings, which becomes a bulleted list.
 */
export default function LegalSection({ id, title, content }) {
  return (
    <section
      id={id}
      className="rounded-[32px] border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:border-emerald-400/20 sm:p-8"
    >
      <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">{title}</h2>

      <div className="space-y-5">
        {content.map((item, index) =>
          Array.isArray(item) ? (
            <ul key={index} className="ml-2 space-y-3">
              {item.map((listItem) => (
                <li key={listItem} className="flex gap-3 text-white/70">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span className="leading-7">{listItem}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p
              key={index}
              className="text-sm leading-8 text-white/70 sm:text-base"
            >
              {item}
            </p>
          )
        )}
      </div>
    </section>
  )
}
