import downloadImg from '@shared/assets/download_start_home.png'
import transactImg from '@shared/assets/transaction_start_home.png'
import walletImg from '@shared/assets/wallet_start_home.png'

const STEPS = [
  {
    img: downloadImg,
    alt: 'download_faster',
    label: 'Download and Sign Up',
    body: "Join the waitlist now to secure your spot. Once we launch on App Store and Play Store, you'll be first in line.",
  },
  {
    img: walletImg,
    alt: 'wallet_fund',
    label: 'Fund Your Wallet',
    body: 'Direct instant transfers from any local bank or stablecoins. Fast deposits, fully secure.',
  },
  {
    img: transactImg,
    alt: 'trnasaction_direct',
    label: 'Start Transacting',
    body: 'Transfer assets instantly, chat in real-time, pool money, or pay bills with a tap.',
  },
]

export default function StartInMinutes() {
  return (
    <div className="box-border w-full bg-ink-deep py-[60px] sm:py-[72px] lg:pt-[100px] lg:pb-[90px]">
      <h1 className="mb-[55px] px-5 text-center text-[19px] leading-[1.2] font-semibold text-faint xs:text-[21px] sm:text-[23px] lg:px-0 lg:text-[25px] xl:text-[28px]">
        Start in minutes
      </h1>

      <div className="relative mx-auto w-full max-w-[900px]">
        {/* Step markers */}
        <div className="relative left-[6%] z-[2] flex w-[88%] items-center justify-between pb-4 xs:left-[8%] sm:pb-5 xs:w-[84%] sm:left-[10%] sm:w-[80%] lg:left-[12%] lg:w-[76%] xl:left-[130px] xl:w-[70%]">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`box-content flex size-7 items-center justify-center rounded-full border ${
                step === 1
                  ? 'border-[#19a995] bg-[rgba(20,180,160,0.08)]'
                  : 'border-[#282b2d] bg-[#1a1c1d]'
              }`}
            >
              <p
                className={`text-xs leading-none font-medium ${
                  step === 1 ? 'text-brand' : 'text-[#8b8e91]'
                }`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>

        <hr className="z-[1] mx-[14px] h-px border-none bg-[#242627]" />

        {/* Step content */}
        <div className="mx-auto mt-[35px] grid w-full max-w-[360px] grid-cols-1 gap-[30px] sm:max-w-none sm:grid-cols-3 sm:gap-[18px] lg:gap-0">
          {STEPS.map((step) => (
            <div
              key={step.label}
              className="flex w-full flex-col items-center text-center"
            >
              <img
                src={step.img}
                alt={step.alt}
                className="mb-[14px] size-[34px] object-contain"
              />
              <label className="mb-[10px] block text-xs leading-[1.3] font-medium text-[#d9d9d9] xs:text-[13px]">
                {step.label}
              </label>
              <p className="w-full max-w-[260px] text-[10px] leading-[1.6] font-normal text-[#777b80] xs:max-w-[300px] sm:max-w-[230px] lg:max-w-[270px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
