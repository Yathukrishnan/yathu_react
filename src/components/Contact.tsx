import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Yathukrishnan', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/yathu_ad063?t=aKh7frojQ66Wvqzka9XIFA&s=09', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/invites/contact/?igsh=9xx38bmunevu&utm_content=d1rn9qr', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yathukrishnan-t-u-3124aa256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:yathukrish10@gmail.com', label: 'Email' }
];

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleResumeDownload = () => {
    window.location.href = "https://drive.google.com/uc?export=download&id=13dXP7XYrE8GmXHOKMn-AIPkG_XLxml1X";
  };

  const handleHireMe = () => {
    window.location.href = "mailto:yathukrish10@gmail.com";
  };

  return (
    <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-600"
      >
        Let's Connect
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-2xl mx-auto"
      >
        <motion.p
          variants={item}
          className="mb-8 text-lg leading-relaxed text-gray-300"
        >
          Feel free to contact me for any inquiries or collaborations.
          I'm open to paid work opportunities and am also ready to work under companies for exciting projects.
          Let's create something amazing together!
        </motion.p>

        <motion.div variants={item} className="flex justify-center gap-4 mb-12">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            onClick={handleResumeDownload}
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-gray-900 rounded-full group focus:outline-none focus:ring-2 focus:ring-purple-400/50"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out opacity-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-600 group-hover:opacity-100" />
            <span className="relative">Download Resume</span>
          </button>

          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
            onClick={handleHireMe}
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-gray-900 rounded-full group focus:outline-none focus:ring-2 focus:ring-purple-400/50"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out opacity-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-600 group-hover:opacity-100" />
            <span className="relative">Hire Me</span>
          </button>
        </motion.div>

        <motion.div
          variants={item}
          className="relative inline-block p-4 rounded-full bg-gray-900/80 backdrop-blur-sm"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur opacity-30" />
          <div className="relative flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
