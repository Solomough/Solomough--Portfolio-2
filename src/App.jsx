import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div className="font-sans text-gray-900 scroll-smooth overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 min-h-screen flex flex-col">
        {/* Navbar (visible everywhere) */}
        <Navbar />

        {/* Page Routes */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <section
                  id="hero"
                  className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden pt-16"
                >
                  <Hero />
                </section>
              }
            />
            <Route
              path="/about"
              element={
                <section className="py-20 px-6 md:px-16 w-full max-w-full rounded-2xl shadow-lg bg-white bg-opacity-70 backdrop-blur-md mx-auto mt-10">
                  <About />
                </section>
              }
            />
            <Route
              path="/skills"
              element={
                <section className="py-20 px-6 md:px-16 w-full max-w-full rounded-2xl shadow-lg bg-white bg-opacity-70 backdrop-blur-md mx-auto mt-10">
                  <Skills />
                </section>
              }
            />
            <Route
              path="/projects"
              element={
                <section className="py-20 px-6 md:px-16 w-full max-w-full rounded-2xl shadow-lg bg-white bg-opacity-70 backdrop-blur-md mx-auto mt-10">
                  <Projects />
                </section>
              }
            />
            <Route
              path="/services"
              element={
                <section className="py-20 px-6 md:px-16 w-full max-w-full rounded-2xl shadow-lg bg-white bg-opacity-70 backdrop-blur-md mx-auto mt-10">
                  <Services />
                </section>
              }
            />
            <Route
              path="/faithbooks"
              element={
                <section className="py-20 px-6 md:px-16 w-full max-w-full rounded-2xl shadow-lg bg-white bg-opacity-70 backdrop-blur-md mx-auto mt-10">
                  <FaithBooks />
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section className="py-20 px-6 md:px-16 w-full max-w-full rounded-2xl shadow-lg bg-white bg-opacity-70 backdrop-blur-md mx-auto mt-10">
                  <Contact />
                </section>
              }
            />
          </Routes>
        </div>

        {/* Footer (visible everywhere) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
