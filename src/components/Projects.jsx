import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects.js';

// Card component for each project. Extracted here to keep the
// Projects section declarative. Includes hover and focus states
// and uses semantic heading and link elements for accessibility.
function ProjectCard({ project }) {
  return (
    <motion.div
      className="group bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
          {project.description}
        </p>
        <div className="mt-3 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium mr-2 mb-1 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Projects section showing all demo projects. Projects are defined in
// src/data/projects.js for easier maintenance. Animations fade and
// slide the cards into view as they scroll into the viewport.
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}