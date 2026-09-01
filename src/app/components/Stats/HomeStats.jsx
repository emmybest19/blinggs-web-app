const STATS = [
  { value: '10k+', label: 'Waitlist Signups' },
  { value: 'Q4 2026', label: 'Public Launch' },
  { value: '256-bit', label: 'Encryption' },
  { value: '0%', label: 'Transfer fees' },
]

export default function HomeStats() {
  return (
    <div className="flex h-auto w-full flex-wrap items-center justify-center gap-[18px] py-[30px] xs:gap-7 sm:h-[150px] sm:flex-nowrap sm:gap-12 sm:py-0 lg:gap-20 xl:gap-[120px]">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center gap-[5px]"
        >
          <label className="text-2xl font-bold text-white xs:text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[45px]">
            {stat.value}
          </label>
          <p className="text-[9px] text-[#636262] sm:text-[10px]">
            {stat.label}
          </p>
          <div className="h-[2px] w-[25px] bg-[#1cae9d]" />
        </div>
      ))}
    </div>
  )
}
