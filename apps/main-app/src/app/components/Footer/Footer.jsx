import { Link } from 'react-router-dom'

import blinggLogo from '../../assets/blingg-logo.png'
import Facebook from '../../assets/facebook-hero.png'
import Instagram from '../../assets/instagram-footer.png'
import LinkedIn from '../../assets/linkedin-footer.png'
import Twitter from '../../assets/twitter-footer.png'

const SOCIALS = [
  { src: Twitter, alt: 'twitter' },
  { src: Instagram, alt: 'instagram' },
  { src: LinkedIn, alt: 'LinkedIn' },
  { src: Facebook, alt: 'facebook' },
]

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { href: '#features', label: 'Features' },
      { href: '#how-it-works', label: 'How It Works' },
      { href: '#download', label: 'Download' },
      { href: '#security', label: 'Security' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { href: '#about', label: 'About Us' },
      { href: '#blog', label: 'Blog' },
      { href: '#careers', label: 'Careers' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#privacy', label: 'Privacy Policy' },
      { to: '/terms-of-service', label: 'Terms of Service' },
      { href: '#cookies', label: 'Cookie Policy' },
    ],
  },
]

const BOTTOM_LINKS = [
  { href: '#privacy', label: 'Privacy' },
  { to: '/terms-of-service', label: 'Terms' },
  { href: '#status', label: 'Staff Portal' },
]

const linkClass =
  'text-[9px] font-normal text-[#747474] no-underline transition-colors duration-200 hover:text-[#22c7b0]'

/**
 * Entries with `to` are real routes and must go through the router; the rest
 * are still `#` placeholders and stay plain anchors until those pages exist.
 */
function FooterLink({ link, className }) {
  if (link.to) {
    return (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    )
  }

  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="box-border w-full border-t border-ink-soft bg-ink-deep px-4 pt-9 pb-4 xs:px-5 xs:pt-10 xs:pb-[18px] sm:px-8 sm:pt-11 sm:pb-5 lg:px-12 lg:pt-12 lg:pb-[22px] xl:px-20 xl:pt-[52px] xl:pb-6">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 pb-[42px] lg:flex-row lg:gap-0">
        {/* Brand */}
        <div className="w-full lg:w-[250px]">
          <div className="mb-[18px] flex items-center gap-[7px]">
            <img
              src={blinggLogo}
              alt="Blingg Logo"
              className="size-7 object-contain"
            />
            <span className="text-base font-semibold text-[#e4e4e4]">Blingg</span>
          </div>

          <p className="mb-[18px] max-w-[230px] text-[10px] leading-[1.6] font-normal text-[#747474]">
            The all-in-one super app for messaging, payments, and group
            contributions.
          </p>

          <div className="flex items-center gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.alt}
                href="#"
                className="box-border flex size-7 items-center justify-center rounded-full border border-[#242424] bg-[#141414] text-[10px] font-medium text-[#777777] no-underline transition-[color,border-color,background-color] duration-250 hover:border-[#22c7b0] hover:bg-[#101817] hover:text-[#22c7b0]"
              >
                <img src={social.src} alt={social.alt} className="size-[10px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="flex w-full max-w-full flex-wrap justify-between gap-x-5 gap-y-[18px] xs:gap-x-6 xs:gap-y-5 sm:gap-x-8 sm:gap-y-6 lg:w-[56%] lg:max-w-[620px] lg:flex-nowrap lg:gap-0">
          {COLUMNS.map((column) => (
            <div
              key={column.title}
              className="flex min-w-[45%] flex-col gap-3 xs:min-w-[40%] sm:min-w-0"
            >
              <h4 className="mb-1 text-[10px] font-medium text-[#cfcfcf]">
                {column.title}
              </h4>

              {column.links.map((link) => (
                <FooterLink key={link.label} link={link} className={linkClass} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-[14px] border-t border-ink-soft pt-[22px] lg:flex-row lg:items-center lg:gap-0">
        <p className="text-[9px] font-normal text-[#5f5f5f]">
          &copy; {new Date().getFullYear()} Zeta Technologies Ltd. All rights
          reserved.
        </p>

        <div className="flex items-center gap-[18px]">
          {BOTTOM_LINKS.map((link) => (
            <FooterLink
              key={link.label}
              link={link}
              className="text-[9px] text-[#5f5f5f] no-underline transition-colors duration-200 hover:text-[#22c7b0]"
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
