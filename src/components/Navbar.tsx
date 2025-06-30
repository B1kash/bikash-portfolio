"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-accent-blue/30">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="text-2xl font-bold text-accent-blue tracking-tight">Bikash</a>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-200 hover:text-accent-green transition-colors font-medium px-2 py-1 rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded text-accent-blue hover:bg-gray-800"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-0 left-0 w-full bg-[#0a0a0a] border-b border-accent-blue/30 shadow-lg"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <button
                className="self-end mb-2 p-2 rounded text-accent-blue hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-200 hover:text-accent-green text-lg font-medium px-2 py-1 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 