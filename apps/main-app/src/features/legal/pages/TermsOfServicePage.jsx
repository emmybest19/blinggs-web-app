import LegalDocument from '../components/LegalDocument'
import { termsOfService } from '../data/terms.data'

export default function TermsOfServicePage() {
  return <LegalDocument document={termsOfService} />
}
