import { company } from '@shared/config/site.config'

import LegalDocument from '../components/LegalDocument'
import { termsOfServiceDocument } from '../data/termsOfService.data'

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      document={termsOfServiceDocument}
      preamble={
        <>
          Welcome to <span className="font-medium text-white">Blingg</span>, a
          digital platform operated by{' '}
          <span className="text-emerald-400">
            {company.legalName} (RC No. {company.rcNumber})
          </span>
          . By creating an account, accessing, or using Blingg, you agree to be
          bound by these Terms. If you do not agree, do not use the Services.
        </>
      }
    />
  )
}
