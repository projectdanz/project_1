import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SchoolLogo from "../assets/icon/iconPondok.png";

const Navbar = ({ links = [], className = "", variant = "fixed" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    if (href === "/" && location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (variant !== "fixed" || isContactPage) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant, isContactPage]);

  // Reset state on route change
  useEffect(() => {
    setScrolled(false);
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (variant === "footer") {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="text-gray-300 hover:text-white transition-colors font-medium text-sm md:text-base"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        className={`${
          isContactPage ? "absolute" : "fixed"
        } top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-primary shadow-md py-4" : "bg-transparent py-6"
        } ${className}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo / Brand Name */}
          <div
            className={`hidden md:flex items-center gap-3 transition-opacity duration-300 ${
              scrolled || isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={SchoolLogo} alt="Logo" className="h-10 w-auto" />
            <div className="text-md font-bold text-white">
              SMP QUR'AN ASY SYAUQI
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 text-white">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="hover:text-gray-300 transition-colors font-medium"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors z-[1000] relative ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary z-[999] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-8">
          {/* Logo in Menu */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <img src={SchoolLogo} alt="Logo" className="h-20 w-auto" />
            <div className="text-xl font-bold text-white text-center px-4">
              SMP QUR'AN ASY SYAUQI
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-white hover:text-amber-400 transition-colors font-bold text-2xl"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
