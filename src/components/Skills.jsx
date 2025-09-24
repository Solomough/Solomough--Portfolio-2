import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/images/banner.jpg";

function Skills() {
  const skills = [
    {
      title: "Full Stack Development",
      desc: "Building modern, scalable applications using the MERN stack and the latest technologies.",
      tools: ["React", "Node.js", "Express", "MongoDB", "Next.js", "TailwindCSS"],
    },
    {
      title: "Web3 & Blockchain",
      desc: "Exploring decentralized applications, smart contracts, and the future of the internet.",
      tools: ["Solidity", "Ethereum", "Hardhat", "Metamask", "IPFS"],
    },
    {
      title: "AI & Automation",
      desc: "Leveraging artificial intelligence to create smarter, more adaptive solutions.",
      tools: ["Python", "TensorFlow", "LangChain", "OpenAI APIs"],
    },
    {
      title: "Photography & Visual Storytelling",
      desc: "Transforming ideas into powerful visuals through photography and editing, enhancing creativity in design and development.",
      tools: ["DSLR Shooting", "Lightroom", "Photoshop", "Canva", "Creative Direction"],
    },
    {
      title: "Faith + Innovation",
      desc: "A unique mindset that blends faith with technology — proving that vision, speed, and excellence can break limits.",
      tools: ["Resilience", "Speed-learning", "Creativity", "Christ-centered mindset"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-green-400 mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills & Vision
        </motion.h1>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-black bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-left text-gray-200 hover:shadow-green-500/20 transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
            >
              <h2 className="text-2xl font-bold text-green-300 mb-4">{skill.title}</h2>
              <p className="mb-4 text-gray-300">{skill.desc}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-green-600 bg-opacity-30 text-green-200 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          className="mt-12 text-lg md:text-xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          “I am not just learning — I am building while learning. With Christ, 
          I break time codes to grow with exceptional speed, bringing solutions 
          that inspire and transform.”
        </motion.p>
      </div>
    </section>
  );
}

export default Skills;
