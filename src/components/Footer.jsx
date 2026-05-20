import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="bg-[#0F1B2D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Blingg Logo"
                className="h-8 w-auto cursor-pointer object-contain sm:h-10 md:h-12"
                onClick={() => navigate('/')}
              />
            </div>

            <p className="mb-8 max-w-md text-sm leading-relaxed">
              The all-in-one super app for messaging, payments, and group
              contributions. Send money, chat with friends, and grow your wealth
              together.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  icon: FaTwitter,
                  link: 'https://twitter.com',
                },
                {
                  icon: FaInstagram,
                  link: 'https://instagram.com',
                },
                {
                  icon: FaLinkedinIn,
                  link: 'https://linkedin.com',
                },
                {
                  icon: FaFacebookF,
                  link: 'https://facebook.com',
                },
              ].map((item, idx) => {
                const Icon = item.icon

                return (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/40 transition hover:bg-[#00D4AA] hover:text-black"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Product</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => navigate('/features')}
                  className="transition hover:text-white"
                >
                  Features
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate('/howItWorks')}
                  className="transition hover:text-white"
                >
                  How it Works
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate('/blog')}
                  className="transition hover:text-white"
                >
                  Blog
                </button>
              </li>

              {/* <li>
                <button
                  onClick={() => navigate('/download')}
                  className="transition hover:text-white"
                >
                  Download
                </button>
              </li> */}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-6 font-semibold text-white">About Us</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="transition hover:text-white"
                >
                  About Us
                </button>
              </li>

              {/* <li>
                <button
                  onClick={() => navigate('/careers')}
                  className="transition hover:text-white"
                >
                  Careers
                </button>
              </li> */}

              <li>
                <button
                  // onClick={() => navigate('/contact')}
                  className="transition hover:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-6 font-semibold text-white">Legal</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => navigate('/privacyPolicy')}
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate('/termsOfService')}
                  className="transition hover:text-white"
                >
                  Terms of Service
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate('/cookiesPolicy')}
                  className="transition hover:text-white"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-700/50 pt-8 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <p>
            © 2026 Zeta Technology Limited. All rights reserved. Blingg is a
            product of Zeta Technology Limited.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={() => navigate('/privacyPolicy')}
              className="transition hover:text-white"
            >
              Privacy
            </button>

            <button
              onClick={() => navigate('/termsOfService')}
              className="transition hover:text-white"
            >
              Terms
            </button>

            <button
              onClick={() => navigate('/cookiesPolicy')}
              className="transition hover:text-white"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
