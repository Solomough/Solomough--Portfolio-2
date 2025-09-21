import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

function FaithBooks() {
  const books = [
    {
      title: "From Visions to Call",
      desc: "A faith-filled journey of divine encounters, wisdom, and purpose — inspiring believers to embrace their unique call.",
      link: "#", // 🔑 Replace with Amazon/KDP or download link later
      cover: "https://source.unsplash.com/400x500/?book,light", // 🔑 Replace with your real book cover
    },
    {
      title: "Solomough Affirmations",
      desc: "Golden words of wisdom and affirmation to keep you focused, consistent, and kingdom-purposed daily.",
      link: "#", // 🔑 Replace with real link later
      cover: "https://source.unsplash.com/400x500/?faith,hope", // 🔑 Replace with your real book cover
    },
    {
      title: "End of Age",
      desc: "Exploring the spiritual revelations and insights for the modern believer in a world of change.",
      link: "#",
      cover: "https://source.unsplash.com/400x500/?spirituality,book",
    },
    {
      title: "Beginning of Age",
      desc: "A visionary guide for those stepping into purpose, empowerment, and kingdom-minded innovation.",
      link: "#",
      cover: "https://source.unsplash.com/400x500/?inspiration,book",
    },
  ];

  return (
    <section id="faithbooks" className="py-20 bg-gray-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Faith & <span className="text-green-600">Books</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          My mission is to inspire and equip a generation — not just through
          technology, but through the written word. These books carry my heart,
          vision, and testimonies of faith.
        </motion.p>

        {/* Books Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900">{book.title}</h3>
                <p className="mt-2 text-gray-700">{book.desc}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 mt-4 font-semibold hover:underline"
                >
                  Read More <BookOpen className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faith Highlight */}
        <motion.div
          className="mt-16 bg-green-600 text-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Sparkles className="w-10 h-10 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Out of Darkness to Light</h3>
          <p className="mt-2 text-lg">
            A movement of hope, purpose, and influence — bridging{" "}
            <span className="font-semibold">faith & technology</span> for global
            impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FaithBooks;
