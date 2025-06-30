"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit() {
    // Let the browser submit the form, but clear fields after a short delay
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 100);
  }

  return (
    <section id="contact" className="max-w-xl mx-auto py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/30 via-accent-green/20 to-transparent" />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-3xl md:text-4xl font-bold text-accent-blue mb-10 text-center"
      >Contact</motion.h2>
      <motion.form
        action="https://formspree.io/f/xeokngae"
        method="POST"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-accent-blue/40 via-white/10 to-accent-green/40 backdrop-blur-xl bg-opacity-70 rounded-2xl shadow-2xl p-10 flex flex-col gap-8 border border-white/10 max-w-lg mx-auto"
      >
        <input type="hidden" name="_replyto" />
        {/* Name Field */}
        <div className="relative flex items-center">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-blue text-lg pointer-events-none" />
          <input
            type="text"
            name="name"
            id="contact-name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="peer pl-11 pr-4 py-3 w-full bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent-blue/60 focus:bg-white/20 transition placeholder-transparent"
            placeholder="Your Name"
            autoComplete="off"
          />
          <label htmlFor="contact-name" className="absolute left-11 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-blue peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
            Your Name
          </label>
        </div>
        {/* Email Field */}
        <div className="relative flex items-center">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-blue text-lg pointer-events-none" />
          <input
            type="email"
            name="email"
            id="contact-email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="peer pl-11 pr-4 py-3 w-full bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent-blue/60 focus:bg-white/20 transition placeholder-transparent"
            placeholder="Your Email"
            autoComplete="off"
          />
          <label htmlFor="contact-email" className="absolute left-11 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-blue peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
            Your Email
          </label>
        </div>
        {/* Message Field */}
        <div className="relative flex items-start">
          <FaCommentDots className="absolute left-4 top-5 text-accent-blue text-lg pointer-events-none" />
          <textarea
            name="message"
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="peer pl-11 pr-4 py-3 w-full bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent-blue/60 focus:bg-white/20 transition placeholder-transparent resize-none"
            placeholder="Your Message"
          />
          <label htmlFor="contact-message" className="absolute left-11 top-5 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-blue peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
            Your Message
          </label>
        </div>
        <button
          type="submit"
          className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-accent-blue to-accent-green hover:from-accent-green hover:to-accent-blue text-white font-bold py-3 rounded-lg shadow-lg transition-all text-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/60"
        >
          <FaPaperPlane className="text-xl" />
          Send Message
        </button>
        {success && (
          <div className="text-green-400 text-center font-semibold mt-2">Thank you! Your message has been sent.</div>
        )}
      </motion.form>
    </section>
  );
} 