import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-green-400">
          Solomough
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-400">
            About
          </Link>
          <Link to="/skills" className="hover:text-green-400">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-green-400">
            Projects
          </Link>
          <Link to="/services" className="hover:text-green-400">
            Services
          </Link>
          <Link to="/faithbooks" className="hover:text-green-400">
            FaithBooks
          </Link>
          <Link to="/contact" className="hover:text-green-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 px-6 py-4 space-y-4 text-lg">
          <Link to="/" className="block hover:text-green-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="block hover:text-green-400" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/skills" className="block hover:text-green-400" onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="/projects" className="block hover:text-green-400" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/services" className="block hover:text-green-400" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/faithbooks" className="block hover:text-green-400" onClick={toggleMenu}>
            FaithBooks
          </Link>
          <Link to="/contact" className="block hover:text-green-400" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
