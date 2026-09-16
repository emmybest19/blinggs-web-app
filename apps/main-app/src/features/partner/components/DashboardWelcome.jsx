import { dashboardCopy, firstName, inviteLink } from '../data/dashboard.data'
import { CARD } from './DashboardCard'
import { QrIcon } from './DashboardIcons'
import InviteLinkField from './InviteLinkField'

const MICRO_LABEL =
  'mb-2 block font-sans text-[10px] font-semibold tracking-[0.1em] text-[#6b747c] uppercase'

export default function DashboardWelcome({ partner }) {
  const link = inviteLink(partner.code)

  return (
    <section className={`${CARD} px-6 py-7 sm:px-8 sm:py-8`}>
      <h1 className="text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-white sm:text-[28px]">
        Welcome, {firstName(partner.name)}{' '}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h1>

      <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-6">
        {/* Partner code */}
        <div className="shrink-0">
          <span className={MICRO_LABEL}>{dashboardCopy.codeLabel}</span>

          <span className="inline-flex h-11 items-center rounded-[9px] border border-[rgba(33,199,176,0.25)] bg-[rgba(33,199,176,0.1)] px-4 font-sans text-[15px] font-bold tracking-[0.02em] text-brand">
            {partner.code}
          </span>
        </div>

        {/* Invite link */}
        <div className="min-w-0 flex-1">
          <span className={MICRO_LABEL}>{dashboardCopy.linkLabel}</span>
          <InviteLinkField link={link} />
        </div>

        {/* QR — stubbed: rendering a real code needs a generator we have not
          * added. The button is here so the layout is final. */}
        <button
          type="button"
          aria-label={dashboardCopy.qrLabel}
          className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-[9px] border border-[#1b2430] bg-[#0b1118] text-[#7f888f] transition-colors hover:border-[#2b3b4d] hover:text-[#d8dcdf]"
        >
          <QrIcon className="size-[19px]" />
        </button>
      </div>
    </section>
  )
}
