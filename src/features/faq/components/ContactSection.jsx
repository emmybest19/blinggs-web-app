import { CheckCircle2, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

import { contact } from '@shared/config/site.config'

const CONTACT_CARDS = [
  { id: 'email', icon: Mail, title: 'Email Us', value: contact.supportEmail },
  { id: 'address', icon: MapPin, title: 'Visit Us', value: contact.address },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      className="w-full px-4 py-12 max-w-6xl mx-auto font-sans"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact cards */}
        <div className="flex flex-col gap-6">
          {CONTACT_CARDS.map(({ icon: Icon, ...card }) => (
            <div
              key={card.id}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed font-medium">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Send a message
            </h2>

            {submitted && (
              <div className="mb-6 flex items-center gap-2 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Johnny Evans"
                    className="w-full rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none border border-gray-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none border border-gray-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none border border-gray-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
