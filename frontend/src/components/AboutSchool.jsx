import React from 'react';
import { Link } from 'react-router-dom';
// 1. Apni asal video yahan import karein (naam check kar lein)
import mySchoolVideo from '../assets/school-video.mp4'; 

const AboutSchool = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Video Section */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-navy-blue">
          <video 
            className="w-full h-full aspect-video object-cover" 
            controls 
            autoPlay 
            muted 
            loop
          >
            {/* 2. Dummy link ki jagah apni imported video variable (mySchoolVideo) laga di */}
            <source src={mySchoolVideo} type="video/mp4" />
            Aapka browser video tag support nahi karta.
          </video>
        </div>

        {/* Middle: Text Content */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-1 w-12 bg-school-red"></div>
             <h2 className="text-3xl md:text-4xl font-bold text-navy-blue font-serif drop-shadow-sm">About Our School</h2>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The Erudite Academy, Gilgit, is committed to providing quality education, nurturing talent, and building a better future for our students. We believe in academic excellence, character development and lifelong learning.
          </p>
          <div>
            <Link to="/about" className="inline-block bg-school-red hover:bg-red-800 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
              Learn More →
            </Link>
          </div>
        </div>

        {/* Right: Stats Section */}
        <div className="lg:col-span-3 bg-light-blue rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100 flex flex-col justify-center space-y-6">
          
          <div className="flex items-center gap-4">
            <div className="text-4xl text-navy-blue">🎓</div>
            <div>
              <div className="text-2xl font-extrabold text-navy-blue">25+</div>
              <div className="text-sm font-semibold text-gray-600">Years of Excellence</div>
            </div>
          </div>

          <div className="h-px w-full bg-blue-200"></div>

          <div className="flex items-center gap-4">
            <div className="text-4xl text-navy-blue">👥</div>
            <div>
              <div className="text-2xl font-extrabold text-navy-blue">2,000+</div>
              <div className="text-sm font-semibold text-gray-600">Happy Students</div>
            </div>
          </div>

          <div className="h-px w-full bg-blue-200"></div>

          <div className="flex items-center gap-4">
            <div className="text-4xl text-navy-blue">🏆</div>
            <div>
              <div className="text-2xl font-extrabold text-navy-blue">100+</div>
              <div className="text-sm font-semibold text-gray-600">Faculty & Staff</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutSchool;