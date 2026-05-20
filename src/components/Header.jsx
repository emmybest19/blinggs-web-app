import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import DownloadPage from './modals/DownloadPage'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    isActive ? 'text-[#00D4AA]' : 'text-white'

  const handleNavigate = path => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <div className="bg-[#434c5d] px-4 md:px-[60px] py-[20px] sticky top-0 z-50 animate-fade-in">
      <nav className="bg-[#2E374766] text-white flex justify-between items-center px-6 md:px-[70px] py-[20px] rounded-[18px] max-w-7xl mx-auto relative transition-all duration-300">
        {/* Logo */}
        <div
          onClick={() => handleNavigate('/')}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/images/logo.png"
            alt="Home"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/features"
            className={
              linkClass + ' hover-underline transition-colors duration-300'
            }
          >
            Feature
          </NavLink>
          <NavLink
            to="/howItWorks"
            className={
              linkClass + ' hover-underline transition-colors duration-300'
            }
          >
            How it works
          </NavLink>
          <NavLink
            to="/blog"
            className={
              linkClass + ' hover-underline transition-colors duration-300'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/faq"
            className={
              linkClass + ' hover-underline transition-colors duration-300'
            }
          >
            FAQ
          </NavLink>

          {/* <a href="/app.apk" download> */}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="text-black px-[32px] py-[14px] bg-[#009875] rounded-lg hover:opacity-90 transition text-white btn-smooth"
          >
            Get App
          </button>
          {/* </a> */}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img
              src="/images/cancel.png"
              alt="close"
              className="w-6 h-6 invert brightness-0 animate-spin"
              style={{ animationDuration: '0.3s' }}
            />
          ) : (
            <img
              src="/images/menu.png"
              alt="menu"
              className="w-6 h-6 invert brightness-0 hover:scale-110 transition-transform"
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#2E3747] mt-4 rounded-xl p-6 flex flex-col gap-5 md:hidden shadow-xl animate-slide-in-down">
            <NavLink
              to="/features"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Feature
            </NavLink>

            <NavLink
              to="/howItWorks"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              How it works
            </NavLink>

            <NavLink
              to="/blog"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>

            <NavLink
              to="/faq"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>

            {/* <a href="/app.apk" download> */}
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="w-full text-black py-[14px] bg-[#009875] rounded-lg cursor-pointer btn-smooth hover:bg-emerald-600 transition-all duration-300"
            >
              Get App
            </button>
            {/* </a> */}
          </div>
        )}
      </nav>
      <DownloadPage isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}

export default Header
