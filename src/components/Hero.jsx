import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-green-50 to-white">
      
      {/* Profile Picture Placeholder */}
      <motion.img
        src="/profile.jpg" 
        alt="Solomough"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover border-4 border-green-600 mb-6 md:mb-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Intro Text */}
      <div className="text-center md:text-left md:ml-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-green-600">Solomough</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Bridging <span className="font-semibold">Faith</span> &{" "}
          <span className="font-semibold">Technology</span> with excellence.
        </motion.p>

        {/* Motion Text */}
        <motion.div
          className="mt-6 text-green-600 font-semibold text-lg md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        >
          Developer • Writer • Visionary
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
