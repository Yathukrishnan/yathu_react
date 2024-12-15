import React, { useEffect, useState } from 'react';

const words = ['Web Developer', 'UI/UX Designer', 'AI Enthusiast', 'Frontend Engineer'];

export default function FlipText() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block animate-flip text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-600">
      {words[currentWord]}
    </span>
  );
}