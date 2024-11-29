import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">MyWebsite</a>
        </div>

        {/* Menu Button (Hamburger for mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden lg:flex space-x-12">
          <NavLink to="/"  className="text-white hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/whatwedo" className="text-white hover:text-gray-400">
            What we do
          </NavLink>
          <NavLink to="/whatwethink" className="text-white hover:text-gray-400">
            What we think
          </NavLink>
          <NavLink to="/whoweare" className="text-white hover:text-gray-400">
            Who we are
          </NavLink>
          <NavLink to="/career" className="text-white hover:text-gray-400">
            Career
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-400">
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4  space-x-10`}
      >
        <NavLink to="/" className="text-white hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/whatwedo" className="text-white hover:text-gray-400">
            What we do
          </NavLink>
          <NavLink to="/whatwethink" className="text-white hover:text-gray-400">
            What we think
          </NavLink>
          <NavLink to="/whoweare" className="text-white hover:text-gray-400">
            Who we are
          </NavLink>
          <NavLink to="/carrer" className="text-white hover:text-gray-400">
            Carrer
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-400">
            Contact
          </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
