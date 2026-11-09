import React from 'react';

const Features = () => {
  // Hum in features ko ek array (list) mein rakh rahe hain taake code saaf rahe
  const featureList = [
    { id: 1, icon: '🎓', title: 'Quality Education', desc: 'for a Better Tomorrow' },
    { id: 2, icon: '📖', title: 'Modern Curriculum', desc: '& Smart Learning' },
    { id: 3, icon: '🏆', title: 'Experienced Faculty', desc: '& Supportive Staff' },
    { id: 4, icon: '🏛️', title: 'World-Class Facilities', desc: 'For Optimal Growth' },
    { id: 5, icon: '👥', title: 'Holistic Development', desc: 'Mind, Body & Spirit' },
  ];

  return (
    // Yeh section thoda sa upar (-mt-12) shift kiya hai taake hero section ke upar overlap kare, design ke mutabiq
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16"></div>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-wrap md:flex-nowrap justify-between overflow-hidden">
        
        {featureList.map((feature, index) => (
          <div 
            key={feature.id} 
            className={`flex-1 flex flex-col items-center text-center p-6 sm:p-8 hover:bg-light-blue transition-colors cursor-default
              ${index !== featureList.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}
            `}
          >
            <div className="text-4xl mb-3 text-navy-blue">
              {feature.icon}
            </div>
            <h3 className="font-bold text-navy-blue text-sm sm:text-base leading-tight">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {feature.desc}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Features;