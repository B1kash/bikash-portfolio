"use client";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Developer",
    company: "TigmaMinds",
    duration: "July 2023 – Present",
    highlights: [
      "Enhanced the Ignate platform (T-Mobile) by building and testing optimized workflows — improving pipeline speed by 30%.",
      "Scaled microservices (Node.js + Express) and improved frontend responsiveness (Angular, React) by 20%.",
      "Maintained POSITRARX Admin Panel (React + FastAPI), improving system stability.",
      "Automated Docker-based deployments using GitLab CI/CD on AWS (ECR, EC2).",
      "Agile collaboration with QA and product teams for efficient delivery."
    ]
  },
  {
    role: "Software Developer",
    company: "Borgos Technologies",
    duration: "June 2022 – June 2023",
    highlights: [
      "Developed RESTful APIs and services using Node.js, Express, and Nest.js.",
      "Delivered responsive, mobile-friendly UIs with React.js and Next.js.",
      "Performed load testing, tuning apps for multi-client scalability.",
      "Integrated CI practices, reducing merge conflicts and deployment errors."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/30 via-accent-green/20 to-transparent" />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-3xl md:text-4xl font-bold text-accent-blue mb-10 text-center"
      >Experience</motion.h2>
      <div className="relative border-l-2 border-accent-blue/30 pl-8">
        {experience.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-12 relative"
          >
            <div className="absolute -left-5 top-2 w-4 h-4 bg-accent-blue rounded-full border-2 border-white"></div>
            <div className="bg-gradient-to-br from-accent-blue/30 via-white/10 to-accent-green/30 backdrop-blur-md bg-opacity-60 rounded-lg shadow p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-1">{item.role}</h3>
              <div className="text-accent-green font-medium mb-1">{item.company}</div>
              <div className="text-gray-400 text-sm mb-3">{item.duration}</div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 