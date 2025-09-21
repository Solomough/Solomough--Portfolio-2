import React from "react";
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
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section with Banner + DP + Intro */}
      <Hero />

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 md:px-16 bg-gray-50">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-16 bg-white">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50">
        <Projects />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white">
        <Services />
      </section>

      {/* Faith Books Section */}
      <section id="faithbooks" className="py-20 px-6 md:px-16 bg-gray-50">
        <FaithBooks />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-16 bg-white">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
