import React from "react";
import { motion } from "framer-motion";
import dp from "../assets/images/dp.jpg";
import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 bg-gradient-to-br from-green-50 to-white">
      
      {/* Banner */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-xl shadow-md relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to My Portfolio
          </h1>
        </div>
      </div>

      {/* DP (profile image) */}
      <div className="mt-[-4rem]">
        <img
          src={dp}
          alt="Solomough DP"
          className="w-40 h-40 rounded-full mx-auto border-4 border-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center mt-6">
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
