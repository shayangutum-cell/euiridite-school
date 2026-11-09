import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const reasons = [
    "Qualified & Dedicated Faculty",
    "Modern Learning Environment",
    "Holistic Development",
    "A Supportive Community"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* md:flex-row use kiya taake aam laptops par bhi Left/Right layout barqarar rahe */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side: Text Area (40% width) */}
          <div className="md:w-5/12 w-full">
            <h2 className="text-4xl font-bold text-navy-blue mb-8">Why Choose Us?</h2>
            
            <ul className="space-y-5 mb-10">
              {reasons.map((item, index) => (
                <li key={index} className="flex items-center text-navy-blue font-semibold text-lg">
                  <div className="w-7 h-7 rounded-full bg-royal-blue text-white flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/about" className="inline-block bg-navy-blue hover:bg-blue-900 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
              Discover More →
            </Link>
          </div>

          {/* Right Side: Images Gallery (60% width) */}
          {/* Clip-path se images bina toote tedi (slanted) nazar aayengi */}
          <div className="md:w-7/12 w-full flex h-[300px] sm:h-[400px]">
            
            {/* Image 1 */}
            <div 
              className="w-1/4 h-full bg-gray-100 scale-105"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Classroom" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              />
            </div>
            
            {/* Image 2 */}
            <div 
              className="w-1/4 h-full bg-gray-100 scale-105 -ml-4"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1627556592933-ffe99c1c9cd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Science Lab" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              />
            </div>
            
            {/* Image 3 */}
            <div 
              className="w-1/4 h-full bg-gray-100 scale-105 -ml-4"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1546410531-df4cb7151084?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Sports Field" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              />
            </div>
            
            {/* Image 4 */}
            <div 
              className="w-1/4 h-full bg-gray-100 scale-105 -ml-4"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1568661206492-b67fb90fb1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Library" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              />
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;