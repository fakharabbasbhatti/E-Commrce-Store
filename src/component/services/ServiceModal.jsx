import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedService, addToCart } from '../../redux/slices/servicesSlice';

const ServiceModal = () => {
  const { selectedService } = useSelector(state => state.services);
  const dispatch = useDispatch();

  if (!selectedService) return null;

  const handleClose = () => {
    dispatch(setSelectedService(null));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(selectedService));
    handleClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl transform transition-all duration-300 scale-95 hover:scale-100 hover:shadow-2xl hover:translate-y-2">
        {/* Modal Header with Image */}
        <div className="relative h-60 bg-gradient-to-r from-[#002B5B] to-teal-600 rounded-t-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-full object-cover opacity-75 transition-all duration-300"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
          >
            ×
          </button>
          {selectedService.popular && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold text-[#002B5B]">{selectedService.title}</h3>
            <div className="flex items-center bg-[#002B5B] text-white px-3 py-1 rounded-lg text-sm font-semibold">
              ⭐ {selectedService.rating} ({selectedService.reviews} reviews)
            </div>
          </div>

          <p className="text-gray-600 text-lg">{selectedService.description}</p>

          {selectedService.category === 'repair' && selectedService.repairTime && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-semibold">
                Estimated Repair Time: <span className="text-green-600">{selectedService.repairTime}</span>
              </p>
            </div>
          )}

          {/* Service Features */}
          <div>
            <h4 className="font-semibold text-[#002B5B] mb-2">Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedService.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[#002B5B] rounded-full mr-3"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price and Add to Cart / Book Repair */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <span className="text-3xl font-bold text-[#002B5B]">{selectedService.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-[#002B5B] hover:bg-[#001f3c] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg shadow-lg hover:shadow-xl"
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
