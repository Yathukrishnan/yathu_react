import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  percentage: number;
  index: number;
}

function SkillCircle({ name, percentage, index }: SkillProps) {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-700"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="text-blue-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{percentage}%</span>
        </div>
      </div>
      <span className="mt-4 text-lg font-medium">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const skills = [
    { name: 'AI', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'HTML', percentage: 85 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
  ];

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <SkillCircle key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </div>
  );
}