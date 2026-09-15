import CheckList from './CheckList'

/**
 * The alternating image/copy section used across the Features page.
 * FeatureChat, Groups and FeaturePayment were three copies of this markup
 * sharing (and re-declaring) the same global `.chat-*` / `.pay-*` classes.
 */
export default function FeatureSplit({
  badge,
  title,
  body,
  bullets,
  image,
  imageAlt,
  imageSide = 'left',
  dark = true,
}) {
  const imageOrder = imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'
  const textOrder = imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'

  return (
    <div
      className={`box-border flex min-h-0 w-full flex-col items-center justify-center gap-[30px] border-t border-b border-ink-soft px-[14px] py-12 text-center xs:px-[18px] xs:py-14 sm:gap-10 sm:px-[30px] sm:py-[70px] lg:flex-row lg:gap-[60px] lg:px-[60px] lg:py-[90px] lg:min-h-[720px] lg:text-left xl:gap-[120px] xl:px-[140px] xl:py-[110px] ${
        dark ? 'bg-ink-deep' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`order-2 flex w-full max-w-[420px] items-center justify-center lg:w-[360px] xl:w-[500px] ${imageOrder}`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="block h-auto w-full max-w-[240px] object-contain xs:max-w-[300px] sm:max-w-[420px]"
        />
      </div>

      {/* Copy */}
      <div
        className={`order-1 flex w-full max-w-[520px] flex-col items-center text-center lg:max-w-[540px] lg:items-start lg:text-left ${textOrder}`}
      >
        <div className="mb-5 inline-flex items-center justify-center rounded-[20px] border border-[rgba(19,180,160,0.15)] bg-[rgba(19,180,160,0.06)] px-3 py-1.5">
          <span className="text-[10px] font-semibold tracking-[0.1em] text-brand-dark">
            {badge}
          </span>
        </div>

        <h2 className="mb-5 text-2xl leading-[1.2] font-semibold text-faint xs:text-[28px] sm:text-[38px]">
          {title}
        </h2>

        <p className="mb-[30px] w-full max-w-full text-xs leading-[1.7] font-normal text-[#8f8f8f] xs:text-[13px] sm:text-[15px] lg:max-w-[500px]">
          {body}
        </p>

        <CheckList items={bullets} />
      </div>
    </div>
  )
}
