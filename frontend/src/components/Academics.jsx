import React from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
  // Programs ki list taake code saaf aur asaan rahe
  const programs = [
    {
      id: 1,
      title: "Matriculation",
      icon: "📚",
      desc: "A strong foundation for young minds with science and arts groups, focusing on conceptual learning and board exam preparation.",
      color: "border-blue-500"
    },
    {
      id: 2,
      title: "FSc (Pre-Med & Pre-Eng)",
      icon: "🔬",
      desc: "Advanced studies in Physics, Chemistry, Biology, and Math. Perfect for students aiming for top medical and engineering universities.",
      color: "border-school-red"
    },
    {
      id: 3,
      title: "ICS (Computer Science)",
      icon: "💻",
      desc: "Modern curriculum covering programming, databases, and IT skills to prepare students for the fast-growing tech industry.",
      color: "border-royal-blue"
    }
  ];

  return (
    <div className="bg-light-blue/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-school-red tracking-widest uppercase mb-2">Explore Our Offerings</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-blue font-serif">Our Academic Programs</h3>
          <div className="w-24 h-1 bg-school-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 ${program.color}`}
            >
              <div className="text-5xl mb-6 bg-light-blue w-20 h-20 rounded-full flex items-center justify-center shadow-sm">
                {program.icon}
              </div>
              <h4 className="text-2xl font-bold text-navy-blue mb-4">{program.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {program.desc}
              </p>
              <Link 
                to="/academics" 
                className="inline-flex items-center text-royal-blue font-bold hover:text-school-red transition-colors"
              >
                View Details <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Academics;