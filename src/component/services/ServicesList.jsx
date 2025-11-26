import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedService, addToCart, setActiveCategory } from '../../redux/slices/servicesSlice';

const ServicesList = () => {
  const { services, activeCategory } = useSelector(state => state.services);
  const dispatch = useDispatch();

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'accessories', name: 'Accessories', count: services.filter(s => s.category === 'accessories').length },
    { id: 'repair', name: 'Repair Services', count: services.filter(s => s.category === 'repair').length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => dispatch(setActiveCategory(category.id))}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform ${
              activeCategory === category.id
                ? 'bg-[#002B5B] text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:scale-101"
            onClick={() => dispatch(setSelectedService(service))}
          >
            {/* Service Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              {service.popular && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              {service.category === 'repair' && service.repairTime && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.repairTime}
                </div>
              )}
            </div>

            {/* Service Info Section */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-[#002B5B] group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="flex items-center bg-[#002B5B] text-white px-2 py-1 rounded text-sm font-semibold">
                  ⭐ {service.rating} ({service.reviews})
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
              
              {/* Features List */}
              <div className="flex flex-wrap gap-1 mb-4">
                {service.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
                {service.features.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    +{service.features.length - 3} more
                  </span>
                )}
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#002B5B]">{service.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(service));
                  }}
                  className="bg-[#002B5B] hover:bg-[#001f3c] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105 shadow-md hover:shadow-xl"
                >
                  {service.category === 'repair' ? 'Book Now' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Services Found */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No services found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ServicesList;
