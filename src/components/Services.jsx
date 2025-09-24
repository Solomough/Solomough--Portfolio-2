import React from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Network, Sparkles } from "lucide-react";
import banner from "../assets/images/banner.jpg";

function Services() {
  const services = [
    {
      icon: <Cpu className="w-10 h-10 text-green-400" />,
      title: "AI & Creative Tools",
      desc: "Designing intelligent teaching and creative tools powered by AI — sparking innovation, inspiration, and smarter learning experiences.",
    },
    {
      icon: <Database className="w-10 h-10 text-green-400" />,
      title: "Full-Stack Development",
      desc: "Crafting scalable platforms like The Ark Academy & ministry solutions with strong databases, dashboards, and seamless user engagement.",
    },
    {
      icon: <Network className="w-10 h-10 text-green-400" />,
      title: "Web3 & Blockchain",
      desc: "Building privacy-driven, decentralized solutions and donation platforms (SEEPAF) to empower global partnerships with trust and security.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-green-400" />,
      title: "Faith + Tech",
      desc: "Blending divine wisdom with technology to create digital strategies that drive global impact, purpose, and spiritual empowerment.",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills & Services
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Every service I provide is{" "}
          <span className="font-semibold text-green-400">purpose-driven</span>, 
          merging <span className="text-blue-400">innovation</span> with{" "}
          <span className="text-green-400">divine wisdom</span> to empower, 
          inspire, and transform lives globally.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="relative bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 font-bold text-xl text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.a
          href="#contact"
          className="inline-block mt-12 px-10 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition transform hover:scale-105"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Work With Me
        </motion.a>
      </div>
    </section>
  );
}

export default Services;
