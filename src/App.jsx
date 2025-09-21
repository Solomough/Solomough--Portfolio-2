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
    <div className="font-sans text-gray-900 scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Banner + DP + Intro */}
      <section
        id="hero"
        className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden pt-16 bg-gradient-to-br from-sky-300 via-sky-400 to-sky-500"
      >
        <Hero />
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-16 w-full max-w-full bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400"
      >
        <About />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 md:px-16 w-full max-w-full bg-gradient-to-r from-cyan-200 via-sky-300 to-sky-400"
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 md:px-16 w-full max-w-full bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300"
      >
        <Projects />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-16 w-full max-w-full bg-gradient-to-r from-cyan-100 via-sky-200 to-sky-300"
      >
        <Services />
      </section>

      {/* Faith Books Section */}
      <section
        id="faithbooks"
        className="py-20 px-6 md:px-16 w-full max-w-full bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400"
      >
        <FaithBooks />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 w-full max-w-full bg-gradient-to-r from-cyan-200 via-sky-300 to-sky-400"
      >
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
