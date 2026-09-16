import PartnerSignInForm from '../components/PartnerSignInForm'
import PortalShell from '../components/PortalShell'

/**
 * The Campus Partner Portal sign-in at /affiliate/login.
 *
 * Deliberately outside both site shells: an auth screen carries no site header
 * and no footer, so this route sits directly under RootLayout rather than
 * inside PartnerLayout.
 */
export default function PartnerLoginPage() {
  return (
    <PortalShell>
      <PartnerSignInForm />
    </PortalShell>
  )
}
