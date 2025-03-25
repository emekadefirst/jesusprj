import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center px-4 py-4">
      <nav className="w-full max-w-6xl bg-white shadow-md rounded-full flex flex-wrap justify-between items-center px-4 py-2 relative">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
       
            <span className="ml-2 text-xl font-bold text-gray-800">Giftcard</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links - Responsive Dropdown */}
        <div className={`
          w-full md:flex md:w-auto md:space-x-6 
          ${isMenuOpen ? 'block' : 'hidden'}
          absolute md:relative 
          top-full left-0 md:top-auto md:left-auto 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none 
          rounded-lg md:rounded-none 
          mt-2 md:mt-0 
          py-4 md:py-0
          px-4 md:px-0
        `}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500 transition block md:inline">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition block md:inline">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition block md:inline">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition block md:inline">Contact Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition block md:inline">Become an Agent</a>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition block md:inline">Terms</a>
          </div>
        </div>

        {/* Download App Button */}
        <div className={`
          w-full md:w-auto mt-4 md:mt-0
          ${isMenuOpen ? 'block' : 'hidden md:block'}
        `}>
          <button 
            className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Get started →
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;