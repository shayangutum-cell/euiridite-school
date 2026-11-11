import React from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* 1. Hero Header Section */}
      {/* UI ke mutabiq dark overlay aur background building image */}
      <div className="relative bg-navy-blue h-64 md:h-80 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/90 to-transparent"></div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="w-16 h-1 bg-school-red mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Online Admission Form</h1>
          <p className="text-blue-100 text-lg md:text-xl">Take the first step towards a brighter future at<br/>The Erudite Academy</p>
        </div>
      </div>

      {/* Main Content Area (Form & Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 2. Left Sidebar (Takes 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col rounded-2xl overflow-hidden shadow-xl bg-navy-blue">
            {/* Top Image */}
            <div className="h-64 bg-gray-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Student smiling" 
                className="w-full h-full object-cover object-top"
              />
              {/* Curve Overlay trick using SVG */}
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px]">
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0B3475" opacity=".25"></path>
                  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#0B3475"></path>
                </svg>
              </div>
            </div>
            
            {/* Sidebar Content */}
            <div className="p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-center">Why Choose The Erudite Academy?</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl text-yellow-400 mb-2">⭐</div>
                  <span className="text-xs font-semibold">Quality Education with Excellence</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl text-yellow-400 mb-2">📖</div>
                  <span className="text-xs font-semibold">Modern Learning Environment</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl text-yellow-400 mb-2">👥</div>
                  <span className="text-xs font-semibold">Experienced Faculty</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl text-yellow-400 mb-2">🏆</div>
                  <span className="text-xs font-semibold">Holistic Development</span>
                </div>
              </div>
              <div className="border-t border-white/20 pt-6 text-center">
                <p className="italic text-sm font-medium">"Empowering Young Minds<br/>for a Successful Future"</p>
              </div>
            </div>
          </div>

          {/* 3. Right Form Area (Takes 8 columns) */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
            
            {/* Form Header */}
            <div className="bg-navy-blue p-4 sm:p-6 flex flex-wrap justify-between items-center rounded-tl-2xl rounded-tr-3xl relative">
              <h2 className="text-white text-xl sm:text-2xl font-bold flex items-center gap-2">
                <span>📝</span> Student Admission Form
              </h2>
              <div className="bg-slate-50 px-4 py-2 rounded-full mt-2 sm:mt-0 shadow-sm flex items-center gap-2">
                <span className="text-sm font-bold text-navy-blue mr-2">Step 1 of 4</span>
                <div className="w-6 h-1.5 rounded-full bg-royal-blue"></div>
                <div className="w-6 h-1.5 rounded-full bg-gray-200"></div>
                <div className="w-6 h-1.5 rounded-full bg-gray-200"></div>
                <div className="w-6 h-1.5 rounded-full bg-gray-200"></div>
              </div>
            </div>

            {/* Form Fields */}
            <form className="p-6 sm:p-8 flex-grow space-y-8">
              
              {/* Section 1: Student Info */}
              <div>
                <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b pb-2 mb-4">
                  <span className="bg-light-blue p-1 rounded-full text-xl">👤</span> Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">👤</div>
                      <input type="text" placeholder="Enter student full name" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                    </div>
                  </div>
                  {/* DOB */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">📅</div>
                      <input type="date" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50 text-gray-500" />
                    </div>
                  </div>
                  {/* Class */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Class Applying For <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">🎓</div>
                      <select className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50 appearance-none">
                        <option>Select Class</option>
                        <option>Matric (9th - 10th)</option>
                        <option>FSc (Pre-Eng / Pre-Med)</option>
                        <option>ICS (Computer Science)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">⌄</div>
                    </div>
                  </div>
                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="gender" className="w-4 h-4 text-royal-blue focus:ring-royal-blue border-gray-300" />
                        <span className="text-sm font-medium">Male</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="gender" className="w-4 h-4 text-royal-blue focus:ring-royal-blue border-gray-300" />
                        <span className="text-sm font-medium">Female</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Parent Info */}
              <div>
                <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b pb-2 mb-4">
                  <span className="bg-light-blue p-1 rounded-full text-xl">👥</span> Parent / Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Father Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Father's Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">👤</div>
                      <input type="text" placeholder="Enter father's name" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                    </div>
                  </div>
                  {/* Mother Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Mother's Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">👤</div>
                      <input type="text" placeholder="Enter mother's name" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                    </div>
                  </div>
                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">📞</div>
                      <input type="tel" placeholder="Enter contact number" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                    </div>
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">✉️</div>
                      <input type="email" placeholder="Enter email address" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                    </div>
                  </div>
                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none text-gray-400">📍</div>
                      <textarea rows="2" placeholder="Enter complete address" className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50 resize-none"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload Documents Area */}
              <div className="border-2 border-dashed border-gray-300 bg-light-blue/20 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-navy-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">⬆️</div>
                  <div>
                    <h4 className="font-bold text-navy-blue">Upload Required Documents</h4>
                    <p className="text-xs text-gray-500">(Birth Certificate, Previous School Record, Recent Photo)</p>
                  </div>
                </div>
                <button type="button" className="bg-navy-blue hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap shadow-md">
                  📎 Choose Files
                </button>
              </div>

              {/* Footer of Form: Terms and Submit */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-royal-blue focus:ring-royal-blue" />
                  <span className="text-gray-600">I agree to the admission <span className="text-royal-blue hover:underline">terms and conditions</span>.</span>
                </label>
                <button type="button" className="bg-school-red hover:bg-red-800 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md flex items-center gap-2 w-full sm:w-auto justify-center">
                  Next Step <span>→</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* 4. Bottom Info Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100">
          
          <div className="flex gap-10 w-full md:w-auto flex-wrap justify-between md:justify-start">
            {/* Help */}
            <div className="flex items-center gap-3">
              <div className="text-3xl text-navy-blue">🎧</div>
              <div>
                <h4 className="font-bold text-sm text-navy-blue">Need Help?</h4>
                <p className="text-xs text-gray-500">Contact Our Admission Office</p>
                <p className="text-sm font-bold text-royal-blue">+92 581 111-7777</p>
              </div>
            </div>
            
            {/* Hours */}
            <div className="flex items-center gap-3">
              <div className="text-3xl text-navy-blue">🕒</div>
              <div>
                <h4 className="font-bold text-sm text-navy-blue">Office Hours</h4>
                <p className="text-xs text-gray-500">Monday - Friday</p>
                <p className="text-xs text-royal-blue font-medium">8:00 AM – 4:00 PM</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="text-3xl text-navy-blue">📍</div>
              <div>
                <h4 className="font-bold text-sm text-navy-blue">Our Location</h4>
                <p className="text-xs text-gray-500">The Erudite Academy, Gilgit</p>
                <p className="text-xs text-gray-500">Pakistan</p>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <button className="bg-navy-blue hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md flex items-center gap-2 w-full md:w-auto justify-center">
            ⬇️ Download Prospectus
          </button>
          
        </div>
      </div>

    </div>
  );
};

export default Admissions;