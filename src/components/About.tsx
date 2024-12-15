import { motion } from 'framer-motion';

export default function About() {
  const text = "I'm Yathukrishnan T. U, an Artificial Intelligence and Data Science student at St. Joseph College of Engineering and Technology, Palai. Alongside my studies, I work as a web developer at Pillzen Pvt. Ltd., where I apply my expertise to develop modern, responsive websites and web applications. My passion for technology extends beyond web development, as I am deeply involved in the field of Artificial Intelligence. I specialize in building AI-driven solutions, exploring machine learning models, and applying data science techniques to solve real-world problems.";
  
  const words = text.split(' ');

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-2/3"
        >
          <div className="p-8 rounded-lg shadow-xl bg-gray-900/80">
            <p className="text-lg leading-relaxed text-gray-300">
              {words.map((word, index) => (
                <motion.span
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.02,
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3"
        >
          <img
            src='Screenshot 2024-12-15 173321.png'
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}