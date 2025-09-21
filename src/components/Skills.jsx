import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Lightbulb,
  Cross,
  Globe,
  Users,
  BookOpen,
  Brush,
  Camera,
} from "lucide-react";

const skills = [
  {
    category: "Tech Skills",
    items: [
      { name: "React.js", level: 90, icon: <Code2 className="w-6 h-6" /> },
      { name: "Full-Stack Development", level: 75, icon: <Database className="w-6 h-6" /> },
      { name: "Tailwind CSS", level: 85, icon: <Brush className="w-6 h-6" /> },
      { name: "AI & Web3", level: 65, icon: <Cpu className="w-6 h-6" /> },
      { name: "GitHub / Deployment", level: 80, icon: <Globe className="w-6 h-6" /> },
    ],
  },
  {
    category: "Creative Skills",
    items: [
      { name: "Photography", level: 95, icon: <Camera className="w-6 h-6" /> },
      { name: "Photo Editing", level: 88, icon: <Brush className="w-6 h-6" /> },
      { name: "Problem Solving", level: 95, icon: <Lightbulb className="w-6 h-6" /> },
    ],
  },
  {
    category: "Leadership & Ministry",
    items: [
      { name: "Faith + Tech Integration", level: 98, icon: <Cross className="w-6 h-6" /> },
      { name: "Mentorship & Teaching", level: 92, icon: <Users className="w-6 h-6" /> },
      { name: "Spiritual Writing", level: 90, icon: <BookOpen className="w-6 h-6" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-green-600">Skills & Expertise</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Blending <span className="font-semibold">technology</span>,{" "}
          <span className="font-semibold">creativity</span>, and{" "}
          <span className="font-semibold">faith-driven leadership</span> to build with excellence.
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex items-center mb-2 group">
                      <span className="text-green-600 group-hover:text-green-700 transition-colors">
                        {skill.icon}
                      </span>
                      <span className="ml-3 font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-green-600 h-3 rounded-full group-hover:bg-green-700 transition-colors"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.2 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{skill.level}%</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
