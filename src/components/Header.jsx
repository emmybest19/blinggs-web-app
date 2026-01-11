import { Navigate, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? "text-[#00D4AA] " : "text-white ";

  const navigate = useNavigate()

  return (
    <div className="bg-[#434c5d] px-[60px] py-[20px] sticky inset-0 z-50">
      <nav className="bg-[#2E374766] flex justify-between items-center gap-2 px-[70px] py-[31px] rounded-[18px]">
        <div onClick={() => navigate('/')}>
          <img
            src="images/logo.png"
            alt="Click to home"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain cursor-pointer"
          />
        </div>
        <div className="flex gap-4 items-center">
          <NavLink to="/feature" className={linkClass}>
            Feature
          </NavLink>
          <NavLink to="/pricing" className={linkClass}>
            Pricing
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <a href="/app.apk" download className=" cursor-pointer">
            <button
              type="button"
              className="cursor-pointer text-black px-[32px] py-[16px] bg-[#009875]  rounded-lg"
            >
              Download
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
