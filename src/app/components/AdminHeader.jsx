import { Link } from 'react-router-dom'

import { assets } from '@shared/config/site.config'

import { ROUTES } from '../router/routes'

export default function AdminHeader() {
  return (
    <div className="bg-[#434c5d] px-4 md:px-[60px] py-[20px] sticky top-0 z-50">
      <nav className="bg-[#2E374766] flex justify-between items-center px-6 md:px-[70px] py-[20px] rounded-[18px] max-w-7xl mx-auto relative">
        <Link to={ROUTES.home} className="cursor-pointer">
          <img
            src={assets.logo}
            alt="Blingg home"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <span className="text-white text-lg">Blingg SubAdmin</span>
      </nav>
    </div>
  )
}
