import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import BooksAndWritings from "./components/BooksAndWritings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 scroll-smooth overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 min-h-screen flex flex-col">
        {/* Navbar stays fixed */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow pt-20 px-6 md:px-16">
          <Routes>
            {/* Home Page (Hero + Inspiring Quote) */}
            <Route
              path="/"
              element={
                <section className="w-full h-screen flex flex-col items-center justify-center text-center">
                  <Hero />
                  <p className="mt-6 text-lg md:text-xl text-gray-200 italic max-w-2xl">
                    “We merge <span className="font-semibold text-green-400">Faith</span> 
                    and <span className="font-semibold text-green-400">Technology</span> 
                    to help you inspire, innovate, and impact the world.”
                  </p>
                </section>
              }
            />

            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booksandwritings" element={<BooksAndWritings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
