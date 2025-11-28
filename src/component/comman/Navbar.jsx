// src/component/comman/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Logo from '../../assets/Images/logomob.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useSelector(state => state.services);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#00B29C]/90 backdrop-blur-xl shadow-lg' : 'bg-[#00B29C]/90 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 select-none">
          <img src={Logo} alt="Mobilia Logo" className="h-14 w-auto object-contain drop-shadow-sm" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white text-[20px] font-medium tracking-wide">
          {menuItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`transition-all duration-300 ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-[#002B5B]' : 'hover:text-[#002B5B]'}`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#002B5B] transition-all duration-300 ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Cart Button */}
        <div className="hidden md:flex">
          <Link
            to="/cart"
            className="relative text-lg flex items-center justify-center px-4 py-2 rounded-lg bg-white text-[#00B29C] border border-transparent hover:bg-[#00B29C] hover:text-white hover:border-white transition-all duration-300 shadow-md"
          >
            <FiShoppingCart size={20} className="mr-2" /> 
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartItemCount}
              </span>
            )}
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
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#002B5B]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 transform transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <ul className="flex flex-col items-center space-y-6 text-2xl font-medium text-white">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className={`transition-colors duration-300 ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-[#00B29C]' : 'hover:text-[#00B29C]'}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Cart Button */}
        <div className="flex flex-col pt-8 w-4/5">
          <Link
            to="/cart"
            onClick={toggleMenu}
            className="relative text-2xl font-medium w-full flex items-center justify-center px-5 py-3 rounded-lg bg-white text-[#00B29C] border border-transparent hover:bg-[#00B29C] hover:text-white hover:border-white transition-all duration-300 shadow-md"
          >
            <FiShoppingCart size={30} className="mr-2" /> 
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;