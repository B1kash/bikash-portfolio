"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bikashbaishya/", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/B1kash", label: "GitHub" },
  { icon: <FaTwitter />, href: "https://twitter.com/yourprofile", label: "Twitter" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="w-full py-8 bg-gradient-to-br from-accent-blue/30 via-accent-green/20 to-[#0a0a0a] border-t border-accent-blue/20 mt-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Bikash. All rights reserved.</div>
        <div className="flex gap-6">
          {socials.map((s, idx) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.2, color: "#10b981" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-2xl text-accent-blue hover:text-accent-green transition-colors"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
} 