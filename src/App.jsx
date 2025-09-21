import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FaithBooks from "./components/FaithBooks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Banner + DP + Intro */}
      <section
        id="hero"
        className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden pt-16"
      >
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 md:px-16 bg-gray-50 w-full max-w-full">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-16 bg-white w-full max-w-full">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50 w-full max-w-full">
        <Projects />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white w-full max-w-full">
        <Services />
      </section>

      {/* Faith Books Section */}
      <section id="faithbooks" className="py-20 px-6 md:px-16 bg-gray-50 w-full max-w-full">
        <FaithBooks />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-16 bg-white w-full max-w-full">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
