import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Faith Books", href: "#faithbooks" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">Solomough</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-900 font-semibold">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-lg flex flex-col space-y-4 px-6 py-4">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="block text-gray-900 font-semibold py-2 hover:text-green-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
