import CtaButtons from '@shared/ui/CtaButtons'
import NavShell from '@shared/ui/NavShell'

const NAV_LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
]

/** The marketing site header. The partner programme has its own — see
  * PartnerNavbar — and both share the chrome in NavShell. */
export default function Navbar() {
  return (
    <NavShell links={NAV_LINKS}>
      <CtaButtons />
    </NavShell>
  )
}
