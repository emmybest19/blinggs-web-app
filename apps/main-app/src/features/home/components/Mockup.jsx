import encryptionImg from '@shared/assets/circle-x.png'
import mockUp from '@shared/assets/Phone_Cluster_Container.png'
import Transfer from '@shared/assets/Vector-transfers.png'
import ZeroFee from '@shared/assets/Vector_fees.png'

const HIGHLIGHTS = [
  { src: encryptionImg, alt: 'encryption_insure', label: '256-bit Encryption' },
  { src: ZeroFee, alt: 'IsNot_fess', label: 'Zero Fees' },
  { src: Transfer, alt: 'Instant_transfer', label: 'Instant Transfers' },
]

export default function Mockup() {
  return (
    <div className="relative mb-[50px] flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-ink-deep xs:mb-[60px] xs:h-[450px] min-[414px]:mb-[70px] min-[414px]:h-[480px] min-[481px]:mb-[75px] min-[481px]:h-[520px] min-[641px]:mb-20 min-[641px]:h-[550px] min-[769px]:mb-[85px] min-[769px]:h-[600px] min-[1025px]:mb-[90px] min-[1025px]:h-[620px] min-[1441px]:mb-[100px] min-[1441px]:h-[650px]">
      <div className="flex w-full justify-center">
        <img
          src={mockUp}
          alt="default mockup-img"
          className="block h-auto w-full max-w-[300px] object-contain xs:max-w-[360px] min-[414px]:max-w-[420px] min-[481px]:max-w-[500px] min-[641px]:max-w-[700px] min-[769px]:max-w-[950px] min-[1025px]:w-[1300px] min-[1025px]:max-w-[1300px] min-[1441px]:w-[1600px] min-[1441px]:max-w-[1600px]"
        />
      </div>

      <div className="flex h-[200px] w-full flex-wrap items-center justify-center gap-5 bg-ink-deep px-[10px] text-[aliceblue] xs:h-[220px] xs:gap-[25px] min-[414px]:h-[240px] min-[414px]:gap-[30px] min-[414px]:px-[15px] min-[481px]:h-[260px] min-[481px]:gap-10 min-[481px]:px-5 min-[641px]:h-[280px] min-[641px]:gap-[50px] min-[641px]:px-[30px] min-[769px]:h-[300px] min-[769px]:gap-[55px] min-[769px]:px-10 min-[1025px]:h-[320px] min-[1025px]:w-max min-[1025px]:justify-between min-[1025px]:gap-[58px] min-[1025px]:px-0 min-[1441px]:h-[340px] min-[1441px]:gap-[65px]">
        {HIGHLIGHTS.map((item) => (
          <div key={item.label} className="flex gap-[3px] xs:gap-1 min-[414px]:gap-[5px]">
            <img
              src={item.src}
              alt={item.alt}
              className="size-2 xs:size-[9px] min-[414px]:size-[10px] min-[481px]:size-[11px] min-[1025px]:size-3"
            />
            <p className="text-[7px] text-[rgb(136,141,146)] xs:text-[8px] min-[414px]:text-[9px] min-[769px]:text-[10px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
