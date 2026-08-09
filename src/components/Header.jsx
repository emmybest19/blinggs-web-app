import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import DownloadPage from './modals/DownloadPage'

export const blinggFeaturesData = [
  {
    id: 'secure-messaging',
    title: 'Secure Messaging',
    description: 'End-to-end encrypted chat & instant voice messaging.',
    image:
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'private-calls',
    title: 'Private & Group Calls',
    description: 'HD voice and video calling for teams and friends.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'secure-scanning',
    title: 'Secure Scanning',
    description: 'Real-time automatic scanning for links and files.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'in-chat-payment',
    title: 'In-Chat Payment',
    description: 'Send and request money directly inside any chat.',
    image:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'group-contribution',
    title: 'Group Contribution',
    description: 'Personal & General savings pools with multi-sig approval.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'instant-bank-payout',
    title: 'Instant Bank Payouts',
    description: 'Transfer funds directly to any Nigerian bank account.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'stories-status',
    title: 'Stories & Status',
    description: 'Share photos, updates, and moments with contacts.',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=120&q=80'
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const navigate = useNavigate()

  const handleSelect = (id) => {
    navigate(`/features?selected=${id}`)
    setIsHovered(false)
    setIsOpen(false)
  }

  return (
    <div className="bg-[#434c5d] px-4 md:px-12 py-4 sticky top-0 z-50">
      <nav className="bg-[#2E374766] backdrop-blur-md text-white flex justify-between items-center px-6 md:px-10 py-4 md:py-5 rounded-[24px] max-w-7xl mx-auto min-h-[72px] relative shadow-lg border border-white/5">
        
        {/* Logo */}
        <Link to="/" className="transition-transform duration-300 hover:scale-105 shrink-0">
          <img
            src="/images/logo.png"
            alt="Blingg"
            className="h-7 sm:h-9 md:h-10 w-auto"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://via.placeholder.com/120x40/009875/FFFFFF?text=Blingg'
            }}
          />
        </Link>

        {/* Links aligned right with Get App Button */}
        <div className="hidden md:flex items-center gap-8 justify-end flex-1 ml-auto">
          
          <div className="flex items-center gap-8 text-sm font-medium">
            
            {/* Features Dropdown Menu with Hover Underline */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button
                onClick={() => navigate('/features')}
                className="flex items-center gap-1.5 text-white hover:text-[#00D4AA] transition-colors py-1 focus:outline-none relative"
              >
                <span>Features</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isHovered ? 'rotate-180 text-[#00D4AA]' : ''
                  }`}
                />
                {/* Underline Transition */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full rounded-full" />
              </button>

              {/* Clean Dropdown */}
              {isHovered && (
                <div className="absolute top-full right-0 w-[360px] bg-[#0f1b2d] border border-white/10 rounded-2xl p-2 shadow-2xl z-50 space-y-1">
                  {blinggFeaturesData.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className="group/item flex items-center justify-between p-2.5 rounded-xl cursor-pointer hover:bg-white/5 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 rounded-xl object-cover shrink-0 border border-white/10"
                        />
                        <div>
                          <p className="text-xs font-semibold text-white group-hover/item:text-[#00D4AA] transition-colors">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-slate-400 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-[#00D4AA] transition-colors shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* How it works Link with Hover Underline */}
            <Link
              to="/howItWorks"
              className="relative py-1 text-white hover:text-[#00D4AA] transition-colors group"
            >
              <span>How it works</span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>

            {/* Blog Link with Hover Underline */}
            <Link
              to="/blog"
              className="relative py-1 text-white hover:text-[#00D4AA] transition-colors group"
            >
              <span>Blog</span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>

            {/* FAQ Link with Hover Underline */}
            <Link
              to="/faq"
              className="relative py-1 text-white hover:text-[#00D4AA] transition-colors group"
            >
              <span>FAQ</span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          </div>

          {/* Get App CTA */}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="text-white px-6 py-2.5 bg-[#009875] rounded-xl hover:bg-emerald-600 transition-all text-sm font-medium shadow-md shrink-0 ml-2"
          >
            Get App
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1 ml-auto"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#2E3747] mt-3 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-xl z-50 border border-white/10 max-h-[80vh] overflow-y-auto">
            <p className="text-xs font-semibold text-[#00D4AA] uppercase tracking-wider">
              Features
            </p>
            <div className="space-y-2">
              {blinggFeaturesData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className="flex items-center gap-3 w-full text-left p-1.5 text-xs text-slate-300 hover:text-white"
                >
                  <img src={item.image} alt="" className="w-7 h-7 rounded-lg object-cover" />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            <hr className="border-white/10 my-1" />

            <Link to="/howItWorks" onClick={() => setIsOpen(false)} className="text-sm">How it works</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-sm">Blog</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="text-sm">FAQ</Link>

            <button
              onClick={() => {
                setIsOpen(false)
                setOpenModal(true)
              }}
              className="w-full text-white py-3 bg-[#009875] rounded-xl text-sm font-medium mt-2"
            >
              Get App
            </button>
          </div>
        )}
      </nav>

      {openModal && <DownloadPage isOpen={openModal} onClose={() => setOpenModal(false)} />}
    </div>
  )
}