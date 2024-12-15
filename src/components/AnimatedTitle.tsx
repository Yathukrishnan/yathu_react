import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  children: string;
}

export default function AnimatedTitle({ children }: AnimatedTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-600"
    >
      {children}
    </motion.h2>
  );
}