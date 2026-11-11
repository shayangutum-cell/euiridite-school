import React from 'react';
import { Link } from 'react-router-dom';
// Hum wahi logo use karenge jo humne Navbar ke liye assets mein rakha tha
import schoolLogo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white pt-16 pb-6 border-t-[8px] border-school-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns (Design ke mutabiq) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: School Logo */}
          <div className="flex flex-col items-start">
             {/* Logo image (Agar background dark hai to image transparent honi chahiye ya white background de sakte hain) */}
            <img 
              src={schoolLogo} 
              alt="The Erudite Academy" 
              className="w-48 h-auto bg-white p-2 rounded-lg mb-4" 
            />
          </div>

          {/* Column 2: Quick Links (2 sub-columns mein divided) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* Left Links */}
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm text-gray-300 hover:text-white transition flex items-center gap-2"><span className="text-xs">❯</span> Home</Link></li>
                <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition flex items-center gap-2"><span className="text-xs">❯</span> About Us</Link></li>
                <li><Link to="/academics" className="text-sm text-gray-300 hover:text-white transition flex items-center gap-2"><span className="text-xs">❯</span> Academics</Link></li>
              </ul>
              {/* Right Links */}
              <ul className="space-y-3">
                <li><Link to="/admissions" className="text-sm text-gray-300 hover:text-white transition flex items-center gap-2"><span className="text-xs">❯</span> Admissions</Link></li>
                <li><Link to="/faculty" className="text-sm text-gray-300 hover:text-white transition flex items-center gap-2"><span className="text-xs">❯</span> Faculty</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white transition flex items-center gap-2"><span className="text-xs">❯</span> Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5">📞</span>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5">✉️</span>
                <span>info@eruditeacademy.edu.pk</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5">📍</span>
                <span>Gilgit, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: LMS Access & Social Media Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
              LMS Access <span className="text-sm">↗</span>
            </h4>
            
            <button className="bg-transparent border border-white hover:bg-white hover:text-navy-blue text-white px-6 py-2 rounded-lg font-bold transition-all mb-8 flex justify-between items-center w-full max-w-[200px]">
              Go to LMS <span>→</span>
            </button>
            
            <h4 className="text-sm font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-3">
              {/* Aap yahan '#' ki jagah apne Facebook, Youtube waghera ke asli links laga sakte hain */}
              <a href="https://www.facebook.com/share/1FAUNBbbKa/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center hover:bg-school-red hover:text-white transition-all font-bold text-sm">
                f
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center hover:bg-school-red hover:text-white transition-all font-bold text-sm">
                ▶
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center hover:bg-school-red hover:text-white transition-all font-bold text-sm">
                in
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center hover:bg-school-red hover:text-white transition-all font-bold text-sm">
                X
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright (Design ke mutabiq) */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
          <p>© 2025 The Erudite Academy, Gilgit. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 font-bold tracking-widest text-white">Educate • Empower • Excel</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;