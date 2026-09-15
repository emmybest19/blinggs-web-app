import { contactChannels, contactCopy } from '../data/contact.data'
import ContactCard from './ContactCard'

export default function ContactDetails() {
  return (
    <div className="min-w-0">
      <h2 className="text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-[#f2f2f2] sm:text-[29px]">
        {contactCopy.title}
      </h2>

      <p className="mt-3 max-w-[420px] font-sans text-[13px] leading-[1.7] text-[#8d9298] sm:text-[14px]">
        {contactCopy.description}
      </p>

      <div className="mt-7 flex flex-col gap-3">
        {contactChannels.map((channel) => (
          <ContactCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  )
}
