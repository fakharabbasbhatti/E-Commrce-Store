import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMobileAlt, FaBolt, FaHeadphones } from "react-icons/fa";

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-15 md:py-20 bg-[#E0F7F4] relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#16B9A4]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#16B9A4]/25 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#16B9A4]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What We Offer
        </h2>
        <p
          className="mt-4 text-gray-800 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore the finest mobile accessories crafted to boost convenience and style.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div
            className="p-8 bg-gradient-to-br from-[#16B9A4]/30 to-[#DFFCF6]/80 shadow-2xl rounded-3xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <FaMobileAlt className="text-[#16B9A4] text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#101828]">Premium Mobile Cases</h3>
            <p className="mt-3 text-gray-700">
              Stylish, shockproof & protective cases for all smartphones.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-8 bg-gradient-to-br from-[#16B9A4]/30 to-[#DFFCF6]/80 shadow-2xl rounded-3xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <FaBolt className="text-[#16B9A4] text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#101828]">Fast Charging Solutions</h3>
            <p className="mt-3 text-gray-700">
              Durable chargers, cables & powerbanks for reliable performance.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-8 bg-gradient-to-br from-[#16B9A4]/30 to-[#DFFCF6]/80 shadow-2xl rounded-3xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <FaHeadphones className="text-[#16B9A4] text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#101828]">Smart Gadgets</h3>
            <p className="mt-3 text-gray-700">
              Earbuds, smartwatches & Bluetooth accessories with modern features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
