import { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import DownloadPage from "./modals/DownloadPage";
import { useNavigate } from "react-router-dom";
import TermsModal from "./modals/TermModal";
import CookiesModal from "./modals/CookiesModal";
import AboutModal from "./modals/AboutUs";
import PrivacyPolicyModal from "./modals/PrivacyPolicyModal"

function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [termModal, setTermModal] = useState(false);
  const [cookiesModal, setCookiesModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [policyModal, setPolicyModal] = useState(false)
  const navigate = useNavigate();
  return (
    <footer className="bg-[#0F1B2D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-10 h-10 bg-[#00D4AA] rounded-lg flex items-center justify-center text-black font-bold">
                B
              </div>
              <span className="text-2xl font-semibold text-white">
                Blingg
              </span> */}
              <img
                src="images/logo.png"
                alt="Click to home"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain cursor-pointer"
              />
            </div>

            <p className="text-sm leading-relaxed max-w-md mb-8">
              The all-in-one super app for messaging, payments, and group
              contributions. Send money, chat with friends, and grow your wealth
              together.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              {[FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-700/40 flex items-center justify-center hover:bg-[#00D4AA] hover:text-black transition"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => navigate("/features")}
                  className="hover:text-white"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/howItWorks")}
                  className="hover:text-white"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/blog")}
                  className="hover:text-white"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal(true)}
                  className="hover:text-white"
                >
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-6">About Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => setAboutModal(true)}
                  className="hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={() => setPolicyModal(true)} className="hover:text-white">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTermModal(true)}
                  className="hover:text-white"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCookiesModal(true)}
                  className="hover:text-white"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © 2026 Zeta Technology Limited. All rights reserved. Blingg is a
            product of Zeta Technology Limited.
          </p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div> */}
        </div>
      </div>
      <DownloadPage isOpen={openModal} onClose={() => setOpenModal(false)} />
      <TermsModal isOpen={termModal} onClose={() => setTermModal(false)} />
      <CookiesModal
        isOpen={cookiesModal}
        onClose={() => setCookiesModal(false)}
      />
      <AboutModal isOpen={aboutModal} onClose={() => setAboutModal(false)} />
        <PrivacyPolicyModal isOpen={policyModal} onClose={() => setPolicyModal(false)} />
    </footer>
  );
}

export default Footer;
