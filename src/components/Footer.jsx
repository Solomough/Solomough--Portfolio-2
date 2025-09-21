import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Eye } from "lucide-react";

function Footer() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/solomough.github.io/solomough-portfolio/")
      .then((res) => res.json())
      .then((data) => setVisitors(data.value));
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand + Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Solomough</h3>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} Solomough. All rights reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-5">
          <a href="https://github.com/Solomough" target="_blank" rel="noreferrer" className="hover:text-green-500"><Github className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/solomon-moughkaa-zahemen/" target="_blank" rel="noreferrer" className="hover:text-green-500"><Linkedin className="w-6 h-6" /></a>
          <a href="https://x.com/moughkaa46415?s=09" target="_blank" rel="noreferrer" className="hover:text-green-500"><Twitter className="w-6 h-6" /></a>
          <a href="https://www.facebook.com/share/1CHDBS3HAA/" target="_blank" rel="noreferrer" className="hover:text-green-500"><Facebook className="w-6 h-6" /></a>
          <a href="https://www.instagram.com/solomough3" target="_blank" rel="noreferrer" className="hover:text-green-500"><Instagram className="w-6 h-6" /></a>
          <a href="https://www.youtube.com/@solomough" target="_blank" rel="noreferrer" className="hover:text-green-500"><Youtube className="w-6 h-6" /></a>
        </div>

        {/* Visitor Counter */}
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Eye className="w-5 h-5 text-green-500" />
          <span>Visitors: {visitors}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
