import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Links and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Logo & About (Takes up 2 columns space on large screens) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl bg-white rounded-full p-1">📚</span>
              <div>
                <h3 className="text-2xl font-bold font-serif leading-tight">The Erudite</h3>
                <h3 className="text-xl font-bold text-school-red tracking-widest uppercase leading-tight">Academy</h3>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-6 max-w-sm">
              Committed to providing quality education, nurturing talent, and building a better future for our students in Gilgit, Pakistan.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="text-school-red">❯</span> Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="text-school-red">❯</span> About Us</Link></li>
              <li><Link to="/academics" className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="text-school-red">❯</span> Academics</Link></li>
              <li><Link to="/admissions" className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="text-school-red">❯</span> Admissions</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <span className="mt-1">📞</span>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <span className="mt-1">✉️</span>
                <span>info@eruditeacademy.edu.pk</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <span className="mt-1">📍</span>
                <span>Gilgit, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: LMS & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">LMS Access</h4>
            <button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-navy-blue text-white px-4 py-2 rounded-lg font-bold transition-all mb-8 flex justify-between items-center">
              Go to LMS <span>🔗</span>
            </button>
            
            <h4 className="text-sm font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center cursor-pointer hover:bg-school-red hover:text-white transition-all font-bold">f</div>
              <div className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center cursor-pointer hover:bg-school-red hover:text-white transition-all font-bold">in</div>
              <div className="w-8 h-8 rounded-full bg-white text-navy-blue flex items-center justify-center cursor-pointer hover:bg-school-red hover:text-white transition-all font-bold">X</div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
          <p>© {new Date().getFullYear()} The Erudite Academy, Gilgit. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 font-bold tracking-widest">EDUCATE • EMPOWER • EXCEL</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;