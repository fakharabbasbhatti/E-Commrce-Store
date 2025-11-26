import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative flex items-center justify-center text-center h-[90vh] overflow-hidden bg-[#DDFBF5]">

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00BFA6]/50 via-[#00BFA6]/50 to-[#00BFA6]/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-3 md:px-6 flex flex-col items-center justify-center text-white">
        {/* Main Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl md:text-7xl font-extrabold mb-3 md:mb-6 leading-tight tracking-tight drop-shadow-lg"
        >
          About Our Store
        </h1>

        {/* Sub Heading */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100 font-light drop-shadow-sm"
        >
          Premium Mobile Accessories designed to upgrade your everyday
          lifestyle — combining quality, performance, and style.
        </p>

        {/* Decorative Line */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 w-28 h-1 bg-[#00B39C] rounded-full shadow-lg"
        ></div>

        {/* CTA Button */}
        <div
          data-aos="flip-left"
          data-aos-delay="800"
          className="mt-20 md:mt-26"
        >
          <Link to="/services" className="px-8 py-3 bg-[#00BFA6] hover:bg-[#101828] transition-all duration-500 text-white font-semibold rounded-full shadow-md hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
            Learn More
          </Link>
        </div>
      </div>

      {/* Animated Floating Shapes */}
      <div className="absolute top-20 left-16 w-40 h-40 bg-[#00A3E8]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-[#00A3E8]/25 rounded-full blur-3xl animate-pulse"></div>

      {/* Bottom Wave Shape */}
      <svg
        className="hidden md:block absolute bottom-[-1px] left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#E0F7F4"
          fillOpacity="1"
          d="M0,256L80,234.7C160,213,320,171,480,149.3C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

    </section>
  );
};

export default HeroAbout;
