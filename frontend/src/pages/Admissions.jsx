import React, { useState } from 'react';

const Admissions = () => {
  // 1. Text Data ke liye State
  const [formData, setFormData] = useState({
    student_name: '', date_of_birth: '', resident_of: '', mother_tongue: '', other_languages: '', hobby: '',
    father_name: '', father_cnic: '', father_qualification: '', father_occupation: '', father_income: '', father_phone: '', father_cell: '', father_email: '',
    mother_name: '', mother_cnic: '', mother_qualification: '', mother_occupation: '', mother_income: '', mother_cell: '', mother_email: '',
    total_monthly_income: '', address: '', postal_address: '',
    guardian_name: '', guardian_cnic: '', guardian_relation: '', guardian_cell: '', guardian_email: '',
    class_applied_for: '', class_last_attended: '', school_last_attended: '', percentage_or_grade: '',
    physical_disability: false, mental_disability: false, blood_group: '', vision: '',
    avail_hostel: false, avail_van: false,
    academic_achievement: '', co_curricular_achievement: ''
  });

  // 2. Files (Photos/PDFs) ke liye State
  const [files, setFiles] = useState({
    student_photo: null, form_b_doc: null, school_leaving_cert: null, character_cert: null
  });

  // 3. Loading aur Success messages ke liye
  const [isLoading, setIsLoading] = useState(false);

  // Text Inputs Handle karne ka function
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, [name]: value === 'true' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Files Handle karne ka function
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({ ...files, [name]: selectedFiles[0] });
  };

  // Form Submit karne ka function (React to Django)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // FormData ek special box hai jo Text aur Files dono ko backend tak le jata hai
    const submitData = new FormData();
    
    // Text data ko box mein dalna
    for (const key in formData) {
      submitData.append(key, formData[key]);
    }
    
    // Files ko box mein dalna
    for (const key in files) {
      if (files[key]) {
        submitData.append(key, files[key]);
      }
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/apply/', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        alert("✅ Application Submitted Successfully! Thank you.");
        window.location.reload(); // Form ko clear karne ke liye page refresh
      } else {
        const errorData = await response.json();
        console.error(errorData);
        alert("❌ Something went wrong. Please check the fields.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Server is not responding. Is Django running?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen pb-16 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-slate-100/90 backdrop-blur-[2px]"></div>

      <div className="relative z-10">
        <div className="relative bg-navy-blue h-64 md:h-80 w-full overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/90 to-transparent"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="w-16 h-1 bg-school-red mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">Admission Form</h1>
            <p className="text-blue-100 text-lg md:text-xl drop-shadow-sm">The Erudite Academy (Gilgit Campus)</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/50 flex flex-col">
            <div className="bg-navy-blue p-6 text-center border-b-4 border-school-red">
              <h2 className="text-white text-2xl font-bold tracking-wider drop-shadow-sm">OFFICIAL ADMISSION APPLICATION</h2>
              <p className="text-blue-200 text-sm mt-1">Fields marked with (<span className="text-red-400 font-bold">*</span>) are mandatory.</p>
            </div>

            {/* FORM START */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-10">
              
              {/* Section 1: Personal Information */}
              <section>
                <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b-2 border-gray-200 pb-2 mb-6">
                  <span className="bg-light-blue p-1.5 rounded-full text-lg shadow-sm">👤</span> 1. PERSONAL INFORMATION
                </h3>
                <div className="flex flex-col-reverse md:flex-row gap-8">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-1">Student's Name <span className="text-red-500">*</span></label>
                      <input type="text" name="student_name" onChange={handleChange} placeholder="e.g., Shayan Ali" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
                      <input type="date" name="date_of_birth" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Resident of <span className="text-red-500">*</span></label>
                      <input type="text" name="resident_of" onChange={handleChange} placeholder="e.g., Gilgit, Nagar" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Mother Tongue <span className="text-red-500">*</span></label>
                      <input type="text" name="mother_tongue" onChange={handleChange} placeholder="e.g., Shina, Urdu" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Other Languages</label>
                      <input type="text" name="other_languages" onChange={handleChange} placeholder="e.g., English" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-1">Hobby</label>
                      <input type="text" name="hobby" onChange={handleChange} placeholder="e.g., Coding" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end shrink-0 md:w-48">
                    <label className="block text-sm font-bold text-gray-700 mb-2 w-full text-center md:text-left">Student Photo <span className="text-red-500">*</span></label>
                    <div className="w-32 h-40 md:w-36 md:h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-gray-50/50 text-gray-400 relative overflow-hidden group">
                      <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">📷</span>
                      <span className="text-xs font-semibold text-center px-2">{files.student_photo ? "Photo Selected" : "Upload Photo"}</span>
                      <input type="file" name="student_photo" onChange={handleFileChange} accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" required />
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Parent's Information */}
              <section>
                <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b-2 border-gray-200 pb-2 mb-6">
                  <span className="bg-light-blue p-1.5 rounded-full text-lg shadow-sm">👥</span> 2. PARENT'S INFORMATION
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Father */}
                  <div className="space-y-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Father's Name <span className="text-red-500">*</span></label>
                      <input type="text" name="father_name" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">CNIC # <span className="text-red-500">*</span></label>
                      <input type="text" name="father_cnic" onChange={handleChange} placeholder="00000-0000000-0" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Qualification</label>
                      <input type="text" name="father_qualification" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Occupation <span className="text-red-500">*</span></label>
                      <input type="text" name="father_occupation" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Monthly Income</label>
                      <input type="text" name="father_income" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Phone #</label>
                        <input type="tel" name="father_phone" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Cell # <span className="text-red-500">*</span></label>
                        <input type="tel" name="father_cell" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                      <input type="email" name="father_email" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                  </div>
                  {/* Mother */}
                  <div className="space-y-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Mother's Name</label>
                      <input type="text" name="mother_name" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">CNIC #</label>
                      <input type="text" name="mother_cnic" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Qualification</label>
                      <input type="text" name="mother_qualification" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Occupation</label>
                      <input type="text" name="mother_occupation" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Monthly Income</label>
                      <input type="text" name="mother_income" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Cell #</label>
                      <input type="tel" name="mother_cell" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                      <input type="email" name="mother_email" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Total Monthly Income</label>
                    <input type="text" name="total_monthly_income" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
                    <input type="text" name="address" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Postal Address <span className="text-red-500">*</span></label>
                    <input type="text" name="postal_address" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                  </div>
                </div>
              </section>

              {/* Section 3: Guardian */}
              <section>
                <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b-2 border-gray-200 pb-2 mb-6">
                  <span className="bg-light-blue p-1.5 rounded-full text-lg shadow-sm">🛡️</span> 3. GUARDIAN'S INFO
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Guardian's Name</label>
                    <input type="text" name="guardian_name" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">CNIC #</label>
                    <input type="text" name="guardian_cnic" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Relation</label>
                    <input type="text" name="guardian_relation" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Cell #</label>
                    <input type="tel" name="guardian_cell" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                    <input type="email" name="guardian_email" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                  </div>
                </div>
              </section>

              {/* Section 4 & 5 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section>
                  <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b-2 border-gray-200 pb-2 mb-6">
                    <span className="bg-light-blue p-1.5 rounded-full text-lg shadow-sm">🎓</span> 4. ACADEMIC INFO
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Class Applied for <span className="text-red-500">*</span></label>
                      <input type="text" name="class_applied_for" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Class last attended <span className="text-red-500">*</span></label>
                      <input type="text" name="class_last_attended" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">School last attended <span className="text-red-500">*</span></label>
                      <input type="text" name="school_last_attended" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Percentage / Grade <span className="text-red-500">*</span></label>
                      <input type="text" name="percentage_or_grade" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" required />
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b-2 border-gray-200 pb-2 mb-6">
                    <span className="bg-light-blue p-1.5 rounded-full text-lg shadow-sm">🏥</span> 5. MEDICAL INFO
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 py-2">
                      <span className="text-sm font-bold text-gray-700">Any physical disability</span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="physical_disability" value="true" onChange={handleChange} className="text-royal-blue" required /> Yes</label>
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="physical_disability" value="false" onChange={handleChange} className="text-royal-blue" defaultChecked /> No</label>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 py-2">
                      <span className="text-sm font-bold text-gray-700">Any mental disability</span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mental_disability" value="true" onChange={handleChange} className="text-royal-blue" required /> Yes</label>
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="mental_disability" value="false" onChange={handleChange} className="text-royal-blue" defaultChecked /> No</label>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <label className="text-sm font-bold text-gray-700 w-1/2">Blood Group</label>
                      <input type="text" name="blood_group" onChange={handleChange} className="w-1/2 border-b border-gray-300 py-1 focus:outline-none focus:border-royal-blue bg-transparent text-right" />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold text-gray-700 w-1/2">Vision</label>
                      <input type="text" name="vision" onChange={handleChange} className="w-1/2 border-b border-gray-300 py-1 focus:outline-none focus:border-royal-blue bg-transparent text-right" />
                    </div>
                  </div>
                </section>
              </div>

              {/* Section 6 & 7 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section>
                  <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b-2 border-gray-200 pb-2 mb-6">
                    <span className="bg-light-blue p-1.5 rounded-full text-lg shadow-sm">🚌</span> 6. FACILITIES
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 py-2">
                      <span className="text-sm font-bold text-gray-700">Hostel facility?</span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="avail_hostel" value="true" onChange={handleChange} className="text-royal-blue" required /> Yes</label>
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="avail_hostel" value="false" onChange={handleChange} className="text-royal-blue" defaultChecked /> No</label>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 py-2">
                      <span className="text-sm font-bold text-gray-700">Van facility?</span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="avail_van" value="true" onChange={handleChange} className="text-royal-blue" required /> Yes</label>
                        <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="avail_van" value="false" onChange={handleChange} className="text-royal-blue" defaultChecked /> No</label>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 border-b-2 border-gray-200 pb-2 mb-6">
                    <span className="bg-light-blue p-1.5 rounded-full text-lg shadow-sm">🏆</span> 7. ACHIEVEMENTS
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Academic Achievement</label>
                      <input type="text" name="academic_achievement" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Co-Curricular Achievements</label>
                      <input type="text" name="co_curricular_achievement" onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-royal-blue bg-transparent" />
                    </div>
                  </div>
                </section>
              </div>

              {/* Section 8: Uploads */}
              <section className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-navy-blue flex items-center gap-2 mb-2">
                  <span className="bg-white p-1.5 rounded-full shadow-sm text-lg">📎</span> 8. UPLOAD DOCUMENTS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center">
                    <h4 className="font-bold text-navy-blue text-sm mb-4">Form "B" <span className="text-red-500">*</span></h4>
                    <label className="bg-navy-blue hover:bg-blue-900 text-white text-xs font-bold py-2.5 px-4 rounded-full cursor-pointer w-full">
                      {files.form_b_doc ? "File Selected ✅" : "Choose File"}
                      <input type="file" name="form_b_doc" onChange={handleFileChange} className="hidden" accept="image/*,.pdf" required />
                    </label>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center">
                    <h4 className="font-bold text-navy-blue text-sm mb-4">School Leaving Cert. <span className="text-red-500">*</span></h4>
                    <label className="bg-navy-blue hover:bg-blue-900 text-white text-xs font-bold py-2.5 px-4 rounded-full cursor-pointer w-full">
                      {files.school_leaving_cert ? "File Selected ✅" : "Choose File"}
                      <input type="file" name="school_leaving_cert" onChange={handleFileChange} className="hidden" accept="image/*,.pdf" required />
                    </label>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center">
                    <h4 className="font-bold text-navy-blue text-sm mb-4">Character Certificate</h4>
                    <label className="bg-navy-blue hover:bg-blue-900 text-white text-xs font-bold py-2.5 px-4 rounded-full cursor-pointer w-full">
                      {files.character_cert ? "File Selected ✅" : "Choose File"}
                      <input type="file" name="character_cert" onChange={handleFileChange} className="hidden" accept="image/*,.pdf" />
                    </label>
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button type="submit" disabled={isLoading} className={`text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-school-red hover:bg-red-800 transform hover:-translate-y-1'}`}>
                  {isLoading ? 'Submitting Application...' : 'Submit Admission Application ✅'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;