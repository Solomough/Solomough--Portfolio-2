import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
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
