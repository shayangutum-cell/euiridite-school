import React from 'react';
import { Link } from 'react-router-dom';

const NewsAndGallery = () => {
  // News items ka data
  const newsEvents = [
    {
      id: 1,
      date: "15",
      month: "Nov",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Annual Sports Day 2025",
      desc: "Sports, Unity and Excellence"
    },
    {
      id: 2,
      date: "10",
      month: "Nov",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Science Fair 2025",
      desc: "Innovating for a Better Tomorrow"
    },
    {
      id: 3,
      date: "05",
      month: "Nov",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Parent-Teacher Meeting",
      desc: "Building Stronger Partnerships"
    }
  ];

  // Gallery images ka dummy data
  const galleryImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&q=80",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=300&q=80",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&q=80",
    "https://images.unsplash.com/photo-1568661206492-b67fb90fb1b6?w=300&q=80",
    "https://images.unsplash.com/photo-1546410531-df4cb7151084?w=300&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&q=80",
    "https://images.unsplash.com/photo-1523580494112-071d4e214cb4?w=300&q=80"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left (News) aur Right (Gallery) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: News & Events */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-3xl font-bold text-navy-blue mb-1">News & Events</h2>
                <p className="text-gray-600 text-sm">Stay updated with our latest news and events.</p>
              </div>
              <Link to="/news" className="text-royal-blue font-bold text-sm hover:text-school-red transition-colors">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {newsEvents.map((item) => (
                <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                  {/* Date Badge */}
                  <div className="bg-light-blue w-16 h-16 rounded-xl flex flex-col justify-center items-center flex-shrink-0 group-hover:bg-royal-blue transition-colors">
                    <span className="text-xl font-bold text-navy-blue group-hover:text-white leading-none">{item.date}</span>
                    <span className="text-sm font-semibold text-navy-blue group-hover:text-white">{item.month}</span>
                  </div>
                  
                  {/* Thumbnail Image */}
                  <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Text Details */}
                  <div>
                    <h4 className="font-bold text-navy-blue text-lg group-hover:text-royal-blue transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Our Gallery */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-3xl font-bold text-navy-blue mb-1">Our Gallery</h2>
                <p className="text-gray-600 text-sm">A glimpse of life at The Erudite Academy.</p>
              </div>
              <Link to="/gallery" className="text-royal-blue font-bold text-sm hover:text-school-red transition-colors">
                View Gallery →
              </Link>
            </div>

            {/* 4 columns x 2 rows Grid for Images */}
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((imgUrl, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer">
                  <img 
                    src={imgUrl} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 hover:opacity-90 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsAndGallery;