import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaDollarSign, FaShippingFast, FaHeadset } from "react-icons/fa";

const ChooseAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-15 md:py-20 bg-[#EBFBF8] relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#16B9A4]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#16B9A4]/25 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#16B9A4] text-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Why Customers Trust Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Card 1 */}
          <div
            className="p-8 bg-gradient-to-br from-[#16B9A4]/20 to-white shadow-2xl rounded-3xl text-center hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <FaStar className="text-[#16B9A4] text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Premium Quality</h3>
            <p className="mt-2 text-gray-700">Only durable & tested products.</p>
          </div>

          {/* Card 2 */}
          <div
            className="p-8 bg-gradient-to-br from-[#16B9A4]/20 to-white shadow-2xl rounded-3xl text-center hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <FaDollarSign className="text-[#16B9A4] text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Affordable Prices</h3>
            <p className="mt-2 text-gray-700">Best value for money.</p>
          </div>

          {/* Card 3 */}
          <div
            className="p-8 bg-gradient-to-br from-[#16B9A4]/20 to-white shadow-2xl rounded-3xl text-center hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <FaShippingFast className="text-[#16B9A4] text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-gray-700">Quick & secure shipping.</p>
          </div>

          {/* Card 4 */}
          <div
            className="p-8 bg-gradient-to-br from-[#16B9A4]/20 to-white shadow-2xl rounded-3xl text-center hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <FaHeadset className="text-[#16B9A4] text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Friendly Support</h3>
            <p className="mt-2 text-gray-700">24/7 customer assistance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseAbout;
