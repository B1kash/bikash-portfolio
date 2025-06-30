"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaJava, FaHtml5, FaAngular } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiFastapi, SiMongodb, SiPostgresql, SiMysql, SiNginx } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaReact className="text-yellow-300" />, level: 90 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 85 },
  { name: "Python", icon: <FaPython className="text-yellow-400" />, level: 80 },
  { name: "Java", icon: <FaJava className="text-orange-500" />, level: 70 },
  { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-400" />, level: 90 },
  { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 85 },
  { name: "Express.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
  { name: "Nest.js", icon: <SiNestjs className="text-red-500" />, level: 75 },
  { name: "Angular", icon: <FaAngular className="text-red-600" />, level: 70 },
  { name: "FastAPI", icon: <SiFastapi className="text-green-400" />, level: 70 },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: 75 },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 80 },
  { name: "AWS (S3, EC2)", icon: <FaAws className="text-yellow-400" />, level: 70 },
  { name: "Docker", icon: <FaDocker className="text-blue-400" />, level: 75 },
  { name: "Nginx", icon: <SiNginx className="text-green-500" />, level: 65 },
  { name: "GitLab CI/CD", icon: <FaNodeJs className="text-orange-400" />, level: 80 },
];

export default function Skills() {
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardWidth = 220; // width + gap
  const visibleCards = 4; // adjust for your layout
  const maxIndex = skills.length - visibleCards;
  let currentIndex = 0;

  useEffect(() => {
    function autoSlide() {
      currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
      controls.start({ x: -currentIndex * cardWidth });
    }
    const interval = setInterval(autoSlide, 2200);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <section id="skills" className="relative max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-accent-blue mb-10 text-center">Skills</h2>
      <motion.div
        className="overflow-x-auto flex space-x-6 pb-4 hide-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex gap-6 min-w-full"
          drag="x"
          dragConstraints={{ left: -skills.length * cardWidth + 900, right: 0 }}
          style={{ cursor: "grab" }}
          animate={controls}
          ref={sliderRef}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="snap-center shrink-0 w-[200px] h-[200px] rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform bg-gradient-to-br from-accent-blue/40 via-white/10 to-accent-green/40 backdrop-blur-md bg-opacity-60 border border-white/10"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <div className="text-accent-green font-bold text-xl mb-2">{skill.level}%</div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-accent-blue rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="mt-4 text-center text-gray-400 text-sm">Drag or scroll to see more skills</div>
    </section>
  );
} 