import React from "react";
import { motion } from "framer-motion";
import dp from "./assets/images/dp.jpg";
import banner from "./assets/images/banner.jpg";

function About() {
  const timeline = [
    {
      year: "Early Vision",
      image: dp,
      text: "From my earliest years, I carried a vision larger than myself. Photography became my way of capturing the unseen beauty around me, while my journey in faith grounded me with purpose and resilience."
    },
    {
      year: "The Ark of Creativity",
      image: banner,
      text: "As a photographer and creative, I learned to tell stories through light, color, and perspective. This became more than just pictures — it became a way to share hope, vision, and excellence."
    },
    {
      year: "Faith + Technology",
      image: dp,
      text: "I bridge faith and technology, creating digital solutions that don’t just work but inspire. My mission is to blend spiritual depth with modern innovation — building projects that carry meaning."
    },
    {
      year: "Today & Beyond",
      image: banner,
      text: "This portfolio is not just a showcase. It is a call to excellence, a hub of creativity, and an open door for collaboration. I am Solomon Moughkaa Zahemen — visionary, writer, developer, and creative leader."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Story
      </motion.h2>

      <div className="space-y-16 max-w-5xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.year}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">{item.year}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
