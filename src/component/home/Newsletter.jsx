import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NewsletterCTA() {
  const COLORS = {
    teal: "#00BFA6",
    lightTeal: "#E0F7F4",
    gray: "#333333",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const MotionLink = motion(Link); // ✅ motion-enabled Link

  return (
    <section className="relative overflow-hidden py-15 md:py-20 px-6 md:px-12 bg-gradient-to-br from-[#E0F7F4] to-[#F0FDFA]">
      {/* 🔹 Background Blobs */}
      <div className="absolute -top-28 -left-28 w-[420px] h-[420px] bg-teal-200/25 blur-[180px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-teal-500/15 blur-[160px] rounded-full -z-10 animate-pulse-slow" />

      {/* 🔸 Newsletter Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[2rem] px-5 md:px-16 py-16 flex flex-col md:flex-row items-center gap-8 shadow-2xl bg-white border border-gray-100"
      >
        {/* 📝 Text Side */}
        <div data-aos="fade-right" className="flex-1 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Get the Latest <span className="text-teal-600">Mobile Accessories!</span>
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Subscribe to our newsletter to receive updates on new arrivals, exclusive deals, and tech tips. Stay ahead with trendy gadgets!
          </p>
        </div>

        {/* 🚀 Email Input + Subscribe Button */}
        <form data-aos="fade-left" className="flex flex-col sm:flex-row w-full md:max-w-md gap-4">
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-[1.5rem] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm transition-all duration-300 hover:shadow-md"
            />
            <FiMail className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
          </div>

          {/* ✅ Motion-enabled Link button */}
          <MotionLink
            to="/login"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0,191,166,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-[1.5rem] hover:bg-teal-700 transition-all shadow-lg"
          >
            Subscribe
          </MotionLink>
        </form>
      </motion.div>

      {/* ✨ Decorative Accent Line */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="mt-12 mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 animate-pulse-slow"
      ></div>
    </section>
  );
}
