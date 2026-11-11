import React from 'react';
import { Link } from 'react-router-dom';

const AcademicsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Page Header (Hero Banner) */}
      <div className="bg-navy-blue py-16 md:py-24 text-center text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-md">Academic Excellence</h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to foster critical thinking, creativity, and a lifelong love for learning.
          </p>
        </div>
      </div>

      {/* 2. Our Programs (Matric & Intermediate) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue font-serif mb-4">Programs We Offer</h2>
          <div className="w-24 h-1 bg-school-red mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          
          {/* Matriculation Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow">
            <div className="md:w-1/3 bg-light-blue p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-gray-200">
              <div className="text-6xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-navy-blue mb-2">Matriculation</h3>
              <p className="text-school-red font-bold tracking-widest">(9th & 10th)</p>
            </div>
            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-navy-blue mb-3">Building a Strong Foundation</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Matriculation program is affiliated with the local board. We focus on conceptual clarity rather than rote learning. Students can choose between the Science Group (Biology/Computer) and General Group, preparing them thoroughly for their board examinations.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center text-sm font-semibold text-gray-700"><span className="text-royal-blue mr-2">✔</span> Science Group (Bio/Maths)</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><span className="text-royal-blue mr-2">✔</span> Computer Science Group</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><span className="text-royal-blue mr-2">✔</span> Practical Lab Sessions</li>
                <li className="flex items-center text-sm font-semibold text-gray-700"><span className="text-royal-blue mr-2">✔</span> Weekly Assessments</li>
              </ul>
            </div>
          </div>

          {/* Intermediate Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row-reverse hover:shadow-xl transition-shadow">
            <div className="md:w-1/3 bg-navy-blue p-8 flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Intermediate</h3>
              <p className="text-blue-200 font-bold tracking-widest">(11th & 12th)</p>
            </div>
            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-navy-blue mb-3">Pathways to Higher Education</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Higher Secondary programs are designed for students aiming for top universities in engineering, medicine, and IT. We provide rigorous academic training combined with career counseling.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-gray-200 text-center">
                  <h5 className="font-bold text-school-red mb-1">FSc Pre-Medical</h5>
                  <p className="text-xs text-gray-500">Biology, Physics, Chem</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-gray-200 text-center">
                  <h5 className="font-bold text-royal-blue mb-1">FSc Pre-Eng</h5>
                  <p className="text-xs text-gray-500">Math, Physics, Chem</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-gray-200 text-center">
                  <h5 className="font-bold text-navy-blue mb-1">ICS</h5>
                  <p className="text-xs text-gray-500">Computer, Math, Physics</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Teaching Methodology */}
      <div className="bg-navy-blue text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Teaching Methodology</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">How we ensure every student achieves their highest potential.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Interactive Lectures", icon: "🗣️", desc: "Moving beyond traditional monologues to engage students in active discussions." },
              { title: "Smart Classrooms", icon: "💻", desc: "Using multimedia, projectors, and modern IT tools to make complex topics easy." },
              { title: "Practical Labs", icon: "🔬", desc: "Hands-on experience in well-equipped Physics, Chemistry, and Computer labs." },
              { title: "Regular Assessments", icon: "📊", desc: "Monthly tests and term exams to track progress and identify areas of improvement." }
            ].map((method, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                <p className="text-sm text-blue-100 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Call to Action */}
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold text-navy-blue mb-4">Ready to start your academic journey?</h3>
        <Link to="/admissions" className="inline-block bg-school-red hover:bg-red-800 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md">
          Apply for Admission Now →
        </Link>
      </div>

    </div>
  );
};

export default AcademicsPage;