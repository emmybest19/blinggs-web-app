import CategoryBadge from './CategoryBadge'

export default function BlogHeader() {
  return (
    <header className="relative overflow-hidden px-4 pt-[60px] pb-9 xs:px-5 xs:pt-[70px] sm:px-8 sm:pt-[80px] sm:pb-11 lg:px-12 xl:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-170px] left-[10%] h-[300px] w-[520px] rounded-full bg-[rgba(27,230,186,0.06)] blur-[100px]"
      />

      <div className="relative z-[1] mx-auto w-full max-w-[1180px]">
        <CategoryBadge category="Blog" className="mb-5" />

        <h1 className="text-[32px] leading-[1.12] font-bold tracking-[-0.03em] text-[#f4f4f4] xs:text-[38px] sm:text-[46px] lg:text-[54px]">
          Latest Updates
        </h1>

        <p className="mt-4 max-w-[640px] font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[15px]">
          News, insights, and financial tips from the Blingg engineering and
          product team.
        </p>
      </div>
    </header>
  )
}
