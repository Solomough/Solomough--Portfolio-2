import React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "React", level: "Advanced" },
  { name: "Full-Stack Development", level: "Intermediate" },
  { name: "AI & Web3", level: "Beginner-Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Problem Solving", level: "Exceptional" },
  { name: "Faith + Tech Integration", level: "Expert" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-brand mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          These skills reflect my tech excellence and my mission to blend faith with innovation.
          Interested collaborators can reach out to me directly.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-gray-500 mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="mailto: zahemenmoughkaa@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-brand text-white rounded-full shadow hover:bg-brand-dark transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default Skills;
