import { Link } from 'react-router-dom'

import blinggLogo from '@shared/assets/blingg-logo.png'

import {
  ExitIcon,
  dashboardCopy,
  initials,
  partner,
  partnerLinks,
} from '@features/partner'

/**
 * The partner dashboard header. Not NavShell: this is an app surface, so there
 * are no site links and no CTAs — just the brand, the badge, and who is signed
 * in.
 */
export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-[1000] box-border flex w-full items-center justify-between gap-4 border-b border-[#161d26] bg-[#0a0e13] px-4 py-4 sm:px-7 lg:px-10">
      {/* Brand */}
      <Link
        to="/affiliate"
        className="flex shrink-0 items-center gap-2.5 no-underline"
      >
        <img
          src={blinggLogo}
          alt=""
          className="block size-8 object-contain sm:size-9"
        />
        <span className="text-[19px] leading-none font-bold tracking-[-0.02em] text-white sm:text-[21px]">
          Blingg
        </span>
      </Link>

      {/* Badge — centred on desktop, dropped on narrow screens where the
        * brand and the account need the room. */}
      <span className="hidden rounded-full border border-[rgba(33,199,176,0.3)] bg-[rgba(33,199,176,0.07)] px-4 py-1.5 font-sans text-[11px] font-bold tracking-[0.1em] text-brand md:inline-flex">
        {dashboardCopy.badge}
      </span>

      {/* Account */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <span className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full border border-[#1b2430] bg-[rgba(33,199,176,0.12)] font-sans text-[12px] font-bold text-brand"
          >
            {initials(partner.name)}
          </span>

          <span className="hidden font-sans text-[13px] font-semibold text-[#e4e7ea] sm:inline">
            {partner.name}
          </span>
        </span>

        {/*
          * Exit returns to the public partner page. There is no session to
          * clear yet — when auth lands this becomes a sign-out call first.
          */}
        <Link
          to={partnerLinks.landing}
          className="flex items-center gap-1.5 font-sans text-[13px] text-[#8b949c] no-underline transition-colors hover:text-[#e4e7ea]"
        >
          <ExitIcon className="size-[15px]" />
          {dashboardCopy.exitLabel}
        </Link>
      </div>
    </header>
  )
}
