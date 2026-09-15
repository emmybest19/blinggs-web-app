import { Link } from 'react-router-dom'

import blinggLogo from '@shared/assets/blingg-logo.png'

import { portalCopy } from '../data/portal.data'

const PILL =
  'inline-flex items-center justify-center rounded-full border border-[#1e2a31] bg-[#0d1317] font-sans font-bold tracking-[0.12em] text-brand'

/**
 * The left half of the sign-in screen: the mark, the wordmark and the portal
 * badge over a soft teal glow.
 *
 * Below lg the split collapses, so this panel is hidden and PartnerSignInForm
 * renders the compact brand strip instead.
 */
export default function PortalBrandPanel() {
  return (
    <div className="relative hidden items-center justify-center overflow-hidden border-r border-[#151c22] lg:flex">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(27,230,186,0.055)] blur-[120px]"
      />

      <div className="relative z-[1] flex flex-col items-center">
        {/* Back to the public page — the only way out of this screen. */}
        <Link
          to="/affiliate"
          className="flex items-center gap-3 no-underline"
          aria-label="Back to the Blingg Partner Program"
        >
          <img
            src={blinggLogo}
            alt=""
            className="block size-[52px] object-contain"
          />
          <span className="text-[44px] leading-none font-bold tracking-[-0.02em] text-white">
            Blingg
          </span>
        </Link>

        <span className={`${PILL} mt-8 px-7 py-3 text-[13px]`}>
          {portalCopy.badge}
        </span>
      </div>
    </div>
  )
}

export { PILL }
