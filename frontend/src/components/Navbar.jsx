import React from 'react';
import { Link } from 'react-router-dom';
// Yahan hum aapke assets folder se logo import kar rahe hain
import schoolLogo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-navy-blue text-white p-4 shadow-md flex flex-wrap justify-between items-center gap-4">
      
      {/* Left Side: Logo and School Name (Link laga diya taake logo par click karne se Home par jaye) */}
      <Link to="/" className="text-xl md:text-2xl font-bold flex items-center gap-3">
        <img 
          src={schoolLogo} 
          alt="The Erudite Academy Logo" 
          className="h-10 md:h-12 w-auto bg-white rounded-full p-1" 
          // (Agar aapka logo pehle se gol/transparent hai toh upar wali line se 'bg-white rounded-full p-1' hata dijiyega)
        />
        <span>The Erudite Academy</span>
      </Link>
      
      {/* Middle: All Navigation Links */}
      <div className="flex gap-4 md:space-x-6 text-sm md:text-base font-medium">
        <Link to="/" className="hover:text-light-blue transition">Home</Link>
        <Link to="/about" className="hover:text-light-blue transition">About</Link>
        <Link to="/academics" className="hover:text-light-blue transition">Academics</Link>
        <Link to="/admissions" className="hover:text-light-blue transition">Admissions</Link>
        <Link to="/contact" className="hover:text-light-blue transition">Contact Us</Link>
      </div>
      
      {/* Right Side: LMS Login Button */}
      <button className="hidden sm:block bg-school-red px-6 py-2 rounded-full font-bold hover:bg-red-800 transition shadow-md">
        LMS Login
      </button>
      
    </nav>
  );
};

export default Navbar;