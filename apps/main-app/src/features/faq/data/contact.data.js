
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
    value: 'No 14 Diamond Street Calabar, Nigeria',
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
    placeholder: 'example@gmail.com',
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
