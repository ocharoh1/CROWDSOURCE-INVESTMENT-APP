// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope, BiSave, BiBulb } from 'react-icons/bi';

// //  function IdeaPage() {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [estimatedReturn, setEstimatedReturn] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState(false);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const checkAuth = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/auth/check', {
// //           method: 'GET',
// //           credentials: 'include',
// //         });
// //         if (response.ok) {
// //           setIsAuthenticated(true);
// //         } else {
// //           setIsAuthenticated(false);
// //           setError('You must be logged in to create an idea.');
// //         }
// //       } catch (error) {
// //         console.error('Error checking authentication:', error);
// //         setIsAuthenticated(false);
// //         setError('An error occurred while checking authentication.');
// //       }
// //     };

// //     checkAuth();
// //   }, []);

// //   const handleSubmit = async (event: React.FormEvent) => {
// //     event.preventDefault();
// //     setError('');
// //     setSuccess(false);

// //     if (!isAuthenticated) {
// //       setError('You must be logged in to create an idea.');
// //       return;
// //     }

// //     if (description.trim().split(' ').length < 300) {
// //       setError('The description must be at least 300 words.');
// //       return;
// //     }

// //     try {
// //       const response = await fetch('http://localhost:5000/api/ideas/createideas', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         credentials: 'include',
// //         body: JSON.stringify({ title, description, category, estimatedReturn: parseFloat(estimatedReturn) }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         console.log('Idea submitted successfully:', data);
// //         setSuccess(true);
// //         setTitle('');
// //         setDescription('');
// //         setCategory('');
// //         setEstimatedReturn('');
// //         setTimeout(() => navigate('/ideas'), 2000);
// //       } else {
// //         setError(data.message || 'Failed to submit idea');
// //       }
// //     } catch (error) {
// //       setError('An error occurred while submitting the idea.');
// //       console.error(error);
// //     }
// //   };

// //   const categories = [
// //     'Artificial Intelligence & Machine Learning',
// //     'Renewable Energy & Sustainability',
// //     'Quantum Computing',
// //     'Biotechnology & Genomics',
// //     'Cybersecurity & Data Privacy',
// //     '5G & Connectivity',
// //     'Autonomous Vehicles & Drones',
// //     'Internet of Things (IoT) & Smart Devices',
// //     'Fintech & Digital Currency',
// //     'Augmented Reality (AR) & Virtual Reality (VR)',
// //     'Climate Tech & Carbon Capture',
// //     'EdTech & Digital Learning Platforms',
// //   ];

// //   return (
// //     <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
// //       <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-6 shadow-lg">
// //         <nav className="container mx-auto flex justify-between items-center px-6">
// //           <div className="flex items-center group transition-transform hover:scale-105">
// //             <Link to="/home" className="text-2xl font-bold flex items-center">
// //               <BiBulb className="w-10 h-10 mr-3 text-blue-200 animate-pulse" />
// //               <span className="font-extrabold tracking-wider">Crowdspace</span>
// //             </Link>
// //           </div>
// //           <ul className="flex space-x-8">
// //             <li>
// //               <Link to="/home" className="flex items-center hover:text-blue-200 transition-colors duration-300">
// //                 <BiHomeAlt className="mr-2 text-xl" />
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/about" className="flex items-center hover:text-blue-200 transition-colors duration-300">
// //                 <BiInfoCircle className="mr-2 text-xl" />
// //                 About
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/ideas" className="flex items-center hover:text-blue-200 transition-colors duration-300">
// //                 <BiCommentDetail className="mr-2 text-xl" />
// //                 Ideas
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/contact" className="flex items-center hover:text-blue-200 transition-colors duration-300">
// //                 <BiEnvelope className="mr-2 text-xl" />
// //                 Contact
// //               </Link>
// //             </li>
// //           </ul>
// //         </nav>
// //       </header>

// //       <main className="container mx-auto py-12 px-6">
// //         <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
// //           <h2 className="text-2xl font-bold text-blue-600 mb-6">Submit Your Idea</h2>
// //           {error && (
// //             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// //               {error}
// //             </div>
// //           )}
// //           {success && (
// //             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
// //               Idea submitted successfully! Redirecting to ideas page...
// //             </div>
// //           )}
// //           {isAuthenticated ? (
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <div>
// //                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Idea Title</label>
// //                 <input
// //                   id="title"
// //                   type="text"
// //                   value={title}
// //                   onChange={(e) => setTitle(e.target.value)}
// //                   placeholder="Enter your idea title"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Idea Description (minimum 300 words)</label>
// //                 <textarea
// //                   id="description"
// //                   value={description}
// //                   onChange={(e) => setDescription(e.target.value)}
// //                   placeholder="Describe your idea in detail"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
// //                 <select
// //                   id="category"
// //                   value={category}
// //                   onChange={(e) => setCategory(e.target.value)}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   required
// //                 >
// //                   <option value="">Select a category</option>
// //                   {categories.map((cat) => (
// //                     <option key={cat} value={cat}>
// //                       {cat}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div>
// //                 <label htmlFor="estimatedReturn" className="block text-sm font-medium text-gray-700 mb-1">Estimated Return (%)</label>
// //                 <input
// //                   id="estimatedReturn"
// //                   type="number"
// //                   value={estimatedReturn}
// //                   onChange={(e) => setEstimatedReturn(e.target.value)}
// //                   placeholder="Enter estimated return percentage"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                   required
// //                   min="0"
// //                   max="100"
// //                   step="0.1"
// //                 />
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
// //               >
// //                 <BiSave className="mr-2" /> Submit Idea
// //               </button>
// //             </form>
// //           ) : (
// //             <div className="text-center">
// //               <p className="mb-4">You must be logged in to create an idea.</p>
// //               <Link
// //                 to="/login"
// //                 className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 inline-block"
// //               >
// //                 Log In
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </main>

