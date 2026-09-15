import { useState } from 'react'

import FaqItem from './FaqItem'

/**
 * A category and its questions.
 *
 * Accordion semantics: one answer open at a time within the group, the first
 * open by default — which is what the design shows. Each group tracks its own
 * open item, so opening a payments question does not close a security one.
 */
export default function FaqGroup({ group }) {
  const [openId, setOpenId] = useState(group.items[0]?.id ?? null)

  const toggle = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <section className="mb-10 last:mb-0 sm:mb-12">
      <h2 className="mb-4 text-[17px] leading-[1.3] font-bold tracking-[-0.01em] text-brand sm:mb-5 sm:text-[19px]">
        {group.title}
      </h2>

      <div className="flex flex-col gap-3">
        {group.items.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
    </section>
  )
}
