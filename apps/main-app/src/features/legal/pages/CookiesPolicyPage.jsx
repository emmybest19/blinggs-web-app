import LegalDocument from '../components/LegalDocument'
import { cookiesPolicy } from '../data/cookies.data'

export default function CookiesPolicyPage() {
  return <LegalDocument document={cookiesPolicy} />
}
