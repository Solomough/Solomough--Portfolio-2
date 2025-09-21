import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
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

        <div className="mt-12 grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <p>
                <span className="font-semibold">Email:</span>{" "}
                zahemenmoughkaa@gmail.com
              </p>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-green-600 mr-3" />
              <p>
                <span className="font-semibold">Phone:</span> +2347076560169
              </p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-green-600 mr-3" />
              <p>
                <span className="font-semibold">Location:</span> Dutse, Jigawa
                State, Nigeria (Open to global collaborations)
              </p>
            </div>
            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0436424309033!2d9.3389!3d11.7597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b37a207b3a4e2d%3A0x9df9d2a0d29d0af9!2sDutse%2C%20Jigawa%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1694953937169!5m2!1sen!2sng"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dutse Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              action="https://formspree.io/f/xovngnol" // ✅ Your Formspree endpoint
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
                <label className="block font-semibold text-gray-900">
                  Message
                </label>
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
      </div>
    </section>
  );
}

export default Contact;
