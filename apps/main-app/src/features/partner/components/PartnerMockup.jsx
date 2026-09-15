import phoneCluster from '@shared/assets/Phone_Cluster_Container.png'

/**
 * The phone cluster under the hero. Shares the home page's render — the design
 * uses the same three screens.
 */
export default function PartnerMockup() {
  return (
    <div className="flex w-full justify-center overflow-hidden bg-ink-deep px-4 pb-10 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 xl:px-20">
      <img
        src={phoneCluster}
        alt="The Blingg wallet, chat and group vault screens"
        className="block h-auto w-full max-w-[320px] object-contain xs:max-w-[380px] sm:max-w-[560px] lg:max-w-[820px] xl:max-w-[1000px]"
      />
    </div>
  )
}
