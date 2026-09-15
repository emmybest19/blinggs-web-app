import { Link } from 'react-router-dom'

import { affiliateButton, waitlistButton } from '@shared/ui/ctaStyles'

/**
 * Shared marketing hero. The home and features heroes previously used the same
 * global `.home-hero` classes — only HomeHero.css defined them, so the
 * features hero depended on that stylesheet leaking. They now share this
 * component instead.
 */
export default function Hero({ badge, title, accentTitle, subtitle, actions = [] }) {
  return (
    <section className="box-content relative flex min-h-[390px] items-start justify-center overflow-hidden bg-ink-deep px-[10px] pt-[50px] min-[320px]:min-h-[400px] min-[320px]:px-[14px] min-[320px]:pt-[55px] xs:min-h-[420px] xs:px-[18px] xs:pt-[60px] min-[480px]:min-h-[430px] min-[480px]:px-5 min-[480px]:pt-[65px] md:min-h-[440px] md:px-[25px] md:pt-[70px] min-[768px]:min-h-[450px] min-[768px]:px-[30px] min-[768px]:pt-[75px] min-[1024px]:-mt-5 min-[1024px]:min-h-[460px] min-[1024px]:pt-20 2xl:min-h-[480px] 2xl:pt-[90px] 3xl:min-h-[520px] 3xl:px-10 3xl:pt-[100px]">
      {/* Glow */}
      <div className="pointer-events-none absolute top-[-100px] left-1/2 h-[270px] w-[320px] -translate-x-1/2 rounded-full bg-[rgba(27,230,186,0.08)] blur-[65px] min-[320px]:top-[-40px] min-[320px]:h-[290px] min-[320px]:w-[360px] min-[320px]:blur-[70px] xs:top-[-50px] xs:h-[320px] xs:w-[420px] xs:blur-[75px] min-[480px]:top-[-60px] min-[480px]:h-[350px] min-[480px]:w-[480px] min-[480px]:blur-[80px] md:top-[-70px] md:h-[380px] md:w-[560px] md:blur-[85px] min-[768px]:top-[-80px] min-[768px]:h-[420px] min-[768px]:w-[650px] min-[768px]:blur-[90px] min-[1024px]:top-[-100px] min-[1024px]:h-[450px] min-[1024px]:w-[720px] min-[1024px]:blur-[100px] 3xl:h-[580px] 3xl:w-[950px]" />

      <div className="relative z-[1] flex w-full max-w-[1000px] flex-col items-center text-center min-[768px]:max-w-[800px] min-[1024px]:max-w-[1000px] 3xl:max-w-[1100px]">
        <div className="mb-[22px] inline-flex items-center justify-center rounded-[20px] border border-[#3d3c3c] bg-black px-[7px] py-1 text-[6px] font-semibold tracking-[0.06em] text-[#2ed1bd] min-[320px]:mb-[14px] xs:mb-4 xs:px-2 xs:text-[7px] xs:tracking-[0.07em] min-[480px]:mb-[17px] min-[480px]:px-[9px] min-[480px]:py-[5px] min-[480px]:text-[7.5px] min-[480px]:tracking-[0.08em] md:mb-[18px] md:text-[8px] min-[768px]:mb-5 min-[768px]:px-[10px] min-[1024px]:mb-[22px] min-[1024px]:text-[9px]">
          {badge}
        </div>

        <h1 className="max-w-[750px] text-[28px] leading-[1.2] font-bold tracking-[-0.04em] text-[#f4f4f4] min-[320px]:w-full min-[320px]:max-w-[340px] min-[320px]:text-[31px] min-[320px]:leading-[1.18] min-[320px]:tracking-[-0.025em] xs:max-w-[430px] xs:text-4xl xs:leading-[1.17] xs:tracking-[-0.03em] min-[480px]:max-w-[500px] min-[480px]:text-[42px] min-[480px]:leading-[1.15] min-[480px]:tracking-[-0.04em] md:max-w-[580px] md:text-5xl min-[768px]:max-w-[650px] min-[768px]:text-[56px] min-[768px]:leading-[1.13] min-[1024px]:max-w-[700px] min-[1024px]:text-[64px] min-[1024px]:leading-[1.12] 2xl:max-w-[750px] 2xl:text-[74px] 3xl:max-w-[850px] 3xl:text-[88px]">
          <span className="block font-heading">{title}</span>
          <span className="block font-heading text-[#36cdb8]">{accentTitle}</span>
        </h1>

        <p className="mx-auto mt-4 w-full max-w-[900px] text-[10px] leading-[1.6] font-normal text-[#8d9298] min-[320px]:max-w-[340px] min-[320px]:text-[10.5px] xs:mt-[17px] xs:max-w-[420px] xs:text-[11.5px] xs:leading-[1.65] min-[480px]:mt-[18px] min-[480px]:max-w-[500px] min-[480px]:text-xs md:max-w-[600px] md:text-[13px] min-[768px]:mt-5 min-[768px]:max-w-[680px] min-[768px]:text-sm min-[1024px]:mt-[22px] min-[1024px]:max-w-[750px] min-[1024px]:leading-[1.7] 2xl:max-w-[850px] 2xl:text-[15px] 3xl:max-w-[950px] 3xl:text-base">
          {subtitle}
        </p>

        {actions.length > 0 && (
          <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-2 xs:mt-[22px] min-[480px]:mt-6 min-[480px]:w-auto min-[480px]:flex-nowrap min-[480px]:gap-[9px] md:mt-[26px] md:gap-[10px] min-[768px]:mt-7 min-[768px]:gap-3 min-[1024px]:gap-[14px] 2xl:mt-8">
            {actions.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className={
                  action.variant === 'outline' ? waitlistButton : affiliateButton
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
