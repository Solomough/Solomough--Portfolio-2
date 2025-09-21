import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

function FaithBooks() {
  const books = [
    {
      title: "From Visions to Call",
      desc: "A faith-filled journey of divine encounters, wisdom, and purpose — inspiring believers to embrace their unique call.",
      link: "#",
    },
    {
      title: "Solomough Affirmations",
      desc: "Golden words of wisdom and affirmation to keep you focused, consistent, and kingdom-purposed daily.",
      link: "#",
    },
    {
      title: "End of Age",
      desc: "Exploring prophetic insights and spiritual preparedness for the changing times.",
      link: "#",
    },
    {
      title: "Beginning of Age",
      desc: "Foundational principles for starting a life of impact, faith, and innovation.",
      link: "#",
    },
  ];

  return (
    <section id="faithbooks" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Faith & <span className="text-green-600">Books</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Inspiring and equipping a generation — through technology and the written word. These books carry my heart, vision, and testimonies of faith.
        </motion.p>

        {/* Books Grid */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{book.title}</h3>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">{book.desc}</p>
              </div>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-green-600 font-semibold hover:underline text-sm sm:text-base"
              >
                Learn More <BookOpen className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section */}
        <motion.div
          className="mt-16 bg-green-600 text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Sparkles className="w-10 h-10 mb-2" />
          <h3 className="text-xl sm:text-2xl font-bold text-center">Out of Darkness to Light</h3>
          <p className="mt-2 text-sm sm:text-base text-center">
            A movement of hope, purpose, and influence — bridging <span className="font-semibold">faith & technology</span> for global impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FaithBooks;
