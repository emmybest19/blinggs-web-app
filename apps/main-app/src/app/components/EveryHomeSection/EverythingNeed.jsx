import groupChat from '../../assets/group-chat-img.png'
import group from '../../assets/group-icon.png'
import smart from '../../assets/credit-card-payments.png'
import mainMessage from '../../assets/message-main img.png'
import message from '../../assets/message-square.png'
import smartPayment from '../../assets/payments-main-img.png'

const CARDS = [
  {
    icon: message,
    iconAlt: 'default_message_icon',
    title: 'Chat & Pay',
    body: 'Messaging and commerce blended into one smooth flow. Request money and send receipts natively within the conversation.',
    image: mainMessage,
    imageAlt: 'contact_img',
  },
  {
    icon: smart,
    iconAlt: 'default_message_icon',
    title: 'Smart Payments',
    body: 'Enjoy rapid transfers, direct debit mandates, and contactless utilities. Instant confirmation guarantees absolute peace of mind.',
    image: smartPayment,
    imageAlt: 'wallet_default_img',
  },
]

const cardShell =
  'box-content overflow-hidden rounded-[10px] border-t border-[#1cae9d] bg-ink'
const iconClass = 'mb-5 size-[22px] object-contain'
const labelClass =
  'mb-[10px] block text-sm font-medium text-[#f1f1f1] xs:text-[15px] sm:text-base'

export default function EverythingYouNeed() {
  return (
    <div className="w-full bg-ink-deep py-[54px] text-white sm:py-16 lg:py-20 xl:py-[100px]">
      <div className="mb-[45px] text-center">
        <h2 className="text-[25px] leading-[1.2] font-semibold text-[#f1f1f1] lg:text-[28px] xl:text-[32px]">
          Everything you need.
        </h2>
        <h4 className="mt-3 text-[14px] font-normal text-[#888888]">
          Nothing you don&apos;t
        </h4>
      </div>

      <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-4 px-3 xs:px-4 sm:max-w-[520px] sm:px-0 lg:max-w-[1100px] lg:grid-cols-2 lg:gap-5">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className={`${cardShell} h-[220px] w-full xs:h-[240px] sm:h-[260px] lg:h-[300px] lg:w-[98%]`}
          >
            <div className="relative box-border flex h-full w-full items-center justify-between py-[18px] pl-[18px] xs:py-[22px] xs:pl-[22px] lg:py-[25px] lg:pl-[25px]">
              <div className="relative z-[2] flex h-full w-[64%] flex-col justify-start sm:w-[60%] lg:w-[55%]">
                <img src={card.icon} alt={card.iconAlt} className={iconClass} />

                <div className="flex flex-col">
                  <label className={labelClass}>{card.title}</label>
                  <p className="max-w-[190px] text-[11px] leading-[1.6] font-normal text-[#888888] sm:max-w-[200px] sm:text-xs lg:max-w-[260px]">
                    {card.body}
                  </p>
                </div>
              </div>

              <img
                src={card.image}
                alt={card.imageAlt}
                className="absolute right-[10px] bottom-[-18px] z-[1] h-auto w-[100px] object-contain transition-all duration-300 ease-in hover:scale-[1.04] xs:right-[14px] xs:w-[120px] sm:w-[150px] lg:right-5 lg:bottom-[-25px] lg:w-[190px]"
              />
            </div>
          </div>
        ))}

        {/* Wide card spanning both columns */}
        <div
          className={`${cardShell} col-span-full h-[270px] w-full xs:h-[300px] lg:h-[400px]`}
        >
          <div className="relative box-border flex h-full w-full items-center py-[18px] pl-[18px] xs:py-[22px] xs:pl-[22px] lg:py-[25px] lg:pl-[25px]">
            <div className="relative z-[2] flex h-full w-[64%] flex-col justify-start xs:w-[60%] sm:w-[56%] lg:w-[55%]">
              <img
                src={group}
                alt="default_message_icon"
                className={iconClass}
              />

              <div className="flex flex-col">
                <label className={labelClass}>Group Power</label>
                <p className="max-w-full text-[11px] leading-[1.6] font-normal text-[#888888] sm:text-xs lg:max-w-[420px]">
                  Pool resources effortlessly. Set joint targets, coordinate
                  mutual savings circles, and watch collective wealth compound
                  automatically.
                </p>
              </div>
            </div>

            <img
              src={groupChat}
              alt="default_group_conversation"
              className="absolute right-2 bottom-[-16px] z-[1] h-auto w-[92px] object-contain transition-all duration-500 hover:scale-[1.04] xs:right-3 xs:bottom-[-20px] xs:w-[120px] sm:right-4 sm:bottom-[-24px] sm:w-[160px] lg:right-[30px] lg:bottom-[-40px] lg:h-[400px] lg:w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
