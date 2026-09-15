import PartnerSignInForm from '../components/PartnerSignInForm'
import PortalBrandPanel from '../components/PortalBrandPanel'

/**
 * The Campus Partner Portal sign-in at /affiliate/login.
 *
 * Deliberately outside both site shells: an auth screen carries no site header
 * and no footer, so this route sits directly under RootLayout rather than
 * inside PartnerLayout.
 *
 * `min-h-screen` rather than `h-screen` so the form can still scroll on a
 * short viewport instead of being clipped.
 */
export default function PartnerLoginPage() {
  return (
    <main className="grid min-h-screen w-full grid-cols-1 bg-[#0a0e13] lg:grid-cols-2">
      <PortalBrandPanel />
      <PartnerSignInForm />
    </main>
  )
}
