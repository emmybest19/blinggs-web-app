import LegalDocument from '../components/LegalDocument'
import { cookiesPolicyDocument } from '../data/cookiesPolicy.data'

/** The cookies page is the only policy with illustrative cards beside the hero. */
function CookiesHeroAside() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="rounded-[28px] border border-white/10 bg-white p-6 text-black">
        <div className="text-sm font-medium text-emerald-600">
          Secure Authentication
        </div>

        <h3 className="mt-4 text-4xl font-bold">Privacy</h3>

        <p className="mt-4 leading-7 text-black/60">
          Cookies help maintain secure sessions, account protection, and fraud
          prevention systems.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#111827] p-6">
        <div className="text-sm font-medium text-emerald-400">
          Personalized Experience
        </div>

        <p className="mt-5 leading-8 text-white/70">
          Blingg uses cookies to remember preferences, optimize performance, and
          deliver a smoother community-driven experience.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="h-3 w-3 rounded-full bg-white/20" />
          <div className="h-3 w-3 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}

export default function CookiesPolicyPage() {
  return (
    <LegalDocument
      document={cookiesPolicyDocument}
      heroAside={<CookiesHeroAside />}
    />
  )
}
