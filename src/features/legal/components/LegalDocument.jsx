import LegalContactCard from './LegalContactCard'
import LegalHero from './LegalHero'
import LegalSection from './LegalSection'
import LegalTableOfContents from './LegalTableOfContents'

/**
 * One layout for every policy page (Privacy, Terms, Cookies). Each page
 * supplies a plain data `document`; the optional `preamble` and `heroAside`
 * slots cover the small per-page differences that need real markup.
 */
export default function LegalDocument({ document, preamble, heroAside }) {
  const {
    hero,
    tocTitle = 'Table of Contents',
    sections,
    contact,
    acknowledgement,
  } = document

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b1220] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <LegalHero {...hero} aside={heroAside} />

        {/* Intro */}
        <section className="mt-8 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-8">
          <div className="text-sm leading-8 text-white/70 sm:text-base">
            {preamble ?? document.preamble}
          </div>
        </section>

        {/* Main content */}
        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
          <LegalTableOfContents title={tocTitle} sections={sections} />

          <div className="space-y-6 xl:col-span-9">
            {sections.map((section, index) => (
              <LegalSection
                key={section.title}
                id={`section-${index}`}
                title={section.title}
                content={section.content}
              />
            ))}

            <LegalContactCard {...contact} />

            {/* Acknowledgement */}
            <section className="mb-10 rounded-[32px] border border-white/10 bg-[#111827] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                  {acknowledgement.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">
                    {acknowledgement.title}
                  </h2>
                  <p className="mt-4 leading-8 text-white/70">
                    {acknowledgement.body}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
