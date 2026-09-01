import { useState } from 'react'
import { Link } from 'react-router-dom'

import blinggLogo from '../../assets/blingg-logo.png'
import Button from '../Button/Button.jsx'

const NAV_LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
]

const barSpan =
  'block h-[2px] rounded-[20px] bg-white transition-[transform,opacity,width] duration-300 ' +
  'w-[19px] xs:w-[23px] min-[768px]:w-[25px]'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="sticky top-0 z-[1000] box-border flex w-full items-center justify-between border-b border-white/[0.06] bg-ink-deep px-2 py-[10px] xs:px-4 xs:py-[13px] min-[480px]:px-[22px] min-[480px]:py-[14px] md:px-[30px] md:py-[15px] min-[768px]:px-10 min-[768px]:py-4 min-[1024px]:px-[45px] min-[1024px]:py-[17px] 2xl:px-[60px] 2xl:py-[18px]">
      {/* Brand */}
      <div className="flex shrink-0 items-center">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-1 text-[0.78rem] font-semibold text-white no-underline xs:gap-[7px] xs:text-base min-[480px]:gap-2 min-[480px]:text-[1.05rem] md:gap-[10px] md:text-[1.1rem] min-[768px]:text-[1.15rem] 2xl:text-[1.25rem]"
        >
          <img
            src={blinggLogo}
            alt="Blingg Logo"
            className="block size-[22px] object-contain xs:size-[27px] min-[480px]:size-7 md:size-[29px] min-[768px]:size-[30px] 2xl:size-8"
          />
          <span>Blingg</span>
        </Link>
      </div>

      {/* Links — inline bar on desktop, slide-in drawer below xl */}
      <div
        className={`flex flex-col items-stretch justify-start overflow-y-auto border-l border-white/[0.08] bg-ink-deep shadow-[-12px_0_40px_rgba(0,0,0,0.45)] transition-[transform,opacity,visibility] duration-[400ms] fixed inset-y-0 right-0 left-auto z-[1100] box-border h-screen w-[88vw] pt-[60px] xs:w-[min(280px,84vw)] xs:pt-[72px] min-[480px]:w-[280px] min-[480px]:pt-[78px] md:w-[300px] md:pt-[82px] min-[768px]:w-[330px] min-[768px]:pt-[90px] min-[1024px]:static min-[1024px]:ml-10 min-[1024px]:h-auto min-[1024px]:w-auto min-[1024px]:translate-x-0 min-[1024px]:overflow-visible min-[1024px]:border-0 min-[1024px]:bg-transparent min-[1024px]:pt-0 min-[1024px]:opacity-100 min-[1024px]:shadow-none min-[1024px]:visible min-[1024px]:pointer-events-auto 2xl:ml-[55px] 3xl:ml-[60px] ${
          menuOpen
            ? 'translate-x-0 opacity-100 visible pointer-events-auto'
            : 'translate-x-[105%] opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Drawer-only brand strip */}
        <div className="mb-[18px] box-border flex h-10 w-full shrink-0 items-center justify-center border-b border-white/[0.06] p-[10px] min-[1024px]:hidden">
          <Link
            to="/"
            onClick={closeMenu}
            className="-mt-10 w-full items-center gap-[10px] text-[1.1rem] font-semibold text-white no-underline"
          >
            <img
              src={blinggLogo}
              alt="Blingg Logo"
              className="block size-[30px] object-contain"
            />
            <span>Blingg</span>
          </Link>
        </div>

        <ul className="box-border flex w-full list-none flex-col items-start gap-[5px] p-2 xs:px-[15px] xs:pt-3 xs:pb-[25px] min-[480px]:px-5 min-[480px]:pt-3 min-[480px]:pb-[25px] md:px-[25px] md:pt-[15px] md:pb-[25px] min-[768px]:px-[30px] min-[768px]:pt-[15px] min-[768px]:pb-[30px] min-[1024px]:w-auto min-[1024px]:flex-row min-[1024px]:items-center min-[1024px]:gap-[26px] min-[1024px]:p-0 2xl:gap-8 3xl:gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.to} className="w-full min-[1024px]:w-auto">
              <Link
                to={link.to}
                onClick={closeMenu}
                className="box-border block w-full rounded-lg p-[11px] text-[0.8rem] font-medium text-muted no-underline transition-[color,background] duration-250 hover:bg-white/5 hover:text-white xs:px-[14px] xs:py-[13px] xs:text-[0.9rem] min-[480px]:p-[14px] min-[480px]:text-[0.95rem] md:px-[15px] md:py-[14px] min-[768px]:p-4 min-[768px]:text-base min-[1024px]:w-auto min-[1024px]:rounded-none min-[1024px]:p-0 min-[1024px]:text-[0.9rem] min-[1024px]:hover:bg-transparent 2xl:text-[0.95rem]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA buttons */}
      <div className="mr-[6px] ml-auto flex shrink-0 items-center gap-[14px] xs:mr-[15px] min-[480px]:mr-[18px] md:mr-5 min-[768px]:mr-[22px] min-[1024px]:mr-0 min-[1024px]:-ml-5">
        <Button />
      </div>

      {/* Hamburger */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        className="relative z-[1200] flex size-6 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] bg-transparent xs:size-7 xs:gap-[6px] min-[480px]:w-[30px] min-[768px]:h-7 min-[768px]:w-8 min-[1024px]:hidden"
      >
        <span
          className={`${barSpan} ${menuOpen ? 'translate-y-[7px] rotate-45 min-[768px]:translate-y-2' : ''}`}
        />
        <span className={`${barSpan} ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} />
        <span
          className={`${barSpan} ${menuOpen ? '-translate-y-[7px] -rotate-45 min-[768px]:-translate-y-2' : ''}`}
        />
      </button>
    </nav>
  )
}
