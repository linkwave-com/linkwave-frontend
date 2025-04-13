import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import HowItWorks from './HowItWorks/HowItWorks';
import Benefits from './Benefits/BetterThanWeb2';
import Audience from './PerfectFor/PerfectFor';
import PricingSection from './PricingSection/PricingSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'LinkWave';
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <Audience />
      <PricingSection />
    </>
  );
};

export default HomePage;

