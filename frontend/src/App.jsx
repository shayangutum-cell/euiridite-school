import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Frame (Layout) */}
        <Route element={<PublicLayout />}>
          {/* Us Frame ke andar aane wale pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="p-10 text-center text-2xl">About Page (Work in progress)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;