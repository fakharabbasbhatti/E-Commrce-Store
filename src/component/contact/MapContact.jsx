import React from "react";
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactMap() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-teal-100 py-15 md:py-20 overflow-hidden">

      {/* Cute Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-teal-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-100px] right-[-90px] w-[350px] h-[350px] bg-teal-600/20 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Visit <span className="text-teal-600">Our Store</span> Location
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            The perfect spot to find premium chargers, cables, earbuds, cases, and trendy mobile accessories.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Google Map */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl border border-teal-200 transform hover:scale-[1.01] transition-all duration-500"
            data-aos="fade-right"
          >
            <iframe
              title="store-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Details Card */}
          <div
            className="bg-white rounded-3xl shadow-xl border border-teal-200 p-5 md:p-8 space-y-8 hover:shadow-2xl transition-all duration-500"
            data-aos="fade-left"
          >
            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold text-teal-600 flex items-center gap-3">
                <FaMapMarkerAlt /> Store Address
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Dilawar Colony, Street No: 4 <br />
                Bahawalpur, Pakistan
              </p>
            </div>

            <div className="border-t border-gray-200" />

            {/* Hours */}
            <div>
              <h3 className="text-xl font-semibold text-teal-600 flex items-center gap-3">
                <FaClock /> Working Hours
              </h3>
              <p className="mt-2 text-gray-700">Monday - Saturday: 10am - 9pm</p>
              <p className="mt-1 text-gray-700">Sunday: Closed</p>
            </div>

            <div className="border-t border-gray-200" />

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-teal-600 flex items-center gap-3">
                <FaEnvelope /> Contact Details
              </h3>
              <p className="mt-2 text-gray-700">
                Email: fakharabbasbhatti333@gmail.com
              </p>
              <p className="mt-1 text-gray-700 flex items-center gap-2">
                <FaPhone /> +92 322 9234045
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
