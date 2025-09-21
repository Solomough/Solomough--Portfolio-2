import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle,
  XCircle,
  Loader2,
  Copy,
  Eye,
} from "lucide-react";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copySuccess, setCopySuccess] = useState(false);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/solomough-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setVisitors(data.value))
      .catch((err) => console.error("CountAPI error:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xovngnol", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zahemenmoughkaa@gmail.com");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-600 mr-3" />
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  zahemenmoughkaa@gmail.com
                </p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="ml-3 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center text-sm text-gray-700 transition"
              >
                <Copy className="w-4 h-4 mr-1" />
                {copySuccess ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-green-600 mr-3" />
              <p>
                <span className="font-semibold">Phone:</span> +234 707 656 0169
              </p>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-green-600 mr-3" />
              <p>
                <span className="font-semibold">Location:</span> Dutse, Jigawa,
                Nigeria (Open to global collaborations)
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2347076560169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>

            {/* Google Map Embed */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-200 h-64 md:h-96 lg:h-[500px]">
              <iframe
                title="Google Map - Dutse, Jigawa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.913035661476!2d9.339064314803495!3d11.75972779166712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11a21f4d9c0f0f7b%3A0x43c2d08af0cbbccb!2sDutse%2C%20Jigawa!5e0!3m2!1sen!2sng!4v1726901111111!5m2!1sen!2sng"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-center mt-2">
                <a
                  href="https://goo.gl/maps/r3mL8X93YY3c3MvL9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </div>

            {/* Visitor Counter */}
            <div className="flex items-center mt-4 text-gray-500 space-x-2 text-sm">
              <Eye className="w-5 h-5 text-green-500" />
              <span>Visitors: {visitors.toLocaleString()}</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
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
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 flex items-center text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Message sent successfully! I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center text-red-600 font-semibold">
                <XCircle className="w-5 h-5 mr-2" />
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
