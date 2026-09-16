import InstitutionForm from '../components/InstitutionForm'
import PortalShell from '../components/PortalShell'

/**
 * The institution registration step at /affiliate/apply, behind "Apply Now".
 *
 * Wider column than the sign-in: the chip rows need the room before names like
 * "Obafemi Awolowo University" start wrapping mid-pill.
 */
export default function PartnerApplyPage() {
  return (
    <PortalShell contentWidth="max-w-[560px]">
      <InstitutionForm />
    </PortalShell>
  )
}
