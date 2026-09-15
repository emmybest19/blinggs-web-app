import LegalDocument from '../components/LegalDocument'
import { privacyPolicy } from '../data/privacy.data'

export default function PrivacyPolicyPage() {
  return <LegalDocument document={privacyPolicy} />
}
