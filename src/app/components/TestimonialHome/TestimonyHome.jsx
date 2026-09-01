import TestimonyStar from '../../assets/testimony-Home_Stars.png'

const TESTIMONIES = [
  {
    text: 'I signed up for the waitlist the moment I saw the concept. An app that combines messaging with payments and group savings? This is exactly what my friend group needs.',
    name: 'Demola Adebayor',
    role: 'Waitlist Member',
  },
  {
    text: "As a freelancer, converting crypto to Naira is a constant headache. Blingg's promise of instant conversion at competitive rates has me counting down to launch day.",
    name: 'Chinedu Okafor',
    role: 'Waitlist Member',
  },
  {
    text: 'Our cooperative has been looking for a transparent group savings tool. The multi-signature approval and public ledger features Blingg is building are exactly what we need.',
    name: 'Mariam Aliyu',
    role: 'Waitlist Member',
  },
]

export default function TestimonyHome() {
  return (
    <div className="box-border w-full bg-ink-deep px-[14px] pt-[42px] pb-[46px] xs:px-[18px] xs:pt-12 xs:pb-[52px] sm:px-7 sm:pt-14 sm:pb-[60px] lg:px-12 lg:pt-16 lg:pb-[68px] xl:px-20 xl:pt-[72px] xl:pb-[76px]">
      <h1 className="mb-8 text-center text-[19px] leading-[1.2] font-semibold text-[#e6e6e6] xs:text-[21px] sm:text-[23px] lg:mb-[42px] lg:text-[25px] xl:text-[28px]">
        Loved by early testers
      </h1>

      <div className="mx-auto box-border flex w-full max-w-[1140px] flex-wrap items-stretch justify-center gap-[22px] lg:flex-nowrap">
        {TESTIMONIES.map((testimony) => (
          <div
            key={testimony.name}
            className="box-border flex min-w-0 flex-[1_1_100%] flex-col rounded-xl border border-ink-line bg-ink px-4 pt-[18px] pb-4 xs:px-5 xs:pt-5 xs:pb-[18px] sm:px-[26px] sm:pt-6 sm:pb-[22px] lg:min-h-[193px] lg:flex-1"
          >
            <div className="mb-[14px] flex w-full items-center">
              <p className="text-[30px] text-[#777777]">“</p>
              <img
                src={TestimonyStar}
                alt="testimony_default_qoute"
                className="block h-[14px] w-[62px] object-contain"
              />
            </div>

            <div className="flex-1">
              <p className="text-xs leading-[1.65] font-normal text-[#a1a1a1]">
                {testimony.text}
              </p>
            </div>

            <div className="mt-[18px]">
              <h3 className="mb-[5px] text-xs leading-[1.3] font-medium text-[#d2d2d2]">
                {testimony.name}
              </h3>
              <p className="text-[10px] leading-[1.4] font-normal text-[#777777]">
                {testimony.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
