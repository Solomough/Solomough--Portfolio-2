import React from "react";
import { motion } from "framer-motion";
import dp from "../assets/images/dp.jpg";
import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Picture */}
        <img
          src={dp}
          alt="Solomough"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-green-600 object-cover shadow-lg"
        />

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Solomon Moughkaa Zahemen
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-gray-200 max-w-xl">
          Bridging <span className="font-semibold">Faith + Technology</span>{" "}
          to inspire innovation and impact globally.
        </p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#projects"
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Explore Projects
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
