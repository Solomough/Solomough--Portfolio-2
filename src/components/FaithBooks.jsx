import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

function FaithBooks() {
  const books = [
    {
      title: "From Visions to Call",
      desc: "A faith-filled journey inspiring believers to embrace their unique call.",
      link: "#",
    },
    {
      title: "Solomough Affirmations",
      desc: "Daily affirmations to keep focused, consistent, and kingdom-purposed.",
      link: "#",
    },
    {
      title: "End of Age",
      desc: "Insights into faith and preparation for the spiritual journey ahead.",
      link: "#",
    },
    {
      title: "Beginning of Age",
      desc: "Exploring the dawn of faith-filled transformation in the modern era.",
      link: "#",
    },
  ];

  return (
    <section id="faithbooks" className="py-20 px-6 md:px-16 bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Faith & <span className="text-green-600">Books</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {books.map((book, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <BookOpen className="w-10 h-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900">{book.title}</h3>
            <p className="mt-2 text-gray-700">{book.desc}</p>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center font-semibold text-green-600 hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 bg-green-600 text-white p-6 rounded-2xl shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Sparkles className="w-10 h-10 mx-auto mb-2" />
        <h3 className="text-2xl font-bold">Out of Darkness to Light</h3>
        <p className="mt-2 text-lg">
          A movement of hope, purpose, and influence — bridging{" "}
          <span className="font-semibold">faith & technology</span> globally.
        </p>
      </motion.div>
    </section>
  );
}

export default FaithBooks;
