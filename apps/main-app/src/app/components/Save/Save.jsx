import CheckList from '../FeatureSplit/CheckList'

const GROUPS = [
  {
    label: 'Personal Groups',
    body: 'Best for family networks, close friends, and housemate groups. Features single-admin simplified setups, zero-token instant drawouts, and conversational oversight.',
    bullets: [
      'Admin-controlled payout priority',
      'Trusted inner circle security',
      'Direct peer messaging built-in',
    ],
  },
  {
    label: 'Public Groups',
    body: 'Engineered for formal cooperatives, community clubs, and investments. Offers multi-signature approval triggers, ledger audits, and smart-contract protocol rules.',
    bullets: [
      'Multi-sig smart wallet release locks',
      'Comprehensive public ledger record',
      'Democratic vote-to-pay protocols',
    ],
  },
]

export default function Save() {
  return (
    <div className="box-border w-full bg-ink-deep px-[14px] pt-11 pb-[42px] text-white xs:px-[18px] xs:pt-[50px] xs:pb-12 sm:px-7 sm:pt-[60px] sm:pb-14 lg:px-12 lg:pt-[70px] lg:pb-16 xl:px-20 xl:pt-20 xl:pb-[76px]">
      <div className="mx-auto w-full max-w-[680px] text-center">
        <div className="mb-[18px] flex justify-center">
          <span className="inline-flex items-center justify-center rounded-[20px] border border-[rgba(20,180,160,0.12)] bg-[rgba(20,180,160,0.06)] px-3 py-[5px] text-[9px] font-semibold tracking-[0.06em] text-[#20bca8]">
            SAVINGS COOPERATIVES
          </span>
        </div>

        <h2 className="mb-4 text-xl leading-[1.2] font-semibold text-[#e7e7e7] xs:text-[22px] sm:text-2xl lg:text-[27px] xl:text-[30px]">
          Two ways to save together
        </h2>

        <p className="mx-auto w-full max-w-[560px] text-[11px] leading-[1.6] font-normal text-[#858585] sm:text-xs">
          Whether it is coordinate-based daily savings pools or secure trust
          accounts, Blingg delivers complete transparency.
        </p>
      </div>

      <div className="mx-auto mt-[52px] grid w-full max-w-[520px] grid-cols-1 gap-7 lg:max-w-[1080px] lg:grid-cols-2">
        {GROUPS.map((group) => (
          <div
            key={group.label}
            className="box-border flex min-h-0 flex-col items-start rounded-2xl border border-[#252728] border-t-2 border-t-[rgba(31,199,176,0.7)] bg-[#161718] px-5 py-[22px] xs:px-[26px] xs:py-[26px] lg:min-h-[255px] lg:px-8 lg:py-[30px]"
          >
            <label className="mb-[18px] text-[17px] leading-[1.2] font-semibold text-[#e4e4e4] xs:text-[19px] sm:text-[22px]">
              {group.label}
            </label>

            <p className="mb-[22px] w-full max-w-[420px] text-[10px] leading-[1.7] font-normal text-[#858585] sm:text-[11px]">
              {group.body}
            </p>

            <CheckList items={group.bullets} size="sm" />
          </div>
        ))}
      </div>
    </div>
  )
}
