/**
 * Help-centre contact details.
 *
 * NOTE: these come from the FAQ design and CONFLICT with the legal pages —
 * the policies give hello@blinggapp.com / legal@blinggapp.com and a Calabar
 * registered address, while the design shows support@blingg.com and a Lagos
 * office. Both can legitimately be true (a support desk and an office are not
 * the registered entity), but the domain differs too, so confirm before launch.
 */
export const contactCopy = {
  title: 'Need more help?',
  description:
    "If you couldn't find your answers in the directory, feel free to drop a direct line to our support engineers.",
  formTitle: 'Send a message',
}

export const contactChannels = [
  {
    id: 'email',
    icon: 'mail',
    label: 'Email Us',
    value: 'support@blingg.com',
    href: 'mailto:support@blingg.com',
  },
  {
    id: 'office',
    icon: 'pin',
    label: 'Visit Us',
    value: '12 Glover Road, Ikoyi, Lagos',
  },
]

export const contactFields = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your name...',
    autoComplete: 'name',
  },
  {
    name: 'email',
    label: 'Professional Email',
    type: 'email',
    placeholder: 'you@company.com',
    autoComplete: 'email',
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'What can we help you with?',
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us more details...',
  },
]
