import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Books", href: "#faithbooks" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md h-12" : "bg-white h-16"
      } backdrop-blur-sm`}
    >
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center transition-all duration-300 ${
          scrolled ? "px-4 md:px-8" : "px-6 md:px-16"
        } h-full`}
      >
        {/* Brand */}
        <div
          className={`text-green-600 font-bold transition-all duration-300 ${
            scrolled ? "text-lg" : "text-2xl"
          }`}
        >
          Solomough
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 text-gray-900 transition-all duration-300 ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium hover:text-green-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className={`md:hidden transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}`}>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-900 font-medium hover:text-green-600 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
