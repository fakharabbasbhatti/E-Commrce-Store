import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/Images/logomob.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Wireless & Mobility", href: "/services" },
    { name: "Bank & Merchant Fees", href: "/services" },
    { name: "Municipal Trash & Recycling", href: "/services" },
    { name: "Software & Licensing", href: "/services" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/mobilla", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/mobilla", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com/mobilla", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/mobilla", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#00B29C] to-[#0097A7] text-white w-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
        {/* Company Info */}
        <div data-aos="fade-up" className="space-y-4">
          <img src={logo} alt="Mobilla Logo" className="h-12 w-auto" />
          <p className="text-white/90 text-sm leading-relaxed">
            At <span className="font-semibold text-white">Mobilla</span>, we bring ideas
            to life through innovative web and app solutions. Our mission is to
            empower businesses with elegant digital products that drive growth.
          </p>
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <span>Available for new projects</span>
          </div>
        </div>

        {/* Company Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-lg font-semibold mb-6 uppercase tracking-wider text-white border-b border-white/20 pb-2">
            quick links
          </h2>
          <ul className="space-y-3">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-white/50 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-lg font-semibold mb-6 uppercase tracking-wider text-white border-b border-white/20 pb-2">
            Services
          </h2>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.href}
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm flex items-center group"
                >
                  <span className="w-1 h-1 bg-white/50 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="450" className="space-y-4">
          <h2 className="text-lg font-semibold mb-6 uppercase tracking-wider text-white border-b border-white/20 pb-2">
            Contact
          </h2>
          <div className="space-y-4">
            <a
              href="mailto:support@mobilla.com"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <FaEnvelope className="text-sm" />
              </div>
              <span className="text-sm">support@mobilla.com</span>
            </a>

            <a
              href="tel:+923001234567"
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <FaPhone className="text-sm" />
              </div>
              <span className="text-sm">+1 300 1234567</span>
            </a>

            <div className="flex items-start space-x-3 text-white/80">
              <div className="p-2 bg-white/10 rounded-lg mt-1">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <span className="text-sm leading-relaxed">USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-white/20 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white/70 text-sm text-center md:text-left"
            >
              © {currentYear} <span className="font-semibold text-white">Mobilla</span>. All Rights Reserved.
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="text-lg text-white group-hover:text-white/90" />
                </a>
              ))}
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex space-x-6 text-white/70 text-sm"
            >
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms
              </a>
              <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy
              </a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;