import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Images/logomob.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen(!open);

  // Add shadow and blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#00B29C]/90 backdrop-blur-xl shadow-lg"
          : "bg-[#00B29C]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-15">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 select-none">
          <img
            src={Logo}
            alt="Mobilia Logo"
            className="h-10 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white text-[16px] font-medium tracking-wide">
          {menuItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`transition-all duration-300 ${
                  location.pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-[#002B5B]"
                    : "hover:text-[#002B5B]"
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#002B5B] transition-all duration-300 ${
                    location.pathname ===
                    (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#00B29C] transition-all duration-300 shadow-sm">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-5 py-2 bg-white text-[#00B29C] rounded-lg font-semibold hover:bg-[#002B5B] hover:text-white transition-all duration-300 shadow-sm">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#002B5B]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transform transition-all duration-500 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-white">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className={`transition-colors duration-300 ${
                  location.pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? "text-[#00B29C]"
                    : "hover:text-[#00B29C]"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Buttons */}
        <div className="flex flex-col space-y-3 pt-8 w-4/5">
          <Link to="/login" onClick={toggleMenu}>
            <button className="w-full px-5 py-2 border border-[#00B29C] text-[#00B29C] rounded-lg font-semibold hover:bg-[#00B29C] hover:text-white transition-all duration-300 shadow-md">
              Login
            </button>
          </Link>
          <Link to="/signup" onClick={toggleMenu}>
            <button className="w-full px-5 py-2 bg-[#00B29C] text-white rounded-lg font-semibold hover:bg-[#009482] transition-all duration-300 shadow-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;