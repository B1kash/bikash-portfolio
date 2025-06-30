"use client";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    university: "Kaziranga University",
    year: "2020",
    highlights: [
      "CGPA: 7.52"
    ]
  }
];

const certifications = [
  {
    name: "IBM Cloud Computing & Virtualization Graduate",
    year: "2020"
  }
];

export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/30 via-accent-green/20 to-transparent" />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-3xl md:text-4xl font-bold text-accent-blue mb-10 text-center"
      >Education</motion.h2>
      <div className="space-y-8">
        {education.map((item, idx) => (
          <motion.div
            key={item.university + item.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-gradient-to-br from-accent-blue/30 via-white/10 to-accent-green/30 backdrop-blur-md bg-opacity-60 rounded-lg shadow p-6 border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{item.degree}</h3>
            <div className="text-accent-green font-medium mb-1">{item.university}</div>
            <div className="text-gray-400 text-sm mb-3">Class of {item.year}</div>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-2xl font-bold text-accent-blue mt-16 mb-6 text-center"
      >Certifications</motion.h2>
      <div className="space-y-8">
        {certifications.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-gradient-to-br from-accent-blue/30 via-white/10 to-accent-green/30 backdrop-blur-md bg-opacity-60 rounded-lg shadow p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
            <div className="text-gray-400 text-sm mb-1">{item.year}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 