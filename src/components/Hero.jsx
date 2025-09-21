import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-green-50 to-white">
      
      {/* Profile Picture Placeholder */}
      <img src="./assets/images/dp.jpg" alt="Solomough DP" className="w-32 h-32 rounded-full mx-auto border-4 border-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:scale-105 transition-transform duration-500" />

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
