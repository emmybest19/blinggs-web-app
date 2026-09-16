import { Link } from 'react-router-dom'

import blinggLogo from '@shared/assets/blingg-logo.png'

import { portalCopy } from '../data/portal.data'
import PortalBrandPanel, { PILL } from './PortalBrandPanel'
import { LockIcon } from './PortalIcons'

/**
 * The split-screen chrome both portal screens wear: brand panel on the left,
 * a centred column on the right, and the encryption line at its foot.
 *
 * Below lg the split collapses — PortalBrandPanel hides itself and the compact
 * strip here stands in for it.
 *
 * @param contentWidth Tailwind max-width for the right column. The sign-in is
 *                     a narrow form; the institution picker needs more room
 *                     before its chips start wrapping awkwardly.
 */
export default function PortalShell({
  children,
  contentWidth = 'max-w-[420px]',
}) {
  return (
    /* `min-h-screen` rather than `h-screen` so a long form scrolls instead of
     * being clipped on a short viewport. */
    <main className="grid min-h-screen w-full grid-cols-1 bg-[#0a0e13] lg:grid-cols-2">
      <PortalBrandPanel />

      <div className="flex items-center justify-center px-5 py-14 sm:px-8 lg:px-12 xl:px-20">
        <div className={`w-full ${contentWidth}`}>
          {/* Compact brand strip — stands in for PortalBrandPanel when the
            * split collapses. */}
          <Link
            to="/affiliate"
            className="mb-10 flex flex-col items-center gap-4 no-underline lg:hidden"
          >
            <span className="flex items-center gap-2.5">
              <img
                src={blinggLogo}
                alt=""
                className="block size-9 object-contain"
              />
              <span className="text-[28px] leading-none font-bold tracking-[-0.02em] text-white">
                Blingg
              </span>
            </span>

            <span className={`${PILL} px-5 py-2.5 text-[11px]`}>
              {portalCopy.badge}
            </span>
          </Link>

          {children}

          <p className="mt-7 flex items-center justify-center gap-2 font-sans text-[13px] text-[#6b7681]">
            <LockIcon className="size-[15px]" />
            {portalCopy.assurance}
          </p>
        </div>
      </div>
    </main>
  )
}
