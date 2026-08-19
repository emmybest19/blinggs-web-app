export default function LegalTableOfContents({ title, sections }) {
  return (
    <div className="xl:col-span-3">
      <div className="rounded-[32px] border border-white/10 bg-[#111827] p-6 xl:sticky xl:top-6">
        <h3 className="mb-6 text-lg font-semibold">{title}</h3>

        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
          {sections.map((section, index) => (
            <a
              key={section.title}
              href={`#section-${index}`}
              className="block text-sm text-white/60 transition hover:text-emerald-400"
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
