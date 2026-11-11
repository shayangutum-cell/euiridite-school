import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
// 1. Naya page import karein
import AcademicsPage from './pages/AcademicsPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* 2. Academics ka route yahan add kiya */}
          <Route path="/academics" element={<AcademicsPage />} /> 
          
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={
            <div className="py-20 text-center min-h-[60vh]">
              <h1 className="text-5xl font-bold text-school-red mb-4">404</h1>
              <p className="text-gray-600 text-xl">Page not found.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;