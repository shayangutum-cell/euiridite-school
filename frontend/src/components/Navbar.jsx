import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-navy-blue text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold flex items-center gap-2">
        <span className="text-school-red">📚</span> The Erudite Academy
      </div>
      
      <div className="space-x-6">
        <Link to="/" className="hover:text-light-blue transition">Home</Link>
        <Link to="/about" className="hover:text-light-blue transition">About</Link>
      </div>
      
      <button className="bg-school-red px-6 py-2 rounded-full font-bold hover:bg-red-800 transition">
        LMS Login
      </button>
    </nav>
  );
};

export default Navbar;