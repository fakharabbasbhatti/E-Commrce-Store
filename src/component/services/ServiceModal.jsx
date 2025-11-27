import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedService, addToCart } from '../../redux/slices/servicesSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceModal = () => {
  const { selectedService } = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true });
  }, []);

  if (!selectedService) return null;

  const handleClose = () => dispatch(setSelectedService(null));

  const handleAddToCart = () => {
    dispatch(addToCart(selectedService));
    handleClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
      data-aos="fade-in"
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-500 scale-95 hover:scale-100"
        data-aos="zoom-in"
      >
        {/* Header Image */}
        <div className="relative h-60 bg-gradient-to-r from-teal-400 to-teal-600 rounded-t-3xl overflow-hidden">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-full object-cover opacity-80 transition-transform duration-500 transform hover:scale-110"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 text-2xl font-bold"
          >
            ×
          </button>
          {selectedService.popular && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
              Popular
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold text-[#16B9A4]" data-aos="fade-right">
              {selectedService.title}
            </h3>
            <div className="flex items-center bg-[#16B9A4] text-white px-3 py-1 rounded-xl text-sm font-semibold shadow" data-aos="fade-left">
              ⭐ {selectedService.rating} ({selectedService.reviews})
            </div>
          </div>

          <p className="text-gray-700 text-lg" data-aos="fade-up">
            {selectedService.description}
          </p>

          {selectedService.category === 'repair' && selectedService.repairTime && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4" data-aos="zoom-in">
              <p className="text-green-800 font-semibold">
                Estimated Repair Time: <span className="text-green-600">{selectedService.repairTime}</span>
              </p>
            </div>
          )}

          {/* Features */}
          <div data-aos="fade-up">
            <h4 className="font-semibold text-[#16B9A4] mb-2">Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedService.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-[#16B9A4] rounded-full mr-3"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-4" data-aos="fade-up">
            <span className="text-3xl font-bold text-[#16B9A4]">{selectedService.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-[#16B9A4] hover:bg-[#119985] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              {selectedService.category === 'repair' ? 'Book Repair Service' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
