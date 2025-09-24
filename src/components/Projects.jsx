import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import banner from "../assets/images/banner.jpg";

function Projects() {
  const projects = [
    {
      title: "The Ark Academy",
      desc: "Modern digital learning and student management platform empowering global education.",
      link: "#",
      comingSoon: true,
    },
    {
      title: "SEEPAF",
      desc: "Web3-powered partnership and donation platform for kingdom impact and empowerment.",
      link: "#",
      comingSoon: true,
    },
    {
      title: "Faith + Tech Tools",
      desc: "AI-powered teaching & creative tools merging divine wisdom with modern innovation.",
      link: "#",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="projects"
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
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          These are not just projects — they are{" "}
          <span className="font-semibold text-green-400">visions in motion</span>, 
          blending <span className="text-blue-400">technology</span> with{" "}
          <span className="text-green-400">faith-driven creativity</span> to
          empower, educate, and transform lives globally.
        </motion.p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Coming Soon Badge */}
              {project.comingSoon && (
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                  Coming Soon
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center font-semibold text-green-600 hover:text-green-500"
              >
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
