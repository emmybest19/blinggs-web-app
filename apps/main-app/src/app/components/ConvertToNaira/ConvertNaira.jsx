import { Link } from 'react-router-dom'

const POINTS = [
  { label: 'Best Rates', body: 'Competitive Naira exchange rates' },
  { label: 'Instant', body: 'Real-time Naira conversion' },
  { label: 'Direct to bank', body: 'Instant NGN bank settlement' },
]

export default function ConvertToNiara() {
  return (
    <div className="box-border flex min-h-[700px] w-full flex-col items-center border-t border-[#1d1f20] bg-ink-deep px-[14px] pt-11 pb-[42px] text-center xs:px-[18px] xs:pt-[50px] xs:pb-12 sm:px-7 sm:pt-[60px] sm:pb-14 lg:px-12 lg:pt-[70px] lg:pb-16 xl:px-20 xl:pt-20 xl:pb-[70px]">
      <span className="mb-[18px] inline-flex items-center justify-center rounded-[20px] border border-[rgba(20,180,160,0.12)] bg-[rgba(20,180,160,0.06)] px-3 py-[5px] text-[9px] font-semibold tracking-[0.06em] text-[#20bca8]">
        NAIRA EXCHANGE
      </span>

      <h2 className="mb-4 text-xl leading-[1.2] font-semibold text-faint xs:text-[22px] sm:text-[25px] lg:text-[27px] xl:text-[30px]">
        Convert to Naira Instantly
      </h2>

      <p className="w-full max-w-[580px] text-[11px] leading-[1.6] font-normal text-[#858585] sm:text-xs">
        Exchange your funds seamlessly, Convert direct to Naira and withdraw
        instantly to your Nigerian bank account
      </p>

      <div className="relative mt-12 grid w-full max-w-[460px] grid-cols-1 lg:max-w-[850px] lg:grid-cols-3">
        {POINTS.map((point, index) => (
          <div
            key={point.label}
            className="relative box-border flex min-h-0 flex-col items-center justify-start px-0 py-6 lg:min-h-[85px] lg:px-[35px] lg:py-0"
          >
            {/* Divider between items — horizontal when stacked, vertical in a row */}
            {index > 0 && (
              <span className="absolute top-0 left-1/2 h-px w-12 -translate-x-1/2 bg-[#1d2021] lg:top-[2px] lg:left-0 lg:h-12 lg:w-px lg:translate-x-0" />
            )}

            <label className="mb-[10px] block text-[21px] leading-[1.2] font-semibold text-faint capitalize xs:text-2xl lg:text-[28px]">
              {point.label}
            </label>

            <p className="text-[10px] leading-[1.5] font-normal text-[#777777]">
              {point.body}
            </p>
          </div>
        ))}

        <Link
          to=""
          className="col-span-full mx-auto mt-9 inline-flex w-fit items-center justify-center rounded-[7px] bg-[#20bfa9] px-6 py-3 text-[9px] font-semibold text-[#07100f] no-underline transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#2bd1bb] sm:px-7 sm:py-[13px] sm:text-[10px]"
        >
          Join the waitlist
        </Link>
      </div>
    </div>
  )
}
