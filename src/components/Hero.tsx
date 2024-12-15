import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import FlipText from './FlipText';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8"
    >
      <h1 className="mb-4 text-4xl font-bold md:text-6xl">
        Hi, I'm Yathukrishnan T.U
      </h1>
      <h2 className="mb-8 text-2xl md:text-4xl">
        I'm a <FlipText />
      </h2>
      <div className="flex justify-center space-x-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href='https://github.com/Yathukrishnan'
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href='https://www.linkedin.com/in/yathukrishnan-t-u-3124aa256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href='mailto:yathukrish10@gmail.com'
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <Mail className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.div>
  );
}