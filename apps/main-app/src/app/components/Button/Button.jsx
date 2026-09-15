import { Link } from 'react-router-dom'

import { affiliateButton, buttonGroup, waitlistButton } from './buttonStyles'

export default function Button() {
  return (
    <div className={buttonGroup}>
      <Link to="/waitlist" className={waitlistButton}>
        Join Waitlist
      </Link>

      <Link to="/affiliate" className={affiliateButton}>
        Our Affiliate Program
      </Link>
    </div>
  )
}
