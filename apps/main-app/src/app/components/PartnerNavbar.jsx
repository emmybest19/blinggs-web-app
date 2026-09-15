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
 * Portal Login is a router Link — that route exists. Apply Now is still a
 * plain anchor because its destination does not. See partnerLinks.
 */
export default function PartnerNavbar() {
  return (
    <NavShell links={NAV_LINKS}>
      <div className={buttonGroup}>
        <Link to={partnerLinks.portal} className={waitlistButton}>
          Portal Login
        </Link>

        <a href={partnerLinks.apply} className={affiliateButton}>
          Apply Now
        </a>
      </div>
    </NavShell>
  )
}
