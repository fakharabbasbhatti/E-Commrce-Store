import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-15 md:py-20 bg-[#E6FDF8] relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#16B9A4]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#16B9A4]/25 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        {/* ===== TEXT SECTION ===== */}
        <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#16B9A4]">
            Our Journey
          </h2>

          <p className="text-gray-800 leading-relaxed text-lg md:text-xl">
            Our Mobile Accessories Store started with one simple mission: to provide
            high-quality, stylish, and durable accessories that make your smartphone
            experience better than ever.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg md:text-lg">
            From protective cases to fast-charging cables, headphones, smartwatches,
            and more — every product is carefully tested to ensure long-lasting
            performance and complete customer satisfaction.
          </p>

          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-4 px-8 py-3 bg-[#16B9A4] hover:bg-[#13a294] text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            Explore Products
          </button>
        </div>

        {/* ===== IMAGE SECTION ===== */}
        <div className="flex justify-center relative" data-aos="fade-left" data-aos-delay="600">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="oj.png"
              alt="Mobile Accessories"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
