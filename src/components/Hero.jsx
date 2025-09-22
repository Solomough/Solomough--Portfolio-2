import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dp from "../assets/images/dp.jpg";
import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-6"
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
          Bridging <span className="font-semibold text-green-400">Faith + Technology</span> to inspire innovation and impact globally.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link
            to="/about"
            className="px-6 py-3 text-lg font-semibold bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-300"
          >
            Explore More →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
