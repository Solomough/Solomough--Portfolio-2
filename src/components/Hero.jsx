import React from "react";
import { motion } from "framer-motion";
import dp from "../assets/images/dp.jpg";
import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay with gradient blending to rest of site */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-blue-950/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <img
          src={dp}
          alt="Solomough"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full border-4 border-green-600 object-cover shadow-lg"
        />

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
          Solomon Moughkaa Zahemen
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-lg md:text-2xl text-gray-200 max-w-xs sm:max-w-md md:max-w-xl">
          Bridging <span className="font-semibold">Faith + Technology</span>{" "}
          to inspire innovation and impact globally.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
