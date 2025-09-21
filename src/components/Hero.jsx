import React from "react";
import { motion } from "framer-motion";
import dp from "../assets/images/dp.jpg";
import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Banner Background */}
      <img
        src={banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        {/* DP */}
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-green-600 mb-6">
          <img src={dp} alt="Solomough" className="w-full h-full object-cover" />
        </div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Solomon Moughkaa Zahemen
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-white max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Faith, Technology & Creativity — Building digital solutions that inspire.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
