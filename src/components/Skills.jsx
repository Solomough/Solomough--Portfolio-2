import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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

function SkillCircle({ skill }) {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ strokeDashoffset: circumference - (skill.level / 100) * circumference });
  }, [controls, circumference, skill.level]);

  return (
    <motion.div
      className="flex flex-col items-center space-y-2 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="relative w-24 h-24">
        <svg height={radius * 2} width={radius * 2}>
          <defs>
            <linearGradient id={`gradient-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <motion.circle
            stroke={`url(#gradient-${skill.name})`}
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            animate={controls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900">
          {skill.level}%
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <span className="text-green-600">{skill.icon}</span>
        <span className="font-semibold text-gray-800">{skill.name}</span>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-green-600">Skills & Expertise</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Blending <span className="font-semibold">technology</span>,{" "}
          <span className="font-semibold">creativity</span>, and{" "}
          <span className="font-semibold">faith-driven leadership</span> to build with excellence.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-12 justify-items-center">
          {skills.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{group.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {group.items.map((skill, i) => (
                  <SkillCircle key={i} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
