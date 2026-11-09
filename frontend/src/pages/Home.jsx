import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutSchool from '../components/AboutSchool';
import Academics from '../components/Academics';
import WhyChooseUs from '../components/WhyChooseUs';
import FacilitiesAndPrincipal from '../components/FacilitiesAndPrincipal';
import NewsAndGallery from '../components/NewsAndGallery';
import CallToAction from '../components/CallToAction'; // Naya import

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      <Features />
      <AboutSchool />
      <Academics />
      <WhyChooseUs />
      <FacilitiesAndPrincipal />
      <NewsAndGallery />
      
      {/* 8. Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default Home;