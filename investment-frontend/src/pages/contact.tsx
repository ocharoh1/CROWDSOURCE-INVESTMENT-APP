//import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope, BiPhone, BiMap, BiTime } from 'react-icons/bi';

const Contact = () => {
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
        <section className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
            We're here to help you bring your innovative ideas to life. Reach out to us through any of the channels below.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold block">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold block">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold block">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-32"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BiEnvelope className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@crowdspace.com</p>
              <p className="text-gray-600">support@crowdspace.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BiPhone className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-gray-600">(555) 987-6543</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BiMap className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">Innovation Hub</p>
              <p className="text-gray-600">Tech City, ST 12345</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BiTime className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat-Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">How quickly do you respond?</h3>
                <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Can I schedule a meeting?</h3>
                <p className="text-gray-600">Yes! You can schedule a virtual or in-person meeting through our contact form.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Do you offer support worldwide?</h3>
                <p className="text-gray-600">We provide support globally through our online channels and virtual meetings.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">What about urgent inquiries?</h3>
                <p className="text-gray-600">For urgent matters, please call our support hotline available during business hours.</p>
              </div>
            </div>
          </div>
        </div>
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

export default Contact;