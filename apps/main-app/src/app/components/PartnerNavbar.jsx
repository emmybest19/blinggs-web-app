import { Link } from 'react-router-dom'

import { affiliateButton, buttonGroup, waitlistButton } from '@shared/ui/ctaStyles'
import NavShell from '@shared/ui/NavShell'

import { partnerLinks } from '@features/partner'

const NAV_LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/affiliate', label: 'Partner Program' },
]

/**
 * Header for the partner programme. Same chrome as the marketing header, but
 * the CTAs point at the partner portal and application rather than the
 * waitlist.
 *
 * Both destinations are real routes now — see partnerLinks.
 */
export default function PartnerNavbar() {
  return (
    <NavShell links={NAV_LINKS}>
      <div className={buttonGroup}>
        <Link to={partnerLinks.portal} className={waitlistButton}>
          Portal Login
        </Link>

        <Link to={partnerLinks.apply} className={affiliateButton}>
          Apply Now
        </Link>
      </div>
    </NavShell>
  )
}
