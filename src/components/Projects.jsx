import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "The Ark Academy",
      desc: "A modern digital learning and student management platform empowering education and mentorship globally.",
      link: "#", // 🔑 Replace with real demo link
      repo: "https://github.com/Solomough/The-Ark-Academy",
      image: "https://source.unsplash.com/600x400/?education,technology",
    },
    {
      title: "SEEPAF",
      desc: "A Web3-powered partnership and donations platform for empowerment, aid, and kingdom impact.",
      link: "#", // 🔑 Replace with real demo link
      repo: "https://github.com/Solomough/SEEPAF",
      image: "https://source.unsplash.com/600x400/?blockchain,finance",
    },
    {
      title: "Faith + Tech Tools",
      desc: "AI-powered teaching and creative tools merging divine wisdom with modern innovation.",
      link: "#", // 🔑 Replace with real demo link
      repo: "https://github.com/Solomough/solomough-portfolio",
      image: "https://source.unsplash.com/600x400/?ai,innovation",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-900"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="text-green-600">Projects</span>
        </motion.h2>

        {/* Project Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative bg-gray-50 rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                />
                {/* Overlay with GitHub + Demo */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-700">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
