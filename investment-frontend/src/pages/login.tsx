import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiHomeAlt, BiInfoCircle, BiCommentDetail, BiEnvelope, BiLogIn, BiLogInCircle, BiMailSend, BiLock } from 'react-icons/bi';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        setSuccess(true);
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError(data.message || 'Failed to login');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen flex flex-col">
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

      <main className="flex-grow flex justify-center items-center py-12 px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 flex items-center justify-center">
            <BiLogInCircle className="mr-2 text-4xl" /> Login
          </h2>
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg">
              <p className="font-bold">Success</p>
              <p>Login successful! Redirecting...</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <BiMailSend className="absolute top-1/2 transform -translate-y-1/2 left-3 text-blue-500 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="pl-10 pr-4 py-3 rounded-lg border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all duration-300"
                required
              />
            </div>
            <div className="relative">
              <BiLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-blue-500 text-xl" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="pl-10 pr-4 py-3 rounded-lg border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full flex items-center justify-center transform hover:scale-105"
            >
              <BiLogIn className="mr-2 text-xl" /> Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <Link to="/register" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300">
              Register here
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Crowdspace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;