import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  icon: keyof typeof Icons;  // This ensures only valid icon names from lucide-react
  index: number;
}

export default function ProjectCard({ title, description, imageUrl, link, icon, index }: ProjectCardProps) {
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
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          {/* Render the Icon component as a JSX element */}
          <Icon className="absolute w-8 h-8 text-white bottom-4 right-4" />
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
