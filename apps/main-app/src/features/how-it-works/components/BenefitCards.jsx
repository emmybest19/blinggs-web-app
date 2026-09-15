import benefitImg from '@shared/assets/how-star.png'

const BENEFITS = [
  {
    title: 'Early Access',
    body: 'Be among the first to download the app and secure your custom handle prefix before public launch.',
  },
  {
    title: 'Exclusive Perks',
    body: 'Earn early member status benefits including zero transfer fee caps and premium design themes.',
  },
  {
    title: 'Early Access',
    body: 'Unlock a direct line of communication to the founding product and support engineer teams.',
  },
]

export default function BenefitCards() {
  return (
    <div className="box-border flex min-h-[220px] w-full flex-col items-stretch justify-center gap-4 border-t border-b border-[#181818] bg-[#141414] px-[14px] py-[26px] xs:px-[18px] xs:py-[30px] sm:flex-row sm:flex-wrap sm:items-center sm:px-7 sm:py-9 lg:gap-5 lg:px-10 lg:py-10 xl:flex-nowrap xl:gap-6 xl:px-20 xl:py-[45px]">
      {BENEFITS.map((benefit, index) => (
        <div
          key={`${benefit.title}-${index}`}
          className="box-border flex w-full min-h-0 max-w-full flex-col items-start rounded-[10px] border border-[#282828] bg-[#1c1c1c] px-[18px] py-5 sm:px-5 sm:py-6 lg:min-h-[130px] lg:max-w-[300px]"
        >
          <img
            src={benefitImg}
            alt="Star_Itworks.Blingg"
            className="mb-[14px] size-[25px] object-contain"
          />
          <h2 className="mb-[10px] text-xs leading-[1.3] font-semibold text-[#dedede] xs:text-[13px] sm:text-sm">
            {benefit.title}
          </h2>
          <p className="text-[10px] leading-[1.6] font-normal text-[#777c80]">
            {benefit.body}
          </p>
        </div>
      ))}
    </div>
  )
}
