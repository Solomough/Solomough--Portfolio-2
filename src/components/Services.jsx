import React from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Network, Sparkles } from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Cpu className="w-10 h-10 text-green-600" />,
      title: "AI & Creative Tools",
      desc: "Building intelligent, teaching, and creative tools powered by Artificial Intelligence to inspire learning and innovation.",
    },
    {
      icon: <Database className="w-10 h-10 text-green-600" />,
      title: "Full-Stack Development",
      desc: "Designing scalable platforms like The Ark Academy & ministry tools with databases, dashboards, and user engagement.",
    },
    {
      icon: <Network className="w-10 h-10 text-green-600" />,
      title: "Web3 & Blockchain",
      desc: "Creating privacy-driven solutions and donation platforms (SEEPAF) using Web3 to empower global partnerships.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-green-600" />,
      title: "Faith + Tech",
      desc: "Merging divine wisdom with technology to build strategies for global impact and spiritual empowerment.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-green-600">Skills & Services</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Every project I build is not just tech — it’s{" "}
          <span className="font-semibold">purpose-driven</span>, blending
          innovation with divine wisdom to transform lives.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {service.icon}
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
          className="inline-block mt-12 px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition"
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
