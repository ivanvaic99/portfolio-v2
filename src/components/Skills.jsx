import React from 'react';
import { motion } from 'framer-motion';

// Skills section shows the technologies Ivan is comfortable with. The
// icons are loaded from skillicons.dev, a service that provides
// lightweight SVG badges for various languages and tools.
const skills = [
  { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'WordPress', icon: 'https://skillicons.dev/icons?i=wordpress' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Skills
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}