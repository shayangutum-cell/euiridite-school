import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    // Background mein humne pahaaron (mountains) wali ek tasveer lagayi hai aur uske upar neela rang diya hai
    <div className="relative bg-royal-blue overflow-hidden py-12">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Left Side: Text and Icon */}
        <div className="flex items-center gap-6 mb-6 md:mb-0">
          <div className="text-white text-6xl drop-shadow-md">
            🎓
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif drop-shadow-md">
              Ready to Join Our School?
            </h2>
            <p className="text-blue-100 text-lg">
              Take the first step towards a brighter future.
            </p>
          </div>
        </div>

        {/* Right Side: Button */}
        <div>
          <Link 
            to="/admissions" 
            className="inline-flex items-center bg-school-red hover:bg-red-800 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg border-2 border-white/20"
          >
            Apply Now <span className="ml-2">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CallToAction;