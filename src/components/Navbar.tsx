import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <nav className="fixed z-50 w-full bg-gray-900/95 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div className="flex-shrink-0 cursor-pointer" onClick={refreshPage}>
             <img
              src='Screenshot_2024-12-15_184305-removebg-preview.png'
              alt="Logo"
              className="w-auto h-28"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {['home', 'about', 'projects', 'services', 'skills', 'contact'].map((section) => (
                // biome-ignore lint/a11y/useButtonType: <explanation>
<button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="px-3 py-2 text-gray-300 capitalize transition-colors hover:text-white"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'about', 'projects', 'services', 'skills', 'contact'].map((section) => (
              // biome-ignore lint/a11y/useButtonType: <explanation>
<button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full px-3 py-2 text-left text-gray-300 capitalize transition-colors hover:text-white"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
