import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedService, addToCart, setActiveCategory } from '../../redux/slices/servicesSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesList = () => {
  const { services, activeCategory } = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'accessories', name: 'Accessories', count: services.filter(s => s.category === 'accessories').length },
    { id: 'repair', name: 'Repair Services', count: services.filter(s => s.category === 'repair').length }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">

      {/* ⭐ Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12" data-aos="fade-up">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => dispatch(setActiveCategory(category.id))}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform
              ${activeCategory === category.id
                ? 'bg-[#16B9A4] text-white shadow-xl scale-110'
                : 'bg-white text-gray-700 hover:bg-[#DFFCF6] shadow-md hover:shadow-lg'}
            `}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* ⭐ Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-white rounded-2xl shadow-lg border border-[#DFFCF6] overflow-hidden 
                       transition-all duration-500 cursor-pointer group hover:shadow-2xl hover:-translate-y-2"
            onClick={() => dispatch(setSelectedService(service))}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Popular Tag */}
              {service.popular && (
                <div className="absolute top-4 left-4 bg-[#16B9A4] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  Popular
                </div>
              )}

              {/* Repair Time Tag */}
              {service.category === "repair" && service.repairTime && (
                <div className="absolute top-4 right-4 bg-[#101828] text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {service.repairTime}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-[#101828] group-hover:text-[#16B9A4] transition-colors">
                  {service.title}
                </h3>

                <div className="hidden md:flex items-center bg-[#16B9A4] text-white px-2 py-1 rounded text-sm font-semibold shadow">
                  ⭐ {service.rating} ({service.reviews})
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.slice(0, 3).map((feature, i) => (
                  <span
                    key={i}
                    className="bg-[#FDFEFE] border border-[#DFFCF6] text-gray-700 px-2 py-1 rounded-lg text-xs shadow-sm"
                  >
                    {feature}
                  </span>
                ))}
                {service.features.length > 3 && (
                  <span className="bg-[#FDFEFE] border border-[#DFFCF6] text-gray-700 px-2 py-1 rounded-lg text-xs shadow-sm">
                    +{service.features.length - 3} more
                  </span>
                )}
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#16B9A4]">{service.price}</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(service));
                  }}
                  className="bg-[#16B9A4] hover:bg-[#0fa78f] text-white font-semibold py-2 px-4 
                             rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg text-nowrap"
                >
                  {service.category === 'repair' ? 'Book Now' : 'Add to Cart'}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12" data-aos="fade-up">
          <p className="text-gray-500 text-lg">No services found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ServicesList;
