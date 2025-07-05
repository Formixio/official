// "use client"
// import React, { useState } from 'react';

// const HomePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [selectedClass, setSelectedClass] = useState('');

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     // Reset form when closing
//     setUserName('');
//     setSelectedClass('');
//   };

//   const handleStart = () => {
//     if (userName.trim() && selectedClass) {
//       // Store user data (you can also use context or local storage)
//       const userData = {
//         name: userName.trim(),
//         class: selectedClass,
//         timestamp: new Date().toISOString()
//       };
      
//       // Redirect based on selected class
//       if (selectedClass === '10') {
//         window.location.href = '/class-10';
//       } else if (selectedClass === '12') {
//         window.location.href = '/class-12';
//       }
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-teal-400 to-cyan-500 min-h-screen flex items-center justify-center">
//         <div className="text-center px-4">
//           <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8">
//             WELCOME TO
//             <br />
//             FORMIXIO
//           </h1>
//           <button
//             onClick={openModal}
//             className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 uppercase tracking-wide shadow-xl"
//           >
//             START YOUR JOURNEY
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-8 max-w-lg w-full mx-4 border border-gray-700">
//             <h2 className="text-3xl font-bold mb-3 text-center">
//               Welcome to FORMIXIO
//             </h2>
//             <p className="text-teal-400 text-center mb-6 font-semibold">
//               Your Formula to Success!
//             </p>
            
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold mb-4 text-teal-400">
//                 Master Maths. Conquer Exams.
//               </h3>
//               <p className="text-gray-300 mb-2">Quick Formulas. Smart Tricks. Higher Scores.</p>
//               <p className="text-gray-300 mb-6">
//                 Start your journey to ace your exams - the smart way.
//               </p>
//             </div>

//             {/* Form Section */}
//             <div className="space-y-4 mb-6">
//               <div>
//                 <label htmlFor="userName" className="block text-sm font-medium text-gray-300 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="userName"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   placeholder="Enter your full name"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors duration-200"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="classSelect" className="block text-sm font-medium text-gray-300 mb-2">
//                   Select Your Class
//                 </label>
//                 <select
//                   id="classSelect"
//                   value={selectedClass}
//                   onChange={(e) => setSelectedClass(e.target.value)}
//                   className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-teal-400 focus:outline-none transition-colors duration-200"
//                 >
//                   <option value="">Choose your class</option>
//                   <option value="10">Class 10th</option>
//                   <option value="12">Class 12th</option>
//                 </select>
//               </div>
//             </div>
            
//             <div className="flex gap-4">
//               <button
//                 onClick={closeModal}
//                 className="flex-1 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors duration-200 font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleStart}
//                 disabled={!userName.trim() || !selectedClass}
//                 className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
//                   userName.trim() && selectedClass
//                     ? 'bg-teal-400 text-black hover:bg-teal-300'
//                     : 'bg-gray-700 text-gray-400 cursor-not-allowed'
//                 }`}
//               >
//                 Start Journey
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

"use client"
import React, { useState } from 'react';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [userName, setUserName] = useState(''); // Commented out for later use
  const [selectedClass, setSelectedClass] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form when closing
    // setUserName(''); // Commented out for later use
    setSelectedClass('');
  };

  const handleStart = () => {
    if (selectedClass) { // Removed userName.trim() requirement
      // Store user data (you can also use context or local storage)
      const userData = {
        // name: userName.trim(), // Commented out for later use
        class: selectedClass,
        timestamp: new Date().toISOString()
      };
      
      // Redirect based on selected class
      if (selectedClass === '10') {
        window.location.href = '/class-10';
      } else if (selectedClass === '12') {
        window.location.href = '/class-12';
      }
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-400 to-cyan-500 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8">
            WELCOME TO
            <br />
            FORMIXIO
          </h1>
          <button
            onClick={openModal}
            className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 uppercase tracking-wide shadow-xl"
          >
            START YOUR JOURNEY
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-8 max-w-lg w-full mx-4 border border-gray-700">
            <h2 className="text-3xl font-bold mb-3 text-center">
              Welcome to FORMIXIO
            </h2>
            <p className="text-teal-400 text-center mb-6 font-semibold">
              Your Formula to Success!
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                Master Maths. Conquer Exams.
              </h3>
              <p className="text-gray-300 mb-2">Quick Formulas. Smart Tricks. Higher Scores.</p>
              <p className="text-gray-300 mb-6">
                Start your journey to ace your exams - the smart way.
              </p>
            </div>

            {/* Form Section */}
            <div className="space-y-4 mb-6">
              {/* Username field - commented out for later use
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                />
              </div>
              */}

              <div>
                <label htmlFor="classSelect" className="block text-sm font-medium text-gray-300 mb-2">
                  Select Your Class
                </label>
                <select
                  id="classSelect"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-teal-400 focus:outline-none transition-colors duration-200"
                >
                  <option value="">Choose your class</option>
                  <option value="10">Class 10th</option>
                  <option value="12">Class 12th</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={closeModal}
                className="flex-1 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors duration-200 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleStart}
                disabled={!selectedClass} // Removed userName.trim() requirement
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedClass // Removed userName.trim() requirement
                    ? 'bg-teal-400 text-black hover:bg-teal-300'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Start Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;