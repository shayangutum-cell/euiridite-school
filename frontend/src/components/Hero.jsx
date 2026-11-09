import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png'; 

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      
      {/* White/Light Overlay (opacity thodi zyada ki hai taake text aur clear ho) */}
     
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center">
        
        {/* Design ke mutabiq Styled Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-2 font-serif drop-shadow-md">
          <span className="text-navy-blue">The Erudite </span>
          <span className="text-school-red">Academy</span>
        </h1>
        
        {/* GILGIT with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[2px] w-12 md:w-20 bg-navy-blue"></div>
          <span className="text-school-red tracking-[0.4em] font-bold text-lg md:text-xl uppercase">GILGIT</span>
          <div className="h-[2px] w-12 md:w-20 bg-navy-blue"></div>
        </div>
        
        {/* Slogan */}
        <p className="mt-2 text-2xl md:text-3xl italic font-semibold text-navy-blue mb-10 drop-shadow-sm">
          
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link 
            to="/admissions" 
            className="bg-school-red hover:bg-red-800 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center"
          >
            Apply for Admission <span className="ml-2">→</span>
          </Link>
          <a 
            href="#about" 
            className="bg-white text-navy-blue hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md border-2 border-navy-blue flex items-center justify-center"
          >
            Explore Our School
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;