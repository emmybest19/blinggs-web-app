/**
 * Per-console accent classes.
 *
 * These are spelled out as complete literal class names on purpose: Tailwind
 * scans source text, so a computed `text-domain-${id}` would never be emitted.
 * Adding a console means adding a row here and a `--color-domain-*` token in
 * @blingg/theme.
 */
export const ACCENTS = {
  super: {
    text: 'text-domain-super',
    bg: 'bg-domain-super',
    softBg: 'bg-domain-super/10',
    border: 'border-domain-super/35',
    ring: 'focus-visible:outline-domain-super',
    glow: 'shadow-[0_0_0_1px_rgba(167,139,250,0.25)]',
  },
  finance: {
    text: 'text-domain-finance',
    bg: 'bg-domain-finance',
    softBg: 'bg-domain-finance/10',
    border: 'border-domain-finance/35',
    ring: 'focus-visible:outline-domain-finance',
    glow: 'shadow-[0_0_0_1px_rgba(33,199,176,0.25)]',
  },
  compliance: {
    text: 'text-domain-compliance',
    bg: 'bg-domain-compliance',
    softBg: 'bg-domain-compliance/10',
    border: 'border-domain-compliance/35',
    ring: 'focus-visible:outline-domain-compliance',
    glow: 'shadow-[0_0_0_1px_rgba(59,130,246,0.25)]',
  },
  support: {
    text: 'text-domain-support',
    bg: 'bg-domain-support',
    softBg: 'bg-domain-support/10',
    border: 'border-domain-support/35',
    ring: 'focus-visible:outline-domain-support',
    glow: 'shadow-[0_0_0_1px_rgba(245,158,11,0.25)]',
  },
  community: {
    text: 'text-domain-community',
    bg: 'bg-domain-community',
    softBg: 'bg-domain-community/10',
    border: 'border-domain-community/35',
    ring: 'focus-visible:outline-domain-community',
    glow: 'shadow-[0_0_0_1px_rgba(236,72,153,0.25)]',
  },
  security: {
    text: 'text-domain-security',
    bg: 'bg-domain-security',
    softBg: 'bg-domain-security/10',
    border: 'border-domain-security/35',
    ring: 'focus-visible:outline-domain-security',
    glow: 'shadow-[0_0_0_1px_rgba(239,68,68,0.25)]',
  },
}

export const getAccent = (id) => ACCENTS[id] ?? ACCENTS.finance
