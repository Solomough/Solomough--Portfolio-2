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
import dp from "./assets/images/dp.jpg";
import banner from "./assets/images/banner.jpg";

function App() {
  const sectionBg = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

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

      {/* About Me Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-16 w-full max-w-full flex items-center justify-center bg-gray-50"
        style={sectionBg(dp)}
      >
        <About />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 md:px-16 w-full max-w-full flex items-center justify-center"
        style={sectionBg(banner)}
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 md:px-16 w-full max-w-full flex items-center justify-center"
        style={sectionBg(banner)}
      >
        <Projects />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-16 w-full max-w-full flex items-center justify-center"
        style={sectionBg(banner)}
      >
        <Services />
      </section>

      {/* Faith Books Section */}
      <section
        id="faithbooks"
        className="py-20 px-6 md:px-16 w-full max-w-full flex items-center justify-center"
        style={sectionBg(banner)}
      >
        <FaithBooks />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 w-full max-w-full flex items-center justify-center"
        style={sectionBg(banner)}
      >
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
