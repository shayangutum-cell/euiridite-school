import React from 'react';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header (Hero Banner) */}
      <div className="bg-navy-blue py-16 md:py-24 text-center text-white px-4 relative overflow-hidden">
        {/* Background Pattern (Optional) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-md">Contact Us</h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our admission office or send us a message.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* 2. Left Side: Contact Information (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-4 border-school-red flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="bg-light-blue w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 text-navy-blue shadow-sm">📍</div>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">Our Campus</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  The Erudite Academy,<br />
                  Main University Road,<br />
                  Gilgit, Gilgit-Baltistan, Pakistan
                </p>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-4 border-royal-blue flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="bg-light-blue w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 text-navy-blue shadow-sm">📞</div>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">Contact Details</h3>
                <p className="text-gray-600 mb-1 text-sm"><strong className="text-navy-blue">Phone:</strong> +92 581 111-7777</p>
                <p className="text-gray-600 mb-1 text-sm"><strong className="text-navy-blue">Mobile:</strong> +92 300 1234567</p>
                <p className="text-gray-600 text-sm"><strong className="text-navy-blue">Email:</strong> info@eruditeacademy.edu.pk</p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-4 border-navy-blue flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="bg-light-blue w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 text-navy-blue shadow-sm">🕒</div>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">Office Hours</h3>
                <p className="text-gray-600 mb-1 text-sm"><strong className="text-navy-blue">Mon - Fri:</strong> 8:00 AM - 4:00 PM</p>
                <p className="text-gray-600 text-sm"><strong className="text-navy-blue">Saturday:</strong> 9:00 AM - 1:00 PM</p>
                <p className="text-red-500 font-medium text-sm mt-1">Sunday Closed</p>
              </div>
            </div>

          </div>

          {/* 3. Right Side: Message Form (Takes 7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-navy-blue font-serif mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Doe" className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" placeholder="+92 300 0000000" className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50" />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50 appearance-none">
                  <option>Admission Inquiry</option>
                  <option>Fee Structure</option>
                  <option>Job Application / Faculty</option>
                  <option>General Question</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-royal-blue bg-slate-50 resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button type="button" className="bg-school-red hover:bg-red-800 text-white w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                Send Message <span>🚀</span>
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* 4. Google Maps Integration */}
      <div className="w-full h-96 bg-gray-200 mt-10">
        {/* Gilgit ki location ka Google Map iframe */}
        <iframe 
          title="The Erudite Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102029.07432857413!2d74.22557422699863!3d35.92080352220977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e649e3732ea62f%3A0xc023e16d4fa4c4b5!2sGilgit%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;