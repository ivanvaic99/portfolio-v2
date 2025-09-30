import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

// Hero section of the portfolio. It introduces Ivan with a picture,
// headline and quick access buttons. Animations are powered by
// Framer Motion to gently fade and slide elements into view when
// they become visible.
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 md:px-16">
      {/* Theme toggle positioned in the top right on larger screens */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/avatar.png"
            alt="Ivan Vaic portrait"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hi, I'm Ivan Vaic
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Frontend &amp; WordPress Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
            I build fast, accessible websites and interfaces using React,
            TailwindCSS and WordPress. I care about performance,
            maintainability and delightful user experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/ivan-vaic/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ivanvaic99"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="/Ivan_Vaic_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}