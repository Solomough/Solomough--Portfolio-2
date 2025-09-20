import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-green-600">Touch</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Whether it’s tech, ministry, or collaboration — let’s connect.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <p><span className="font-semibold">Email:</span> zahemenmoughkaa@gmail.com</p>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-green-600 mr-3" />
              <p><span className="font-semibold">Phone:</span> +2347076560169</p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-green-600 mr-3" />
              <p><span className="font-semibold">Location:</span> Nigeria (Open to global collaborations)</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xovngnol" // 👉 Replace with your Formspree form link
            method="POST"
            className="bg-gray-50 rounded-2xl shadow-md p-8 space-y-6"
          >
            <div>
              <label className="block font-semibold text-gray-900">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-900">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-900">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center"
            >
              Send Message <Send className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
