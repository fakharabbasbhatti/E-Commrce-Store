import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPhoneCall, FiMessageCircle, FiChevronRight } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeroContact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[100vh] flex items-center justify-center px-5 md:px-12 py-24 bg-gradient-to-br from-teal-50 to-teal-100"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-120px] left-[-100px] w-[520px] h-[520px] bg-teal-400/20 blur-[210px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[460px] h-[460px] bg-teal-600/10 blur-[200px] rounded-full animate-pulse-slow"></div>

      {/* Content Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            Contact <span className="text-teal-600">Our Store</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl text-gray-700"
          >
            Have questions about our Mobile Accessories? Need order support or product details?  
            Our friendly team is always here to help you with the best possible assistance.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-4 text-lg md:text-lg leading-relaxed max-w-xl text-gray-600"
          >
            Whether it's chargers, cases, earphones, smartwatches, or any accessory-related query —
            feel free to reach out anytime. We respond quickly and happily!
          </p>

          {/* CTA BUTTONS */}
         <div
  data-aos="zoom-in"
  data-aos-delay="450"
  className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
>
  {/* Call Button */}
  <a
    href="tel:+923229234045"
    className="inline-flex items-center gap-3 px-6 md:px-8 py-3 rounded-full shadow-lg text-base font-medium transition-all duration-300 hover:-translate-y-[2px] bg-teal-600 text-white hover:bg-teal-700"
  >
    <FiPhoneCall className="text-xl" /> Call Now
  </a>

  {/* Email Button */}
  <a
    href="mailto:fakharabbasbhatti333@gmail.com"
    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-teal-600 transition-all duration-300 text-base font-medium hover:bg-teal-100 text-teal-600"
  >
    <FiMail className="text-xl" /> My Email
  </a>
</div>


          {/* HIGHLIGHTS */}
          <ul
            data-aos="fade-up"
            data-aos-delay="600"
            className="hidden md:flex mt-8 flex-wrap gap-3 text-sm md:text-base justify-center lg:justify-start"
          >
            <li className="inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-teal-100 text-teal-800 font-medium">
              <FaHeadset className="text-teal-600" /> 24/7 Customer Support
            </li>

            <li className="inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-teal-100 text-teal-800 font-medium">
              <FaHeadset className="text-teal-600" /> Quick Response Team
            </li>

            <li className="inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-sm bg-teal-100 text-teal-800 font-medium">
              <FaHeadset className="text-teal-600" /> Expert Product Guidance
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-2xl group" data-aos="fade-left">
          <img
            src="coh.png"
            alt="Contact Mobile Accessories Support"
            className="w-full h-auto md:h-[450px] lg:h-[500px] rounded-md shadow-2xl object-cover transition-transform duration-700 group-hover:scale-95 opacity-90"
          />

          {/* Border Animation */}
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
