import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-400 hover:text-green-500"
        >
          Solomough
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
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
            Faith Books
          </Link>
          <Link to="/contact" className="hover:text-green-400">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-green-400"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <Link to="/" onClick={toggleMenu} className="block hover:text-green-400">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-green-400">
            About
          </Link>
          <Link to="/skills" onClick={toggleMenu} className="block hover:text-green-400">
            Skills
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="block hover:text-green-400">
            Projects
          </Link>
          <Link to="/services" onClick={toggleMenu} className="block hover:text-green-400">
            Services
          </Link>
          <Link to="/faithbooks" onClick={toggleMenu} className="block hover:text-green-400">
            Faith Books
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-green-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
