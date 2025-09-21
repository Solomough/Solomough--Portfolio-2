import React from "react";
import { motion } from "framer-motion";
import Skills from "./components/Skills";
import { Lightbulb, Target, Globe } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          About <span className="text-green-600">Me</span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m a <span className="font-semibold">visionary</span>, a{" "}
          <span className="font-semibold">teacher</span>, and a{" "}
          <span className="font-semibold">solution provider</span>.  
          Guided by faith, I merge <span className="text-green-600">wisdom</span>  
          with <span className="text-green-600">technology</span> to influence, empower,  
          and inspire my generation.
        </motion.p>

        {/* 3 Value Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <Lightbulb className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="font-bold text-xl text-gray-900">Identity</h3>
            <p className="mt-2 text-gray-700">
              A blessing to my world, a focused, kingdom-purposed  
              vessel carrying the wisdom of God.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="font-bold text-xl text-gray-900">Purpose</h3>
            <p className="mt-2 text-gray-700">
              To illuminate paths to success & spiritual growth,  
              equipping young people and tech enthusiasts with hope.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-green-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="font-bold text-xl text-gray-900">Global Reach</h3>
            <p className="mt-2 text-gray-700">
              Aiming to build a worldwide community of  
              kingdom-driven developers & digital experts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
