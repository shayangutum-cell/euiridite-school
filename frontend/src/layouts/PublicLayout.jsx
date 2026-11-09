import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar hamesha top par rahega */}
      <Navbar />
      
      {/* Outlet wo screen/jagah hai jahan Home ya About page render hoga */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;