// //       <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-12">
// //         <div className="container mx-auto px-6">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
// //             <div>
// //               <h3 className="text-xl font-bold mb-4">About Crowdspace</h3>
// //               <p className="text-blue-100">
// //                 Connecting innovative minds with visionary investors to create tomorrow's solutions.
// //               </p>
// //             </div>
// //             <div>
// //               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
// //               <ul className="space-y-2">
// //                 <li>
// //                   <Link to="/ideas" className="text-blue-100 hover:text-white transition-colors duration-300">
// //                     Browse Ideas
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/register" className="text-blue-100 hover:text-white transition-colors duration-300">
// //                     Become an Investor
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-300">
// //                     About Us
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="text-xl font-bold mb-4">Contact</h3>
// //               <ul className="space-y-2">
// //                 <li className="text-blue-100">Email: hello@crowdspace.com</li>
// //                 <li className="text-blue-100">Phone: (555) 123-4567</li>
// //                 <li className="text-blue-100">Location: Innovation Hub, Tech City</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="text-xl font-bold mb-4">Newsletter</h3>
// //               <p className="text-blue-100 mb-4">Stay updated with our latest innovations</p>
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
// //               />
// //             </div>
// //           </div>
// //           <div className="border-t border-blue-400 mt-12 pt-8 text-center text-blue-100">
// //             &copy; 2024 Crowdspace. All rights reserved.
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // //exports
// // export default IdeaPage;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope, BiSave, BiBulb } from 'react-icons/bi';

// function IdeaPage() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [estimatedReturn, setEstimatedReturn] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           setIsAuthenticated(false);
//           setError('You must be logged in to create an idea.');
//           return;
//         }

//         const response = await fetch('http://localhost:5000/api/auth/check', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         if (response.ok) {
//           setIsAuthenticated(true);
//         } else {
//           setIsAuthenticated(false);
//           setError('You must be logged in to create an idea.');
//         }
//       } catch (error) {
//         console.error('Error checking authentication:', error);
//         setIsAuthenticated(false);
//         setError('An error occurred while checking authentication.');
//       }
//     };

//     checkAuth();
//   }, []);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setError('');
//     setSuccess(false);

//     if (!isAuthenticated) {
//       setError('You must be logged in to create an idea.');
//       return;
//     }

//     if (description.trim().split(' ').length < 300) {
//       setError('The description must be at least 300 words.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://localhost:5000/api/ideas/createideas', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ title, description, category, estimatedReturn: parseFloat(estimatedReturn) }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Idea submitted successfully:', data);
//         setSuccess(true);
//         setTitle('');
//         setDescription('');
//         setCategory('');
//         setEstimatedReturn('');
//         setTimeout(() => navigate('/ideas'), 2000);
//       } else {
//         setError(data.message || 'Failed to submit idea');
//       }
//     } catch (error) {
//       setError('An error occurred while submitting the idea.');
//       console.error(error);
//     }
//   };

