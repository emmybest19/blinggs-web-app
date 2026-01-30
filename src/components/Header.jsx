// import { Navigate, NavLink, useNavigate } from "react-router-dom";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const linkClass = ({ isActive }) =>
//     isActive ? "text-[#00D4AA] " : "text-white ";

//   const navigate = useNavigate()

//   return (
//     <div className="bg-[#434c5d] px-[60px] py-[20px] sticky inset-0 z-50 ">
//       <nav className="bg-[#2E374766] flex justify-between items-center gap-2 px-[70px] py-[31px] rounded-[18px] max-w-7xl mx-auto">
//         <div onClick={() => navigate('/')}>
//           <img
//             src="images/logo.png"
//             alt="Click to home"
//             className="h-8 sm:h-10 md:h-12 w-auto object-contain cursor-pointer"
//           />
//         </div>
//         <div className="flex gap-4 items-center">
//           <NavLink to="/features" className={linkClass}>
//             Feature
//           </NavLink>
//           <NavLink to="/howItWorks" className={linkClass}>
//             How it works
//           </NavLink>
//           <NavLink to="/blog" className={linkClass}>
//             Blog
//           </NavLink>
//           <NavLink to="/faq" className={linkClass}>
//             FAQ
//           </NavLink>
//           <a href="/app.apk" download className=" cursor-pointer">
//             <button
//               type="button"
//               className="cursor-pointer text-black px-[32px] py-[16px] bg-[#009875]  rounded-lg"
//             >
//               Download
//             </button>
//           </a>
//         </div>
//         {/* mobile view */}
//         <div>
//           {isOpen ? <img src="/images/menu.png" alt="menu"  /> : <img src="/images/cancel.png" alt="cancel" />}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive ? "text-[#00D4AA]" : "text-white";

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="bg-[#434c5d] px-4 md:px-[60px] py-[20px] sticky top-0 z-50">
      <nav className="bg-[#2E374766] flex justify-between items-center px-6 md:px-[70px] py-[20px] rounded-[18px] max-w-7xl mx-auto relative">
        {/* Logo */}
        <div onClick={() => handleNavigate("/")} className="cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Home"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/features" className={linkClass}>
            Feature
          </NavLink>
          <NavLink to="/howItWorks" className={linkClass}>
            How it works
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
          <NavLink to="/faq" className={linkClass}>
            FAQ
          </NavLink>

          <a href="/app.apk" download>
            <button
              type="button"
              className="text-black px-[32px] py-[14px] bg-[#009875] rounded-lg hover:opacity-90 transition"
            >
              Download
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img
              src="/images/cancel.png"
              alt="close"
              className="w-6 h-6 invert brightness-0"
            />
          ) : (
            <img
              src="/images/menu.png"
              alt="menu"
              className="w-6 h-6 invert brightness-0"
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#2E3747] mt-4 rounded-xl p-6 flex flex-col gap-5 md:hidden shadow-xl">
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

            <a href="/app.apk" download>
              <button
                type="button"
                className="w-full text-black py-[14px] bg-[#009875] rounded-lg"
              >
                Get App
              </button>
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
