import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: "Expert" },
  { name: "TailwindCSS", level: "Advanced" },
  { name: "JavaScript", level: "Expert" },
  { name: "AI & Machine Learning", level: "Intermediate" },
  { name: "Web3 Development", level: "Beginner" },
  { name: "Full-Stack Development", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100" id="skills">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-gray-500 mt-2">{skill.level}</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width:
                      skill.level === "Beginner"
                        ? "40%"
                        : skill.level === "Intermediate"
                        ? "70%"
                        : skill.level === "Advanced"
                        ? "85%"
                        : "100%",
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
