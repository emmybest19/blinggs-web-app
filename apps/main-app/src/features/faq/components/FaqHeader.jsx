import FaqSearch from './FaqSearch'

export default function FaqHeader({ query, onQueryChange }) {
  return (
    <header className="relative overflow-hidden px-4 pt-[60px] pb-10 text-center xs:px-5 xs:pt-[70px] sm:px-8 sm:pt-[80px] sm:pb-12 lg:px-12 xl:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-150px] left-1/2 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.07)] blur-[100px]"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-[820px] flex-col items-center">
        <span className="mb-6 inline-flex items-center justify-center rounded-[20px] border border-[rgba(16,190,165,0.16)] bg-[rgba(16,190,165,0.08)] px-3.5 py-1.5 font-sans text-[9px] font-semibold tracking-[0.12em] text-brand uppercase sm:text-[10px]">
          Help Center
        </span>

        <h1 className="text-[30px] leading-[1.15] font-bold tracking-[-0.03em] text-[#f4f4f4] xs:text-[36px] sm:text-[44px] lg:text-[54px]">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 max-w-[560px] font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[15px]">
          Everything you need to know about our security protocols, automated
          group vaults, and instant payment rails.
        </p>

        <div className="mt-8 w-full">
          <FaqSearch query={query} onChange={onQueryChange} />
        </div>
      </div>
    </header>
  )
}
