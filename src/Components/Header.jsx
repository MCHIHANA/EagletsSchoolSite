import React, { useState } from "react";

const Headerz = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white p-4 fixed w-full top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">EAGLETS SCHOOLS</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">HOME</a>
            <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">CONTACT</a>
            <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">ABOUT</a>
            <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">PROJECTS</a>
            <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">GALLERY</a>
            <a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">SCHOOLS</a>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-900">HOME</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-900">CONTACT</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-900">ABOUT</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-900">PROJECTS</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-900">GALLERY</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-blue-900">SCHOOLS</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Headerz;
