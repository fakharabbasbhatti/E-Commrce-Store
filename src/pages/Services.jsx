// src/pages/Services.jsx
import React from 'react';
import HeroServices from "../component/services/HeroServices";
import ServicesList from "../component/services/ServicesList";
import ServiceModal from "../component/services/ServiceModal";

const Services = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <HeroServices />
        <ServicesList />
        <ServiceModal />
      </div>
    </div>
  );
}

export default Services;