import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col gap-[32px] items-center sm:items-start min-h-screen">
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

function AboutMe() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-accent-blue mb-6 text-center">About Me</h2>
      <p className="text-gray-300 text-lg mb-4">
        I&apos;m a Full Stack Developer with over 3 years of hands-on experience in designing and implementing scalable web solutions. From crafting efficient backend services to delivering seamless frontend interfaces, I focus on building software that is clean, performant, and impactful.
      </p>
      <p className="text-gray-300 text-lg mb-4">
        I&apos;ve contributed to large-scale platforms such as Ignate (used by T-Mobile), and love working across technologies like React, Next.js, FastAPI, and AWS. My experience spans development, testing, DevOps, and project deployment in agile teams.
      </p>
      <p className="text-gray-300 text-lg">
        Beyond coding, I enjoy learning new technologies, automating boring stuff, and working on side projects that improve everyday workflows.
      </p>
    </section>
  );
}
