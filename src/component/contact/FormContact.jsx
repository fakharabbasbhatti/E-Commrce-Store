import React, { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll respond shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative py-15 md:py-20 bg-[#DFFCF6] overflow-hidden">

      {/* ✨ Cute Floating Blobs */}
      <div className="absolute top-[-80px] left-[-90px] w-[300px] h-[300px] bg-[#16B9A4]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-90px] right-[-80px] w-[350px] h-[350px] bg-[#16B9A4]/30 blur-3xl rounded-full animate-pulse"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" data-aos-duration="900">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#16B9A4] mb-6">
              Contact Our Support
            </h2>

            <div className="w-20 h-1 bg-[#16B9A4] mb-8 rounded-full"></div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Need help choosing the perfect mobile accessory? Want guidance on
              chargers, earbuds, or cables? We're here for you!
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our friendly support team replies quickly—and we love helping you
              find the best gadgets for your phone.
            </p>

            <div
              className="bg-white/80 backdrop-blur-md border border-[#16B9A4]/30 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-all"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-[#101828] mb-4">
                Why Contact Us?
              </h3>

              <ul className="space-y-3 text-gray-700">
                {[
                  "Product compatibility guidance (cables, earbuds, chargers)",
                  "Warranty & replacement support",
                  "Order tracking & shipping updates",
                  "Bulk & wholesale accessory orders",
                  "Suggestions for new product arrivals",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-3 h-3 bg-[#16B9A4] rounded-full mr-3 animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div
            className="bg-white border border-[#16B9A4]/20 rounded-3xl p-5 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[#101828] mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16B9A4] text-lg" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#FDFEFE] border border-gray-200 focus:ring-2 focus:ring-[#16B9A4]/30 focus:border-[#16B9A4] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#101828] mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16B9A4] text-lg" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#FDFEFE] border border-gray-200 focus:ring-2 focus:ring-[#16B9A4]/30 focus:border-[#16B9A4] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-[#101828] mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl bg-[#FDFEFE] border border-gray-200 focus:ring-2 focus:ring-[#16B9A4]/30 focus:border-[#16B9A4] outline-none transition-all appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="order_help">Order Help</option>
                  <option value="product_support">Product Support</option>
                  <option value="warranty">Warranty & Replacement</option>
                  <option value="shipping">Shipping Inquiry</option>
                  <option value="bulk_order">Bulk / Wholesale Order</option>
                  <option value="suggestion">Product Suggestion</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#101828] mb-2">
                  Message *
                </label>
                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-[#16B9A4]" />
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#FDFEFE] border border-gray-200 focus:ring-2 focus:ring-[#16B9A4]/30 focus:border-[#16B9A4] outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                data-aos="zoom-in"
                data-aos-delay="200"
                className="w-full py-4 px-8 bg-[#16B9A4] hover:bg-[#119985] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormContact;
