import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FaithBooks from "./components/FaithBooks";
import Contact from "./components/Contact";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="font-sans text-gray-900 scroll-smooth overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/faithbooks" element={<PageWrapper><FaithBooks /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
