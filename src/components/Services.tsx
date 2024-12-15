import { motion } from 'framer-motion';
import { Code2, Palette, Brain } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive, and scalable web applications using cutting-edge technologies like React, TypeScript, and Next.js.',
    icon: Code2,
  },
  {
    title: 'Web Design',
    description: 'Creating beautiful, user-friendly interfaces with a focus on user experience and modern design principles.',
    icon: Palette,
  },
  {
    title: 'AI Development',
    description: 'Developing intelligent solutions using machine learning and deep learning techniques to solve complex problems.',
    icon: Brain,
  },
];

export default function Services() {
  return (
    <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-600"
      >
        Services
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
            <div className="relative p-8 bg-gray-900 rounded-lg">
              <service.icon className="w-12 h-12 mb-6 text-cyan-400" />
              <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}