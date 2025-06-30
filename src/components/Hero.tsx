'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);
  return (
    <section id="home" ref={ref} className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center py-16 px-4 relative z-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/40 via-accent-green/30 to-transparent" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent-blue mb-6 max-w-3xl mx-auto leading-tight"
      >
        Hi, I&apos;m Bikash — <span className="text-accent-green">a Full Stack Developer</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
        className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
      >
        I&apos;m a software engineer with 3+ years of experience crafting scalable web applications and backend systems.<br />
        I specialize in JavaScript, Node.js, React, and cloud-native deployments. I&apos;m passionate about clean code, performance, and solving real-world problems with tech.
      </motion.p>
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: 'easeInOut' }}
        className="mb-8"
      >
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent-blue bg-gray-800 flex items-center justify-center">
          <Image
            src="/profile.png"
            alt="Profile photo"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="https://github.com/B1kash?tab=repositories"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-green text-white font-semibold shadow-lg hover:from-accent-green hover:to-accent-blue transition-colors duration-300 text-lg"
        >
          View Projects
        </a>
        <a
          href="/Bikash_Resume.pdf"
          download="Bikash_Resume.pdf"
          className="inline-block px-8 py-3 rounded-lg border border-accent-blue text-accent-blue font-semibold shadow-lg hover:bg-accent-blue hover:text-white transition-colors duration-300 text-lg"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
} 