//   const categories = [
//     'Artificial Intelligence & Machine Learning',
//     'Renewable Energy & Sustainability',
//     'Quantum Computing',
//     'Biotechnology & Genomics',
//     'Cybersecurity & Data Privacy',
//     '5G & Connectivity',
//     'Autonomous Vehicles & Drones',
//     'Internet of Things (IoT) & Smart Devices',
//     'Fintech & Digital Currency',
//     'Augmented Reality (AR) & Virtual Reality (VR)',
//     'Climate Tech & Carbon Capture',
//     'EdTech & Digital Learning Platforms',
//   ];

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
//       <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-6 shadow-lg">
//         <nav className="container mx-auto flex justify-between items-center px-6">
//           <div className="flex items-center group transition-transform hover:scale-105">
//             <Link to="/home" className="text-2xl font-bold flex items-center">
//               <BiBulb className="w-10 h-10 mr-3 text-blue-200 animate-pulse" />
//               <span className="font-extrabold tracking-wider">Crowdspace</span>
//             </Link>
//           </div>
//           <ul className="flex space-x-8">
//             <li>
//               <Link to="/home" className="flex items-center hover:text-blue-200 transition-colors duration-300">
//                 <BiHomeAlt className="mr-2 text-xl" />
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="flex items-center hover:text-blue-200 transition-colors duration-300">
//                 <BiInfoCircle className="mr-2 text-xl" />
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/ideas" className="flex items-center hover:text-blue-200 transition-colors duration-300">
//                 <BiCommentDetail className="mr-2 text-xl" />
//                 Ideas
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="flex items-center hover:text-blue-200 transition-colors duration-300">
//                 <BiEnvelope className="mr-2 text-xl" />
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main className="container mx-auto py-12 px-6">
//         <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-blue-600 mb-6">Submit Your Idea</h2>
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           {success && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//               Idea submitted successfully! Redirecting to ideas page...
//             </div>
//           )}
//           {isAuthenticated ? (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Idea Title</label>
//                 <input
//                   id="title"
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   placeholder="Enter your idea title"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Idea Description (minimum 300 words)</label>
//                 <textarea
//                   id="description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   placeholder="Describe your idea in detail"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                 <select
//                   id="category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 >
//                   <option value="">Select a category</option>
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="estimatedReturn" className="block text-sm font-medium text-gray-700 mb-1">Estimated Return (%)</label>
//                 <input
//                   id="estimatedReturn"
//                   type="number"
//                   value={estimatedReturn}
//                   onChange={(e) => setEstimatedReturn(e.target.value)}
//                   placeholder="Enter estimated return percentage"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                   min="0"
//                   max="100"
//                   step="0.1"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
//               >
//                 <BiSave className="mr-2" /> Submit Idea
//               </button>
//             </form>
//           ) : (
//             <div className="text-center">
//               <p className="mb-4">You must be logged in to create an idea.</p>
//               <Link
//                 to="/login"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 inline-block"
//               >
//                 Log In
//               </Link>
//             </div>
//           )}
//         </div>
//       </main>

//       <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <h3 className="text-xl font-bold mb-4">About Crowdspace</h3>
//               <p className="text-blue-100">
//                 Connecting innovative minds with visionary investors to create tomorrow's solutions.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="/ideas" className="text-blue-100 hover:text-white transition-colors duration-300">
//                     Browse Ideas
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/register" className="text-blue-100 hover:text-white transition-colors duration-300">
//                     Become an Investor
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-300">
//                     About Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact</h3>
//               <ul className="space-y-2">
//                 <li className="text-blue-100">Email: hello@crowdspace.com</li>
//                 <li className="text-blue-100">Phone: (555) 123-4567</li>
//                 <li className="text-blue-100">Location: Innovation Hub, Tech City</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Newsletter</h3>
//               <p className="text-blue-100 mb-4">Stay updated with our latest innovations</p>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//             </div>
//           </div>
//           <div className="border-t border-blue-400 mt-12 pt-8 text-center text-blue-100">
//             &copy; 2024 Crowdspace. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default IdeaPage;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope, BiSave, BiBulb } from 'react-icons/bi';

function IdeaPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [estimatedReturn, setEstimatedReturn] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http://localhost:5000/api/users/verify', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (response.ok) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            setError('Your session has expired. Please log in again.');
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.error('Error verifying token:', error);
          setIsAuthenticated(false);
          setError('An error occurred while verifying your session. Please try logging in again.');
          localStorage.removeItem('token');
        }
      } else {
        setIsAuthenticated(false);
        setError('You must be logged in to create an idea.');
      }
    };
    checkAuth();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    if (!isAuthenticated) {
      setError('You must be logged in to create an idea.');
      return;
    }

    if (description.trim().split(/\s+/).length < 300) {
      setError('The description must be at least 300 words.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/ideas/createideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, category, estimatedReturn: parseFloat(estimatedReturn) }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Idea submitted successfully:', data);
        setSuccess(true);
        setTitle('');
        setDescription('');
        setCategory('');
        setEstimatedReturn('');
        setTimeout(() => navigate('/ideas'), 2000);
      } else {
        if (response.status === 401) {
          setError('Your session has expired. Please log in again.');
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        } else {
          setError(data.message || 'Failed to submit idea. Please try again.');
        }
      }
    } catch (error) {
      setError('An error occurred while submitting the idea. Please check your connection and try again.');
      console.error(error);
    }
  };

  const categories = [
    'Artificial Intelligence & Machine Learning',
    'Renewable Energy & Sustainability',
    'Quantum Computing',
    'Biotechnology & Genomics',
    'Cybersecurity & Data Privacy',
    '5G & Connectivity',
    'Autonomous Vehicles & Drones',
    'Internet of Things (IoT) & Smart Devices',
    'Fintech & Digital Currency',
    'Augmented Reality (AR) & Virtual Reality (VR)',
    'Climate Tech & Carbon Capture',
    'EdTech & Digital Learning Platforms',
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Header and navigation code remains the same */}

      <main className="container mx-auto py-12 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Submit Your Idea</h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Idea submitted successfully! Redirecting to ideas page...
            </div>
          )}
          {isAuthenticated ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form fields remain the same */}
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-4">You must be logged in to create an idea.</p>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 inline-block"
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer code remains the same */}
    </div>
  );
}

export default IdeaPage;

