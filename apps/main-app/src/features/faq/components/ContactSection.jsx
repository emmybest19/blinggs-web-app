import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="px-4 pt-14 xs:px-5 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20 xl:px-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  )
}
