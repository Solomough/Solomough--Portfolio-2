import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ HashRouter for GitHub Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import BooksAndWritings from "./components/BooksAndWritings";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 scroll-smooth overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 min-h-screen flex flex-col">
        {/* Navbar stays fixed */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow pt-20 px-6 md:px-16">
          <Routes>
            {/* Home page */}
            <Route path="#/" element={<Home />} />

            {/* Other pages */}
            <Route path="#/about" element={<About />} />
            <Route path="#/skills" element={<Skills />} />
            <Route path="#/projects" element={<Projects />} />
            <Route path="#/services" element={<Services />} />
            <Route path="#/booksandwritings" element={<BooksAndWritings />} />
            <Route path="#/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
