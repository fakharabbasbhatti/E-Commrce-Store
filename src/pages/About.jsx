import React from 'react'
import HeroAbout from "../component/about/HeroAbout";
import OurStory from '../component/about/OurStory';
import WeOffer from '../component/about/WeOffer';
import ChooseAbout from '../component/about/ChooseAbout';

const About = () => {
  return (
    <div>
        <HeroAbout/>
        <OurStory/>
        <WeOffer/>
        <ChooseAbout/>
    </div>
  )
}

export default About