"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Dhubankhaity: Import-Export Portfolio Website",
    image: "/next.svg",
    tech: ["React.js", "Node.js", "MongoDB", "AWS (S3/EC2)", "Docker"],
    github: "#",
    demo: "#",
    description: "Built a full-stack web application for a local export-import company. Designed secure admin panel with authentication, product listing, and image uploads. Integrated AWS S3 for image hosting, deployed via EC2, and secured with Nginx + SSL. Complete CI/CD deployment using Docker and Hostinger domain management."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/30 via-accent-green/20 to-transparent" />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-3xl md:text-4xl font-bold text-accent-blue mb-10 text-center"
      >Projects</motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(16,185,129,0.15)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-accent-blue/30 via-white/10 to-accent-green/30 backdrop-blur-md bg-opacity-60 rounded-xl overflow-hidden shadow-lg border border-white/10 flex flex-col"
          >
            <div className="relative w-full h-40 bg-gray-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span key={tag} className="bg-accent-blue/20 text-accent-blue px-2 py-1 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="mt-auto flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors" aria-label="GitHub">
                  <FaGithub size={22} />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors" aria-label="Demo">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 