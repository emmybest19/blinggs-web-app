import { dashboardCopy } from '../data/dashboard.data'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { CopyIcon, TickIcon } from './DashboardIcons'

/**
 * The read-only invite link with its copy button.
 *
 * A real `input` rather than a styled div: it keeps the link selectable and
 * lets someone copy it by hand if the clipboard API is unavailable, which is
 * exactly the case the hook cannot recover from.
 */
export default function InviteLinkField({ link }) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <div className="relative w-full">
      <input
        readOnly
        value={link}
        aria-label={dashboardCopy.linkLabel}
        onFocus={(event) => event.target.select()}
        className="box-border h-11 w-full rounded-[9px] border border-[#1b2430] bg-[#0b1118] pr-12 pl-4 font-sans text-[13px] text-[#d8dcdf] outline-none focus:border-[rgba(30,195,170,0.5)]"
      />

      <button
        type="button"
        onClick={() => copy(link)}
        aria-label={copied ? dashboardCopy.copiedLabel : dashboardCopy.copyLabel}
        className="absolute inset-y-0 right-0 flex w-11 cursor-pointer items-center justify-center bg-transparent transition-colors"
      >
        {copied ? (
          <TickIcon className="size-[17px] text-brand" />
        ) : (
          <CopyIcon className="size-[17px] text-[#7f888f] hover:text-[#d8dcdf]" />
        )}
      </button>
    </div>
  )
}
