import { Link } from 'react-router-dom'

import AppleStore from '@shared/assets/apple-logo-home-cooming.png'
import PlayStore from '@shared/assets/playstoreCooming.png'

const STORES = [
  {
    href: 'https://www.apple.com/app-store/',
    img: AppleStore,
    alt: 'apple_store',
    label: 'Download on the App Store',
  },
  {
    href: 'https://play.google.com/store/apps?hl=en',
    img: PlayStore,
    alt: 'playstore',
    label: 'Get it on Google Play',
  },
]

// Mirrored radial glows that used to be the ::before / ::after pseudo-elements.
const glow =
  'pointer-events-none absolute top-[60%] h-[420px] w-[720px] -translate-y-1/2 blur-[35px] ' +
  '[background:radial-gradient(circle,rgba(20,180,160,0.22)_0%,rgba(20,180,160,0.1)_35%,transparent_70%)]'

export default function ComingSoon() {
  return (
    <div className="relative box-border flex min-h-[240px] w-full items-center justify-center overflow-hidden bg-ink-soft px-[14px] pt-10 pb-11 xs:px-4 xs:pt-[46px] xs:pb-[50px] sm:px-[18px] sm:pt-[54px] sm:pb-[58px] lg:min-h-[270px] lg:px-5 lg:pt-16 lg:pb-[68px] xl:pt-[74px] xl:pb-[76px]">
      <div className={`${glow} left-[-280px]`} />
      <div className={`${glow} right-[-280px]`} />

      <div className="relative z-[2] flex w-full max-w-[750px] flex-col items-center text-center">
        <h1 className="mb-[14px] text-[19px] leading-[1.2] font-semibold tracking-[-0.3px] text-[#e6e6e6] xs:text-[21px] sm:text-2xl lg:text-[27px] lg:tracking-[-0.5px] xl:text-[31px]">
          Cooming Soon
        </h1>

        <p className="mb-[22px] max-w-[620px] text-[9.5px] leading-[1.6] font-normal text-[#8f8f8f] xs:text-[10px] sm:mb-7 sm:text-[11px] xl:text-xs">
          We&apos;re building something amazing. Be the first to experience it -
          download our app when it launches.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-[10px] lg:flex-nowrap">
          {STORES.map((store) => (
            <Link
              key={store.alt}
              to={store.href}
              target="_blank"
              className="box-border flex h-8 items-center justify-center gap-2 rounded-lg border border-ink-line bg-ink-deep px-3 no-underline xs:h-[34px] xs:px-[14px] sm:h-9 sm:px-4"
            >
              <img
                src={store.img}
                alt={store.alt}
                className="size-[13px] object-contain"
              />
              <h3 className="text-[9px] leading-none font-medium text-[#d7d7d7] xs:text-[10px]">
                {store.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
