import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity, clearCart } from '../../redux/slices/servicesSlice';
import { Link } from 'react-router-dom';

const CartItem = ({ item, handleRemove, handleQuantityChange, getItemPrice }) => (
  <div key={item.id} className="flex items-center border-b border-gray-200 py-6 last:border-b-0">
    <img 
      src={item.image} 
      alt={item.title} 
      className="w-20 h-20 object-cover rounded-lg shadow-md"
    />
    <div className="flex-1 ml-6">
      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
      <p className="text-blue-600 font-semibold mt-2">{item.price}</p>
      <p className="text-green-600 font-semibold">Total: ${getItemPrice(item)}</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button 
          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="px-4 py-2 text-gray-800 font-semibold">{item.quantity}</span>
        <button 
          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
          className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
        >
          +
        </button>
      </div>
      <button 
        onClick={() => handleRemove(item.id)}
        className="text-red-600 hover:text-red-800 font-semibold ml-4 transition-colors"
      >
        Remove
      </button>
    </div>
  </div>
);

const CartSummary = ({ totalPrice, handleClearCart }) => (
  <div className="bg-gray-50 px-6 py-6 border-t border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <span className="text-xl font-semibold text-gray-900">Total Amount:</span>
      <span className="text-2xl font-bold text-green-600">${totalPrice}</span>
    </div>
    <div className="flex justify-between space-x-4">
      <button 
        onClick={handleClearCart}
        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Clear Cart
      </button>
      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
        Proceed to Checkout
      </button>
    </div>
    <div className="mt-4 text-center">
      <Link 
        to="/services" 
        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
      >
        ← Continue Shopping
      </Link>
    </div>
  </div>
);

const Cart = () => {
  const { cart } = useSelector(state => state.services);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (serviceId) => {
    dispatch(removeFromCart(serviceId));
  };

  const handleQuantityChange = (serviceId, newQuantity) => {
    dispatch(updateCartQuantity({ id: serviceId, quantity: newQuantity }));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Starting from $', '')) || 0;
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const getItemPrice = (item) => {
    const price = parseFloat(item.price.replace('Starting from $', '')) || 0;
    return (price * item.quantity).toFixed(2);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Add some services or accessories to get started!</p>
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Browse Services
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              {cart.map(item => (
                <CartItem 
                  key={item.id}
                  item={item} 
                  handleRemove={handleRemoveFromCart} 
                  handleQuantityChange={handleQuantityChange} 
                  getItemPrice={getItemPrice} 
                />
              ))}
            </div>
            <CartSummary 
              totalPrice={getTotalPrice()} 
              handleClearCart={handleClearCart} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
