import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      
      {/* 1. Page Header (Hero Banner) */}
      <div className="bg-navy-blue py-16 md:py-24 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-md">About Us</h1>
        <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
          Discover the history, mission, and values that make The Erudite Academy a beacon of excellence in Gilgit.
        </p>
      </div>

      {/* 2. Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left: Image Area */}
          <div className="md:w-1/2">
            {/* Fictional Image from Unsplash - Aap baad mein school ki building laga sakte hain */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Students collaborating" 
              className="rounded-2xl shadow-xl w-full object-cover h-[350px] md:h-[450px]"
            />
          </div>
          
          {/* Right: Text Area */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-1 w-12 bg-school-red"></div>
               <h2 className="text-3xl md:text-4xl font-bold text-navy-blue font-serif">Our Story</h2>
            </div>
            
            <p className="text-gray-600 mb-5 leading-relaxed text-lg">
              Established with a profound vision to transform the educational landscape of Gilgit-Baltistan, <strong className="text-navy-blue">The Erudite Academy</strong> started its journey as a humble initiative. Today, it stands as a premier institution dedicated to academic brilliance and holistic character building.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We believe that every child is a unique learner. Our campus provides a safe, modern, and stimulating environment where students are encouraged to ask questions, explore ideas, and develop the leadership skills necessary for tomorrow's challenges.
            </p>
            
            <Link to="/contact" className="inline-flex items-center text-royal-blue font-bold text-lg hover:text-school-red transition-colors group">
              Get in touch with us <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Mission & Vision Section */}
      <div className="bg-light-blue/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-school-red hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-navy-blue mb-4 font-serif">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To impart world-class education that empowers students with critical thinking, ethical values, and practical skills. We strive to create an inclusive community where every student is inspired to reach their full potential and contribute meaningfully to society.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-royal-blue hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-6">👁️</div>
              <h3 className="text-3xl font-bold text-navy-blue mb-4 font-serif">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading educational institution in Pakistan, recognized globally for innovation in teaching, holistic student development, and shaping the future leaders, innovators, and responsible global citizens of tomorrow.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-blue font-serif mb-12">Our Core Values</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Main array map use kar rahe hain code chota rakhne ke liye */}
          {[
            { title: 'Excellence', icon: '⭐', desc: 'Striving for the highest standards in academic and personal growth.' },
            { title: 'Integrity', icon: '🛡️', desc: 'Acting with honesty, transparency, and strong moral principles.' },
            { title: 'Innovation', icon: '💡', desc: 'Embracing creative approaches to learning and problem solving.' },
            { title: 'Empathy', icon: '🤝', desc: 'Fostering a culture of compassion, respect, and understanding.' },
          ].map((value, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-4xl bg-light-blue w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-navy-blue shadow-sm">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-navy-blue mb-2">{value.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default About;