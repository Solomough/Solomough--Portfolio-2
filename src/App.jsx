import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FaithBooks from "./components/FaithBooks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-gray-50">
        <Skills />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <Projects />
      </section>

      {/* FAITH & BOOKS SECTION */}
      <section id="faith">
        <FaithBooks />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-50">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
