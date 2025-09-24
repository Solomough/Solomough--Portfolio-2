import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import dp from "../assets/images/dp.jpg";
import banner from "../assets/images/banner.jpg";

function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={dp}
          alt="Solomough"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-green-500 object-cover shadow-2xl"
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Solomon Moughkaa Zahemen
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="font-semibold text-green-400">Visionary Engineer</span> &amp;{" "}
          <span className="font-semibold text-green-400">Faith + Technology Strategist</span> — 
          crafting solutions that inspire, empower, and transform lives globally.
        </motion.p>

        <motion.blockquote
          className="italic text-base md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          “Your vision deserves more than just code — it deserves purpose, innovation, and global impact.”
        </motion.blockquote>

        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-green-600 hover:bg-green-500 transition text-white font-semibold rounded-full shadow-lg"
          >
            Explore My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition font-semibold rounded-full shadow-lg"
          >
            Let’s Collaborate
          </Link>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 z-20 text-white flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ChevronDown className="w-8 h-8 animate-bounce text-green-500" />
        <span className="text-sm mt-1">Scroll Down</span>
      </motion.a>
    </section>
  );
}

export default Home;
