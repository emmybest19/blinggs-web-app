import LegalDocument from '../components/LegalDocument'
import { privacyPolicyDocument } from '../data/privacyPolicy.data'

export default function PrivacyPolicyPage() {
  return <LegalDocument document={privacyPolicyDocument} />
}
