import React from 'react';
import { Link } from 'react-router-dom';

const FacilitiesAndPrincipal = () => {
  const facilities = [
    "Science & Computer Labs",
    "Library & Resource Center",
    "Sports & Recreation",
    "Safe & Secure Campus"
  ];

  return (
    <div className="bg-light-blue/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid for 2 Cards (1 column on mobile, 2 on laptop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Our Facilities */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col sm:flex-row h-full">
            
            {/* Text Area */}
            <div className="p-8 sm:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-navy-blue mb-2">Our Facilities</h3>
              <p className="text-sm text-gray-600 mb-6">World-class facilities to support learning and growth.</p>
              
              <ul className="space-y-3 mb-6">
                {facilities.map((item, index) => (
                  <li key={index} className="flex items-center text-navy-blue font-semibold text-sm">
                    <div className="w-5 h-5 rounded-full bg-royal-blue text-white flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div>
                <Link to="/facilities" className="inline-block bg-navy-blue hover:bg-blue-900 text-white px-6 py-2 rounded-full font-bold text-sm transition-all">
                  Explore Facilities →
                </Link>
              </div>
            </div>

            {/* Image Area with Slanted Edge */}
            <div className="sm:w-2/5 h-64 sm:h-auto bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Science Lab" 
                className="w-full h-full object-cover"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }} // Left side se teda kaatne ke liye
              />
            </div>
          </div>

          {/* Card 2: Principal's Message */}
          <div className="bg-light-blue rounded-2xl overflow-hidden shadow-md border border-blue-100 flex flex-col sm:flex-row h-full">
            
            {/* Text Area */}
            <div className="p-8 sm:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Principal's Message</h3>
              
              <div className="bg-white/60 p-4 rounded-lg border border-blue-50 relative mb-4">
                <p className="text-navy-blue font-medium italic relative z-10">
                  "Education is not just about knowledge, but about building character, confidence and a better tomorrow."
                </p>
              </div>
              
              <p className="font-bold text-navy-blue">— Principal, The Erudite Academy</p>
            </div>

            {/* Image Area with Slanted Edge */}
            <div className="sm:w-2/5 h-64 sm:h-auto bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Principal" 
                className="w-full h-full object-cover object-top"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FacilitiesAndPrincipal;