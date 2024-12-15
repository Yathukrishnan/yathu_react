import { motion } from 'framer-motion';
import Section from './components/Section';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import RubiksCube from './components/RubiksCube';
import AnimatedTitle from './components/AnimatedTitle';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <Navbar />
      
      <Section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <Hero />
      </Section>

      <Section id="about" className="bg-gray-900/50 backdrop-blur-sm">
        <About />
      </Section>

      <Section id="cube-animation" className="py-0">
        <RubiksCube />
      </Section>

      <Section id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedTitle>Projects</AnimatedTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="services" className="bg-gray-900/50 backdrop-blur-sm">
        <Services />
      </Section>

      <Section id="skills" className="bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedTitle>Skills</AnimatedTitle>
          <Skills />
        </div>
      </Section>

      <Section id="contact" className="bg-gray-900/50 backdrop-blur-sm">
        <Contact />
      </Section>
    </div>
  );
}

export default App;