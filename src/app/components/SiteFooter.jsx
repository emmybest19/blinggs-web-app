import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { assets, company, socials } from '@shared/config/site.config'

import { footerBottomNav, footerNav } from '../router/navigation'
import { ROUTES } from '../router/routes'

const SOCIAL_ICONS = {
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#0F1B2D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Link to={ROUTES.home}>
                <img
                  src={assets.logo}
                  alt="Blingg Logo"
                  className="h-8 w-auto cursor-pointer object-contain sm:h-10 md:h-12"
                />
              </Link>
            </div>

            <p className="mb-8 max-w-md text-sm leading-relaxed">
              {company.description}
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.id]

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/40 transition hover:bg-[#00D4AA] hover:text-black"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerNav.map((column) => (
            <div key={column.id}>
              <h4 className="mb-6 font-semibold text-white">{column.title}</h4>

              <ul className="space-y-4 text-sm">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-700/50 pt-8 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <p>{company.copyright}</p>

          <div className="flex flex-wrap items-center gap-5">
            {footerBottomNav.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
