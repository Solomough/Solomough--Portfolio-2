import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "The Ark Academy",
      desc: "Modern digital learning and student management platform empowering global education.",
      link: "#",
    },
    {
      title: "SEEPAF",
      desc: "Web3-powered partnership and donation platform for kingdom impact and empowerment.",
      link: "#",
    },
    {
      title: "Faith + Tech Tools",
      desc: "AI-powered teaching & creative tools merging divine wisdom with modern innovation.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Featured <span className="text-green-600">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center font-semibold text-green-600 hover:underline"
            >
              View Project <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
