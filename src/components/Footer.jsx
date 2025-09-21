import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Eye, ArrowUp } from "lucide-react";

function Footer() {
  const [visitors, setVisitors] = useState("0");

  // Fetch visitor count from CountAPI
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/solomough-portfolio/main") // 👉 Replace if you have a custom namespace
      .then((res) => res.json())
      .then((data) => setVisitors(data.value))
      .catch((err) => console.log(err));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Brand + Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Solomough</h3>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} Solomough. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-2 inline-flex items-center text-green-500 hover:text-green-400 transition transform hover:scale-110"
          >
            <ArrowUp className="w-4 h-4 mr-1" /> Back to Top
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-5">
          <a href="https://github.com/Solomough" target="_blank" rel="noreferrer" className="hover:text-green-500 transition transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/solomon-moughkaa-zahemen-a5476a377" target="_blank" rel="noreferrer" className="hover:text-green-500 transition transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/moughkaa46415?s=09" target="_blank" rel="noreferrer" className="hover:text-green-500 transition transform hover:scale-110">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/share/1CHDBS3HAA/" target="_blank" rel="noreferrer" className="hover:text-green-500 transition transform hover:scale-110">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay" target="_blank" rel="noreferrer" className="hover:text-green-500 transition transform hover:scale-110">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@solomough" target="_blank" rel="noreferrer" className="hover:text-green-500 transition transform hover:scale-110">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Visitor Counter */}
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Eye className="w-5 h-5 text-green-500" />
          <span id="visitor-count">Visitors: {visitors}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
