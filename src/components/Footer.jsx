import React from "react";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Eye } from "lucide-react";

function Footer() {
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
          <a href="https://github.com/Solomough" target="Solomough" rel="noreferrer" className="hover:text-green-500">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/solomon-moughkaa-zahemen-a5476a377?utm_source=share&utm_campaign=share_via&utm_content=profile&ut" target="Solomon Moughkaa Zahemen" rel="noreferrer" className="hover:text-green-500">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/moughkaa46415?s=09" target="Solomough" rel="noreferrer" className="hover:text-green-500">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/share/1CHDBS3HAA/" target="Solomough" rel="noreferrer" className="hover:text-green-500">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay" target="Solomough3" rel="noreferrer" className="hover:text-green-500">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@solomough" target="Solomough" rel="noreferrer" className="hover:text-green-500">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Visitor Counter */}
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Eye className="w-5 h-5 text-green-500" />
          <span id="visitor-count">Visitors: 1,234</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
