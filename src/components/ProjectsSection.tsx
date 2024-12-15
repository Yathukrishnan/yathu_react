import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  logoUrl: string;  // Using logoUrl instead of imageUrl
  link: string;
  icon: keyof typeof Icons;
  index: number;
}

export default function ProjectCard({ title, description, logoUrl, link, icon, index }: ProjectCardProps) {
  // Get the Icon component from the Icons object using the `icon` prop
  const Icon = Icons[icon] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full max-w-xs mx-auto group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden transition-all duration-300 bg-gray-900 rounded-lg hover:transform hover:scale-105"
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Display the logo in the center */}
          <img 
            src={logoUrl} 
            alt={title} 
            className="object-contain w-24 h-24"  // Adjust size as needed
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {title}
          </h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </a>
    </motion.div>
  );
}
