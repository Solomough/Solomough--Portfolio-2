import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Books & Writings", path: "/booksandwritings" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide text-green-400 hover:text-green-500 transition-colors"
        >
          Solomough<span className="text-white">.</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-green-400 transition-colors ${
                  isActive ? "text-green-400 border-b-2 border-green-400" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-green-400 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block hover:text-green-400 transition-colors ${
                  isActive ? "text-green-400 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
