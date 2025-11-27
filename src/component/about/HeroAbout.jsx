import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiShoppingCart, FiChevronRight } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[100vh] flex items-center justify-center px-4 md:px-12 py-24 bg-gradient-to-br from-teal-50 to-teal-100"
    >
      {/* 🔹 Background Blobs */}
      <div className="absolute top-[-120px] left-[-100px] w-[520px] h-[520px] bg-teal-400/20 blur-[210px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[460px] h-[460px] bg-teal-600/10 blur-[200px] rounded-full animate-pulse-slow"></div>

      {/* 🔹 Hero Content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            About <span className="text-teal-600">Our Accessories Store</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl text-gray-700"
          >
            We provide high-quality Mobile Accessories designed to make
            your smartphone experience smarter, safer, and more stylish.
            From protective cases to premium chargers — everything is picked
            with care for your comfort.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-4 text-lg md:text-lg leading-relaxed max-w-xl text-gray-600"
          >
            Our mission is simple — **top-quality accessories**, affordable
            pricing, long-lasting durability, and the latest trendy designs
            you’ll love using every day.
          </p>

          {/* BUTTONS */}
          <div
            data-aos="zoom-in"
            data-aos-delay="450"
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 rounded-full shadow-lg text-base font-medium transition-all duration-300 hover:-translate-y-[2px] bg-teal-600 text-white hover:bg-teal-700"
            >
              <FiShoppingCart /> Shop Now
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-teal-600 transition-all duration-300 text-base font-medium hover:bg-teal-100 text-teal-600"
            >
              Learn More <FiChevronRight />
            </Link>
          </div>

          {/* HIGHLIGHTS */}
          <ul
            data-aos="fade-up"
            data-aos-delay="600"
            className="hidden md:flex mt-8 flex-wrap gap-3 text-sm md:text-base justify-center lg:justify-start"
          >
            <li className="inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-teal-100 text-teal-800 font-medium">
              <FaShieldAlt className="text-teal-600" /> Premium Quality Products
            </li>
            <li className="inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-teal-100 text-teal-800 font-medium">
              <FaShieldAlt className="text-teal-600" /> Fast & Safe Delivery
            </li>
            <li className="inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-teal-100 text-teal-800 font-medium">
              <FaShieldAlt className="text-teal-600" /> Latest Trendy Designs
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-2xl group" data-aos="fade-left">
          <img
            src="abh.png"
            alt="Mobile Accessories"
            className="w-full h-auto md:h-[450px] lg:h-[500px] rounded-md shadow-2xl object-cover transition-transform duration-700 group-hover:scale-95 opacity-90"
          />

          {/* Border Animations */}
          <span className="absolute top-0 left-0 w-0 h-[2px] bg-teal-600 transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-teal-600 transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-teal-600 transition-all duration-500 group-hover:h-full"></span>
          <span className="absolute top-0 right-0 w-[2px] h-0 bg-teal-600 transition-all duration-500 group-hover:h-full"></span>

          <div className="absolute -bottom-6 left-12 w-32 h-2 rounded-full transition-all duration-500 group-hover:w-48 bg-teal-600"></div>
        </div>

      </div>
    </section>
  );
}
