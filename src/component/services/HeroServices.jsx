import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTools, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center justify-center px-4 md:px-12 py-24 bg-gradient-to-br from-teal-50 to-teal-100">
      
      {/* 🔹 Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#16B9A4]/25 blur-[200px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[450px] h-[450px] bg-[#16B9A4]/15 blur-[180px] rounded-full animate-pulse-slow"></div>

      {/* 🔹 Hero Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* 🔸 Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#002B5B]"
          >
            Reliable <span className="text-teal-400">Mobile Accessories</span>{" "}
            & Device Services
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl text-gray-700"
          >
            From premium charging cables to screen protectors, battery replacements,
            handsfree, smartwatches, and device maintenance — we provide everything
            your mobile needs to stay fast, protected, and stylish.
          </p>

          {/* 🔸 Highlights */}
          <ul
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex mt-8 gap-4 justify-center lg:justify-start text-white flex-wrap"
          >
            <li className="inline-flex items-center gap-2 px-4 py-2 bg-[#002B5B] rounded-full shadow-lg text-sm">
              <FaCheck className="text-white" /> Original Accessories
            </li>
            <li className="inline-flex items-center gap-2 px-4 py-2 bg-[#002B5B] rounded-full shadow-lg text-sm">
              <FaCheck className="text-white" /> Fast Charging Solutions
            </li>
            <li className="inline-flex items-center gap-2 px-4 py-2 bg-[#002B5B] rounded-full shadow-lg text-sm">
              <FaCheck className="text-white" /> Expert Device Services
            </li>
          </ul>

          {/* 🔸 CTA Buttons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 rounded-full shadow-lg text-base font-medium transition-all duration-300 hover:-translate-y-[2px] bg-teal-600 text-white hover:bg-teal-700"
            >
              <FaTools /> Explore Services
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-teal-600 transition-all duration-300 text-base font-medium hover:bg-teal-100 text-teal-600"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* 🔸 Right Image */}
        <div className="relative w-full max-w-2xl group">
          <img
            src="public/eh5.png"
            alt="Mobile Accessories"
            className="w-full h-auto md:h-[450px] lg:h-[500px] rounded-md shadow-2xl object-cover transition-transform duration-700 group-hover:scale-95 opacity-80"
          />

          {/* Overlay */}
          <div className="absolute inset-0 rounded-md pointer-events-none"></div>

          {/* Animated Borders */}
          <span className="absolute top-0 left-0 w-0 h-[2px] bg-teal-600 transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-teal-600 transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-teal-600 transition-all duration-500 group-hover:h-full"></span>
          <span className="absolute top-0 right-0 w-[2px] h-0 bg-teal-600 transition-all duration-500 group-hover:h-full"></span>

          {/* Bottom Accent */}
          <div className="absolute -bottom-6 left-12 w-32 h-2 rounded-full transition-all duration-500 group-hover:w-48 bg-teal-600"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
