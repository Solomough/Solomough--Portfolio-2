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
import banner from "./assets/images/banner.jpg";
import dp from "./assets/images/dp.jpg";

function App() {
  const sectionBg = `relative bg-[url(${banner})] bg-center bg-no-repeat bg-cover`;

  return (
    <div className="font-sans text-gray-900 scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden pt-16"
      >
        <Hero />
      </section>

      {/* About Me Section with DP as background */}
      <section
        id="about"
        className="relative w-full bg-[url('./assets/images/dp.jpg')] bg-center bg-no-repeat bg-cover py-20 px-6 md:px-16"
      >
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-16">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${sectionBg} py-20 px-6 md:px-16`}>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-16">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${sectionBg} py-20 px-6 md:px-16`}>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-16">
          <Projects />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`${sectionBg} py-20 px-6 md:px-16`}>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-16">
          <Services />
        </div>
      </section>

      {/* Faith Books Section */}
      <section id="faithbooks" className={`${sectionBg} py-20 px-6 md:px-16`}>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-16">
          <FaithBooks />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${sectionBg} py-20 px-6 md:px-16`}>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-16">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
