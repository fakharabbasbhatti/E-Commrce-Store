import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserPlus } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#00BFA6] px-3  md:px-6 py-16 overflow-hidden">
      {/* 🔹 Background Blur Shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#468DE0]/20 blur-[160px] rounded-full "></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#61A5F9]/20 blur-[140px] rounded-full "></div>

      {/* 🔹 Sign Up Card */}
      <div
        data-aos="zoom-in"
        className="w-full max-w-lg bg-[#0E1F45]/70 border border-[#ffffff2b] backdrop-blur-sm rounded-3xl shadow-md p-4 md:p-10 mt-10"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center mb-6"
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-linear-to-r from-[#468DE0] to-[#61A5F9] shadow-[0_0_25px_rgba(70,141,224,0.5)]">
            <UserPlus size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mt-3 tracking-wide">
            Create Account
          </h2>
          <p className="text-gray-300 text-sm mt-1 text-center">
            Join us today and start your journey!
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          <div data-aos="fade-right" data-aos-delay="100">
            <label className="block text-white mb-1 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
          </div>

          <div data-aos="fade-right" data-aos-delay="200">
            <label className="block text-white mb-1 text-sm">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
          </div>

          {/* Password with Eye Icon */}
          <div data-aos="fade-left" data-aos-delay="300" className="relative">
            <label className="block text-white mb-1 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full p-3 pr-10 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password with Eye Icon */}
          <div data-aos="fade-left" data-aos-delay="400" className="relative">
            <label className="block text-white mb-1 text-sm">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              className="w-full p-3 pr-10 bg-[#122a5c]/40 border border-[#ffffff33] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61A5F9] transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-10 text-gray-400 hover:text-white transition-colors"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full py-3 rounded-lg bg-linear-to-r from-[#468DE0] to-[#61A5F9] text-white font-semibold text-lg hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(70,141,224,0.6)] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex items-center gap-2 mt-6"
        >
          <div className="flex-1 h-px bg-white/20"></div>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Login Redirect */}
        <p
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-gray-400 text-center text-sm mt-6"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#ffde59] font-semibold hover:text-white hover:underline transition-all"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;