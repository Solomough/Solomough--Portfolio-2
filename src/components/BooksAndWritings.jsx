import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Code } from "lucide-react";

function BooksAndWritings() {
  const spiritualBooks = [
    {
      title: "From Visions to Call",
      desc: "A faith-filled journey of divine encounters, wisdom, and purpose — inspiring believers to embrace their unique call.",
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Solomough Affirmations",
      desc: "Golden words of wisdom and affirmation to keep you focused, consistent, and kingdom-purposed daily.",
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "End of Age",
      desc: "Exploring prophetic insights and spiritual preparedness for the changing times.",
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Beginning of Age",
      desc: "Foundational principles for starting a life of impact, faith, and innovation.",
      status: "Coming Soon",
      link: "#",
    },
  ];

  const devBooks = [
    {
      title: "Developer Series Vol. 1",
      desc: "Practical, faith-inspired guides for young and upcoming developers — wisdom and code hand in hand.",
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Faith-Inspired Coding",
      desc: "A blend of technical lessons and spiritual insights to empower developers with purpose-driven coding.",
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "AI & Kingdom Innovation",
      desc: "Exploring how Artificial Intelligence can be aligned with divine creativity for transformational solutions.",
      status: "Coming Soon",
      link: "#",
    },
  ];

  return (
    <section id="books" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Faith & <span className="text-green-600">Books</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Inspiring and equipping a generation — through technology and the written word. 
          These books carry my heart, vision, and testimonies of faith.
        </motion.p>

        {/* Spiritual Series */}
        <motion.h3
          className="mt-12 text-2xl font-bold text-gray-800 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📖 Spiritual Series
        </motion.h3>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {spiritualBooks.map((book, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  {book.title}
                </h4>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">{book.desc}</p>
              </div>

              {book.status && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold text-gray-900 px-2 py-1 rounded-md shadow">
                  {book.status}
                </span>
              )}

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

        {/* Developer Series */}
        <motion.h3
          className="mt-16 text-2xl font-bold text-gray-800 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          💻 Developer Series
        </motion.h3>
        <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devBooks.map((book, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600" />
                  {book.title}
                </h4>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">{book.desc}</p>
              </div>

              {book.status && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold text-gray-900 px-2 py-1 rounded-md shadow">
                  {book.status}
                </span>
              )}

              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-green-600 font-semibold hover:underline text-sm sm:text-base"
              >
                Learn More <Code className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section */}
        <motion.div
          className="mt-16 bg-green-600 text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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

export default BooksAndWritings;
