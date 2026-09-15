const SIZES = {
  lg: {
    wrap: 'gap-4',
    row: 'gap-[13px]',
    tick: 'size-[22px] text-xs bg-[rgba(20,180,160,0.12)] text-brand',
    text: 'text-sm leading-[1.5] text-[#9a9a9a]',
  },
  sm: {
    wrap: 'gap-[11px]',
    row: 'gap-[10px]',
    tick: 'size-[17px] text-[10px] bg-[rgba(20,180,160,0.1)] text-[#22c7b1]',
    text: 'text-[11px] leading-[1.4] text-[#8b8b8b]',
  },
}

export default function CheckList({ items, size = 'lg' }) {
  const style = SIZES[size]

  return (
    <div className={`flex flex-col ${style.wrap}`}>
      {items.map((item) => (
        <div key={item} className={`flex items-center ${style.row}`}>
          <div
            className={`flex shrink-0 items-center justify-center rounded-full font-semibold ${style.tick}`}
          >
            ✓
          </div>
          <p className={`font-normal ${style.text}`}>{item}</p>
        </div>
      ))}
    </div>
  )
}
