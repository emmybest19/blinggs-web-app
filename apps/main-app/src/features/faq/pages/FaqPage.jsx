import ContactSection from '../components/ContactSection'
import FaqHeader from '../components/FaqHeader'
import FaqList from '../components/FaqList'
import { useFaqSearch } from '../hooks/useFaqSearch'

export default function FaqPage() {
  const { query, setQuery, groups, isSearching } = useFaqSearch()

  return (
    <main className="w-full max-w-full overflow-x-clip bg-ink-deep pb-16 sm:pb-20">
      <FaqHeader query={query} onQueryChange={setQuery} />

      <section className="px-4 xs:px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto w-full max-w-[1180px]">
          <FaqList
            groups={groups}
            query={query}
            isSearching={isSearching}
            onClearSearch={() => setQuery('')}
          />
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
