import React, { useState } from 'react';
import ThemeChanger from './Themechanger';
import logo from '../assets/LOGO.jpg';
import HireMeModal from './Hireme';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: for hamburger icons

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-black shadow h-24 px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-xl text-black dark:text-white">
          <Link to="/" className="hover:text-blue-500 transition duration-300">Home</Link>
          <Link to="/projects" className="hover:text-blue-500 transition duration-300">Projects</Link>
          <Link to="/about" className="hover:text-blue-500 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 text-base font-semibold transition duration-300"
          >
            Hire Me
          </button>
          <ThemeChanger />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black dark:text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow px-6 py-4 space-y-4 text-lg text-black dark:text-white">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-500">Home</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-500">Projects</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-500">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-500">Contact</Link>
          <button 
            onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }} 
            className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold transition duration-300"
          >
            Hire Me
          </button>
          <div className="pt-2">
            <ThemeChanger />
          </div>
        </div>
      )}

      {/* Hire Me Modal */}
      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
