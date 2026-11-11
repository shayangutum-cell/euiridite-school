import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Footer yahan import hona zaroori hai

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Upar Navbar */}
      <Navbar />
      
      {/* Darmiyan mein Pages (Home, About, etc.) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Neechay naya Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;