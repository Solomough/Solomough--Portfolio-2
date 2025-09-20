import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "The Ark Academy",
      desc: "A modern digital learning and student management platform empowering education and mentorship globally.",
      link: "#", // 🔑 Replace with real link later
      image: "https://source.unsplash.com/600x400/?education,technology", // 🔑 Replace with screenshot of your project
    },
    {
      title: "SEEPAF",
      desc: "A Web3-powered partnership and donations platform for empowerment, aid, and kingdom impact.",
      link: "#", // 🔑 Replace with real link later
      image: "https://source.unsplash.com/600x400/?blockchain,finance", // 🔑 Replace with screenshot of your project
    },
    {
      title: "Faith + Tech Tools",
      desc: "AI-powered teaching and creative tools merging divine wisdom with modern innovation.",
      link: "#", // 🔑 Replace with real link later
      image: "https://source.unsplash.com/600x400/?ai,innovation", // 🔑 Replace with screenshot of your project
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-900"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="text-green-600">Projects</span>
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-700">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 mt-4 font-semibold hover:underline"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
