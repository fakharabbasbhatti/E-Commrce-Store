import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt, FaUndoAlt } from "react-icons/fa";

export default function WhyChoose() {
  const COLORS = {
    teal: "#00BFA6",
    lightTeal: "#E0F7F4",
    charcoal: "#3A3A3A",
  };

  const items = [
    {
      icon: <FaShippingFast size={28} />,
      title: "Fast Delivery",
      desc: "Get your mobile accessories delivered quickly and safely right to your doorstep.",
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Premium Quality",
      desc: "High-quality phone cases, chargers, earbuds, and power banks that last.",
    },
    {
      icon: <FaUndoAlt size={28} />,
      title: "Easy Returns",
      desc: "Hassle-free 7-day return policy on all products for your convenience.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, offset: 80 });
  }, []);

  return (
    <section className="relative py-15 md:py-20 px-4 md:px-12 overflow-hidden" style={{ backgroundColor: COLORS.lightTeal }}>
      {/* Cute Background Blobs */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-teal-200/30 blur-[180px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-teal-400/20 blur-[150px] rounded-full -z-10 animate-pulse-slow" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 data-aos="fade-down" className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Why Choose Us
        </h2>
        <p data-aos="fade-up" className="text-lg md:text-xl leading-relaxed text-gray-700">
          We provide top-notch mobile accessories designed for style, durability, and convenience. Experience quality, reliability, and peace of mind with every purchase.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white p-6 rounded-[2rem] shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 text-center"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            {/* Icon */}
            <div
              className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-200 to-teal-400 text-white shadow-md"
            >
              {item.icon}
            </div>

            {/* Title */}
            <h4 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h4>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="mt-16 mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 animate-pulse-slow"></div>
    </section>
  );
}
