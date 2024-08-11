import React from 'react';
import Hero from './Hero';
import AboutInfo from './AboutInfo';
import FeaturedProperties from './FeaturedProperties';
import Neighborhoods from './Neighborhoods';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutInfo />
      <FeaturedProperties/>
      <Neighborhoods/>
      <Testimonials/>
    </div>
  );
};

export default Home;
