// import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope } from 'react-icons/bi';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center group transition-transform hover:scale-105">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <svg className="w-10 h-10 mr-3 text-blue-200 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
              </svg>
              <span className="font-extrabold tracking-wider">Crowdspace</span>
            </Link>
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiHomeAlt className="mr-2 text-xl" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiInfoCircle className="mr-2 text-xl" />
                About
              </Link>
            </li>
            <li>
              <Link to="/ideas" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiCommentDetail className="mr-2 text-xl" />
                Ideas
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center hover:text-blue-200 transition-colors duration-300">
                <BiEnvelope className="mr-2 text-xl" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-12 px-6">
        <section className="text-center mb-16 relative">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
            Welcome to Crowdspace
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
            Crowdspace is a platform that connects visionary investors with groundbreaking ideas and innovative entrepreneurs.
          </p>


          <div className="relative h-96 mb-24 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="./src/assets/home4.jpg"
              alt="Innovation Hub"
              className="w-full h-full object-cover object-center transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Transform Ideas into Reality</h3>
                <p className="text-lg text-gray-200">Join our community of innovators and investors</p>
              </div>
            </div>
          </div>

        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-blue-100 rounded-2xl p-6 mb-6">
              <img
                src="./src/assets/explore1.png"
                alt="Explore Ideas"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Explore Ideas</h2>
            <p className="text-gray-600 mb-6">
              Browse through a vast collection of innovative ideas submitted by our community of visionaries and entrepreneurs.
            </p>
            <Link
              to="/ideas"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300"
            >
              View Ideas
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-indigo-100 rounded-2xl p-6 mb-6">
              <img
                src="./src/assets/explore1.png"
                alt="Become an Investor"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Become an Investor</h2>
            <p className="text-gray-600 mb-6">
              Invest in the ideas that excite you and help bring innovative solutions to life while growing your portfolio.
            </p>
            <Link
              to="/register"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-purple-100 rounded-2xl p-6 mb-6">
              <img
                src="/api/placeholder/400/300"
                alt="Share Your Idea"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Share Your Idea</h2>
            <p className="text-gray-600 mb-6">
              Submit your innovative idea and connect with potential investors who can help turn your vision into reality.
            </p>
            <Link
              to="/ideas/submit"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors duration-300"
            >
              Submit Idea
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Crowdspace</h3>
              <p className="text-blue-100">
                Connecting innovative minds with visionary investors to create tomorrow's solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/ideas" className="text-blue-100 hover:text-white transition-colors duration-300">
                    Browse Ideas
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-blue-100 hover:text-white transition-colors duration-300">
                    Become an Investor
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-300">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-blue-100">Email: hello@crowdspace.com</li>
                <li className="text-blue-100">Phone: (555) 123-4567</li>
                <li className="text-blue-100">Location: Innovation Hub, Tech City</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-blue-100 mb-4">Stay updated with our latest innovations</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
          <div className="border-t border-blue-400 mt-12 pt-8 text-center text-blue-100">
            &copy; 2024 Crowdspace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;