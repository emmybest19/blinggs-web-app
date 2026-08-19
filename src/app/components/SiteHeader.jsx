import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import ComingSoonModal from '@shared/components/ComingSoonModal'
import { assets } from '@shared/config/site.config'
import { useDisclosure } from '@shared/hooks/useDisclosure'
import { cn } from '@shared/lib/cn'

import { productFeatures } from '@features/product-features'

import { featurePath, ROUTES } from '../router/routes'
import { primaryNav } from '../router/navigation'

export default function SiteHeader() {
  const mobileMenu = useDisclosure()
  const featuresMenu = useDisclosure()
  const downloadModal = useDisclosure()

  const navigate = useNavigate()

  const handleSelectFeature = (id) => {
    navigate(featurePath(id))
    featuresMenu.close()
    mobileMenu.close()
  }

  return (
    <div className="bg-[#434c5d] px-4 md:px-12 py-4 sticky top-0 z-50">
      <nav className="bg-[#2E374766] backdrop-blur-md text-white flex justify-between items-center px-6 md:px-10 py-4 md:py-5 rounded-[24px] max-w-7xl mx-auto min-h-[72px] relative shadow-lg border border-white/5">
        {/* Logo */}
        <Link
          to={ROUTES.home}
          className="transition-transform duration-300 hover:scale-105 shrink-0"
        >
          <img
            src={assets.logo}
            alt="Blingg"
            className="h-7 sm:h-9 md:h-10 w-auto"
            onError={(event) => {
              event.target.onerror = null
              event.target.src = assets.logoFallback
            }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 justify-end flex-1 ml-auto">
          <div className="flex items-center gap-8 text-sm font-medium">
            {/* Features dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={featuresMenu.open}
              onMouseLeave={featuresMenu.close}
            >
              <button
                onClick={() => navigate(ROUTES.features)}
                aria-expanded={featuresMenu.isOpen}
                className="flex items-center gap-1.5 text-white hover:text-[#00D4AA] transition-colors py-1 focus:outline-none relative"
              >
                <span>Features</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-300',
                    featuresMenu.isOpen && 'rotate-180 text-[#00D4AA]'
                  )}
                />
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full rounded-full" />
              </button>

              {featuresMenu.isOpen && (
                <div className="absolute top-full right-0 w-[360px] bg-[#0f1b2d] border border-white/10 rounded-2xl p-2 shadow-2xl z-50 space-y-1">
                  {productFeatures.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectFeature(item.id)}
                      className="group/item w-full text-left flex items-center justify-between p-2.5 rounded-xl cursor-pointer hover:bg-white/5 transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt=""
                          className="w-10 h-10 rounded-xl object-cover shrink-0 border border-white/10"
                        />
                        <span className="block">
                          <span className="block text-xs font-semibold text-white group-hover/item:text-[#00D4AA] transition-colors">
                            {item.title}
                          </span>
                          <span className="block text-[11px] text-slate-400 line-clamp-1">
                            {item.description}
                          </span>
                        </span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-[#00D4AA] transition-colors shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {primaryNav.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className="relative py-1 text-white hover:text-[#00D4AA] transition-colors group"
              >
                <span>{item.label}</span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00D4AA] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Get App CTA */}
          <button
            type="button"
            onClick={downloadModal.open}
            className="text-white px-6 py-2.5 bg-[#009875] rounded-xl hover:bg-emerald-600 transition-all text-sm font-medium shadow-md shrink-0 ml-2"
          >
            Get App
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={mobileMenu.toggle}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenu.isOpen}
          className="md:hidden text-white p-1 ml-auto"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenu.isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile drawer */}
        {mobileMenu.isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#2E3747] mt-3 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-xl z-50 border border-white/10 max-h-[80vh] overflow-y-auto">
            <p className="text-xs font-semibold text-[#00D4AA] uppercase tracking-wider">
              Features
            </p>
            <div className="space-y-2">
              {productFeatures.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectFeature(item.id)}
                  className="flex items-center gap-3 w-full text-left p-1.5 text-xs text-slate-300 hover:text-white"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-7 h-7 rounded-lg object-cover"
                  />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            <hr className="border-white/10 my-1" />

            {primaryNav.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                onClick={mobileMenu.close}
                className="text-sm"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                mobileMenu.close()
                downloadModal.open()
              }}
              className="w-full text-white py-3 bg-[#009875] rounded-xl text-sm font-medium mt-2"
            >
              Get App
            </button>
          </div>
        )}
      </nav>

      <ComingSoonModal
        isOpen={downloadModal.isOpen}
        onClose={downloadModal.close}
      />
    </div>
  )
}
