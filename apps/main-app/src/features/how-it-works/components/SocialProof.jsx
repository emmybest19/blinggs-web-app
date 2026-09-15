import avatarsRow from '@shared/assets/avatars-row.png'

export default function SocialProof() {
  return (
    <div className="box-border flex min-h-[110px] w-full flex-col items-center justify-center border-t border-ink-soft bg-ink-deep px-[14px] py-[22px] text-center xs:px-4 xs:py-6 sm:px-5 sm:py-7">
      <div className="mb-2 flex h-8 items-center">
        <img
          src={avatarsRow}
          alt="Early Blingg members"
          className="block h-[34px] w-auto object-contain sm:h-[38px]"
        />
      </div>
    </div>
  )
}
