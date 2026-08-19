/**
 * Site-wide, feature-agnostic configuration.
 *
 * Anything that describes the company / brand rather than a single feature
 * lives here so that a copy change never requires touching a component.
 */

export const company = {
  legalName: 'Zeta Technology Limited',
  rcNumber: '9293143',
  productName: 'Blingg',
  tagline: 'Connect. Contribute. Grow Together.',
  copyright:
    '© 2026 Zeta Technology Limited. All rights reserved. Blingg is a product of Zeta Technology Limited.',
  description:
    'Connect, communicate, and pay with ease. Blingg brings intelligent messaging, seamless payments, and group contributions together in one trusted platform.',
}

export const contact = {
  generalEmail: 'Contact@blinggapp.com',
  supportEmail: 'support@blinggapp.com',
  address: '14 Diamond Hill Calabar, Nigeria',
}

export const socials = [
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
]

export const assets = {
  logo: '/images/logo.png',
  logoFallback:
    'https://via.placeholder.com/120x40/009875/FFFFFF?text=Blingg',
  phonePreview: '/images/iPhone.png',
}

/** Brand colours referenced from JS (Tailwind classes stay inline in markup). */
export const brand = {
  primary: '#009875',
  accent: '#00D4AA',
  surface: '#0b1220',
  surfaceRaised: '#0f1b2d',
  shell: '#434c5d',
}
