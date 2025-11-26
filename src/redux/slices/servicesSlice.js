// src/redux/slices/servicesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [
    // Accessories Services
    {
      id: 1,
      title: "Phone Covers",
      description: "Premium quality phone covers with various designs and materials.",
      price: "Starting from $9.99",
      image: "https://i.ytimg.com/vi/V_TcuEWVHvU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZHozYK_rmFayFv3iljPo2b8bwXA",
      features: [
        "Shock Protection",
        "Multiple Designs",
        "Premium Material",
        "Easy Installation",
      ],
      rating: 4.5,
      reviews: 128,
      category: "accessories",
      popular: true,
    },
    {
      id: 2,
      title: "Power Bank",
      description: "High capacity power banks for all your charging needs.",
      price: "Starting from $19.99",
      image: "https://mojogear.eu/cdn/shop/files/MG-09_in_vliegtuig_kopie.jpg?v=1708957664&width=1500",
      features: [
        "Fast Charging",
        "High Capacity",
        "Portable",
        "Multiple Ports",
      ],
      rating: 4.3,
      reviews: 89,
      category: "accessories",
      popular: true,
    },
    {
      id: 3,
      title: "Fast Charger",
      description: "Rapid charging solutions for your devices.",
      price: "Starting from $14.99",
      image: "https://metro-b2c.s3.ap-southeast-1.amazonaws.com/Products/329329.jpg",
      features: [
        "Quick Charge 3.0",
        "Universal Compatibility",
        "Compact Design",
        "Safety Certified",
      ],
      rating: 4.7,
      reviews: 156,
      category: "accessories",
    },
    {
      id: 4,
      title: "Earbuds & Headphones",
      description: "Immersive audio experience with premium sound quality.",
      price: "Starting from $29.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      features: [
        "Noise Cancellation",
        "Wireless",
        "Long Battery",
        "Comfort Fit",
      ],
      rating: 4.4,
      reviews: 203,
      category: "accessories",
      popular: true,
    },

    // Mobile Repair Services
    {
      id: 5,
      title: "Screen Replacement",
      description: "Professional screen replacement with original quality parts.",
      price: "Starting from $49.99",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400",
      features: [
        "Original Parts",
        "1 Year Warranty",
        "Quick Service",
        "Quality Assurance",
      ],
      rating: 4.8,
      reviews: 342,
      category: "repair",
      repairTime: "30-45 mins",
      popular: true,
    },
    {
      id: 6,
      title: "Battery Replacement",
      description: "Genuine battery replacement for longer battery life.",
      price: "Starting from $29.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJh3XSHdPBIPdKi8RgGugkoCiDlhVDJ4e_wg&s",
      features: [
        "Genuine Batteries",
        "6 Months Warranty",
        "Performance Test",
        "Quick Service",
      ],
      rating: 4.6,
      reviews: 287,
      category: "repair",
      repairTime: "20-30 mins",
    },
    {
      id: 7,
      title: "Water Damage Repair",
      description: "Expert water damage diagnosis and repair service.",
      price: "Starting from $39.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9g4bkOyLgtPW_9_YVNr_fyFfSxGyB65SCw&s",
      features: [
        "Free Diagnosis",
        "Component Level Repair",
        "Data Recovery",
        "90 Days Warranty",
      ],
      rating: 4.4,
      reviews: 156,
      category: "repair",
      repairTime: "2-3 hours",
    },
    {
      id: 8,
      title: "Software Issues",
      description: "Fix all software related problems and performance issues.",
      price: "Starting from $19.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjCdTBok2070KMc1NNdlPKyuLCzzCHFEfyQ&s",
      features: [
        "OS Update",
        "Virus Removal",
        "Data Backup",
        "Performance Boost",
      ],
      rating: 4.7,
      reviews: 198,
      category: "repair",
      repairTime: "30-60 mins",
    },
    {
      id: 9,
      title: "Camera Repair",
      description: "Professional camera module repair and replacement.",
      price: "Starting from $34.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOlx6rhzaKHGs7XTzmAaFVwNDMmlr5tJSDA&s",
      features: [
        "Original Camera",
        "Focus Calibration",
        "Lens Cleaning",
        "Quality Test",
      ],
      rating: 4.5,
      reviews: 134,
      category: "repair",
      repairTime: "45-60 mins",
    },
    {
      id: 10,
      title: "Charging Port Repair",
      description: "Fix charging issues with port replacement service.",
      price: "Starting from $24.99",
      image: "https://i.pinimg.com/1200x/aa/55/9d/aa559d19afe558600509d40951e54367.jpg",
      features: [
        "Port Replacement",
        "Fast Charging Test",
        "Warranty Included",
        "Quick Fix",
      ],
      rating: 4.6,
      reviews: 176,
      category: "repair",
      repairTime: "30-45 mins",
    },
  ],
  selectedService: null,
  cart: [],
  favorites: [],
  activeCategory: "all",
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.cart = state.cart.filter(item => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
    addToFavorites: (state, action) => {
      const exists = state.favorites.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setSelectedService,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  addToFavorites,
  removeFromFavorites,
  setActiveCategory,
  clearCart,
} = servicesSlice.actions;

export default servicesSlice.reducer;