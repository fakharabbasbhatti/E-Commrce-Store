import React from 'react'
import HeroHome from "../component/home/HeroHome";
import FeaturedProducts from "../component/home/FeaturedProducts";
import WhyChoose from "../component/home/WhyChoose";
import Newsletter from "../component/home/Newsletter";

const Home = () => {
  return (
    <div>
        <HeroHome/>
        <FeaturedProducts/>
        <WhyChoose/>
        <Newsletter/>
    </div>
  )
}

export default Home