import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Globe, Code } from "lucide-react";
import dp from "./assets/images/dp.jpg";
import banner from "./assets/images/banner.jpg";

const aboutData = [
  {
    title: "Who I Am",
    highlight: "Blessing, Solution Provider, Visionary",
    description:
      "I am a blessing to my world, a solution provider, and a kingdom-purpose vessel. My life is marked by consistency, honesty, and the wisdom of God at work in me.",
    color: "from-indigo-500 to-purple-500",
    link: "#skills",
  },
  {
    title: "Vision & Purpose",
    highlight: "Life of Glory & Influence",
    description:
      "God has called me to a life of glory, virtue, and influence. My mission is to illuminate paths to success and spiritual growth through faith and wisdom.",
    color: "from-green-500 to-emerald-500",
    link: "#projects",
  },
  {
    title: "Faith & Ministry",
    highlight: "Out of Darkness to Light",
    description:
      "Through The Ark – Christ Riches in Glory, I’m building platforms to guide and empower people globally. My slogan is 'Out of Darkness to Light'.",
    color: "from-yellow-400 to-orange-500",
    link: "#contact",
  },
  {
    title: "Tech Journey",
    highlight: "AI, Full-Stack & Web3",
    description:
      "I’m a fast-rising developer building impactful projects like The Ark Academy and SEEPAF. I don’t just build; I solve problems and inspire hope.",
    color: "from-blue-500 to-cyan-500",
    link: "#skills",
  },
  {
    title: "Global Mission",
    highlight: "Faith + Tech = Impact",
    description:
      "My life proves that faith + tech = unstoppable impact. I’m raising a global movement of youth who walk in purpose and build solutions that influence nations.",
    color: "from-pink-500 to-red-500",
    link: "#projects",
  },
];

const timeline = [
  {
    year: "Early Vision",
    image: dp,
    text: "From my earliest years, I carried a vision larger than myself. Photography became my way of capturing the unseen beauty around me, while my journey in faith grounded me with purpose and resilience.",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
  },
  {
    year: "The Ark of Creativity",
    image: banner,
    text: "As a photographer and creative, I learned to tell stories through light, color, and perspective. This became more than just pictures — it became a way to share hope, vision, and excellence.",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
  },
  {
    year: "Faith + Technology",
    image: dp,
    text: "I bridge faith and technology, creating digital solutions that don’t just work but inspire. My mission is to blend spiritual depth with modern innovation — building projects that carry meaning.",
    icon: <Code className="w-6 h-6 text-blue-600" />,
  },
  {
    year: "Today & Beyond",
    image: banner,
    text: "This portfolio is not just a showcase. It is a call to excellence, a hub of creativity, and an open door for collaboration. I am Solomon Moughkaa Zahemen — visionary, writer, developer, and creative leader.",
    icon: <Globe className="w-6 h-6 text-indigo-600" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Interactive Cards with Links */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {aboutData.map((item, index) => (
          <motion.a
            href={item.link}
            key={index}
            className={`block p-6 rounded-2xl shadow-lg bg-gradient-to-r ${item.color} text-white cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-lg font-semibold mb-2">{item.highlight}</p>
            <p className="leading-relaxed">{item.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Visual Timeline with Images */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg relative">
              <img
                src={item.image}
                alt={item.year}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-3 -left-3 bg-white rounded-full p-2 shadow">
                {item.icon}
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                {item.year}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <blockquote className="text-xl italic font-semibold text-gray-700">
          “As He is, so are we in this world.” – 1 John 4:17
        </blockquote>
        <p className="mt-4 text-lg font-bold text-indigo-700">
          Out of Darkness to Light 🌍✨
        </p>
      </motion.div>
    </section>
  );
    }
