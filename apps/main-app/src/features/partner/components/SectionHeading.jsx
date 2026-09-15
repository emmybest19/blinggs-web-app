/** The centred title + subtitle every partner section opens with. */
export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2 className="text-[24px] leading-[1.2] font-bold tracking-[-0.03em] text-[#f1f1f1] xs:text-[28px] sm:text-[34px] lg:text-[40px]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 max-w-[620px] font-sans text-[12px] leading-[1.7] text-[#8d9298] sm:mt-4 sm:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  )
}
