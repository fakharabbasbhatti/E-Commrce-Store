import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiShoppingCart, FiArrowRight } from "react-icons/fi";

export default function FeaturedProducts({ items }) {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-in-out",
            once: true,
            offset: 80,
        });
    }, []);

    const defaultItems = [
        {
            title: "Phone Covers",
            subtitle: "Stylish & Protective Cases for All Models",
            img: "ph2.png",
        },
        {
            title: "Power Banks",
            subtitle: "Portable Chargers for On-the-Go Power",
            img: "pb3.png",
        },
        {
            title: "Fast Chargers",
            subtitle: "Quick Charging Solutions for All Devices",
            img: "fc4.png",
        },
        {
            title: "Earbuds & Headphones",
            subtitle: "High-Quality Sound & Comfortable Fit",
            img: "eh5.png",
        },
    ];

    const cards = items?.length ? items : defaultItems;

    return (
        <section className="relative py-15 md:py-20 px-4 md:px-12 bg-gradient-to-br from-teal-50 to-teal-100 overflow-hidden">
            {/* Floating background shapes */}
            <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-teal-200/20 blur-[100px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] bg-teal-300/20 blur-[120px] rounded-full animate-pulse-slow"></div>

            {/* Section Header */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
                <div data-aos="fade-right">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Featured Products
                    </h2>
                    <p className="mt-3 text-sm md:text-[1.15rem] leading-relaxed max-w-2xl text-gray-700">
                        Explore our top-selling mobile accessories — stylish, durable, and designed to keep your devices powered and protected.
                    </p>
                </div>

                <Link
                    to="/services"
                    data-aos="fade-left"
                    className="inline-flex items-center gap-2 mt-6 md:mt-0 px-6 py-2.5 border rounded-full font-medium text-sm transition-all duration-300 hover:bg-teal-600/10 hover:scale-105 border-teal-600 text-teal-600"
                >
                    Explore all products <FiArrowRight />
                </Link>
            </div>

            {/* Product Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {cards.map((card, idx) => (
                    <article
                        key={idx}
                        data-aos="zoom-in"
                        data-aos-delay={idx * 150}
                        className="group relative bg-white rounded-[2rem] overflow-hidden border shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
                        style={{ borderColor: "rgba(0,0,0,0.05)" }}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden rounded-[2rem]">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-[2rem]"
                            />
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                            {/* Hover Buttons */}
                            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                <Link
                                    to="/services"
                                    className="px-5 py-2 text-sm font-medium rounded-full flex items-center gap-2 backdrop-blur-sm bg-teal-600/90 text-white hover:bg-teal-600 shadow-md transition"
                                >
                                    Order <FiShoppingCart size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-6" data-aos="fade-up" data-aos-delay={idx * 200 + 100}>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{card.title}</h3>
                            <p className="text-sm md:text-base leading-relaxed font-medium text-gray-700">{card.subtitle}</p>
                        </div>

                        {/* Bottom center line effect */}
                        <span className="absolute bottom-0 left-2/4 w-0 h-[3px] bg-teal-600 rounded-full transition-all duration-500 group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
                    </article>
                ))}
            </div>
        </section>
    );
}
