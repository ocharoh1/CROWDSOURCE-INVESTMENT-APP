//import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope } from 'react-icons/bi';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Header - Identical to homepage */}
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
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
            Our Story
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
            Building bridges between innovative ideas and the resources they need to thrive
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-24">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              src="./src/assets/explore1.png"
              alt="Our Mission"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-8 left-8 text-white max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-gray-200">
                  To democratize innovation by creating meaningful connections between visionary entrepreneurs and forward-thinking investors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-blue-100 rounded-2xl p-6 mb-6 flex items-center justify-center">
              <svg className="w-24 h-24 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L19.5 12H18v7h-4v-6H10v6H6v-7H4.5L12 4.84z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Innovation First</h3>
            <p className="text-gray-600">
              We believe in the power of innovative ideas to shape the future and solve global challenges.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-2xl p-6 mb-6 flex items-center justify-center">
              <svg className="w-24 h-24 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1-10c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Transparency</h3>
            <p className="text-gray-600">
              We foster trust through clear communication and honest relationships with our community.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-purple-100 rounded-2xl p-6 mb-6 flex items-center justify-center">
              <svg className="w-24 h-24 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Community</h3>
            <p className="text-gray-600">
              We build strong connections between entrepreneurs and investors who share our vision.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="./src/assets/explore1.png"
                  alt="Team Member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Team Member {member}</h3>
                  <p className="text-gray-600 mb-4">Position</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Identical to homepage */}
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

export default About;