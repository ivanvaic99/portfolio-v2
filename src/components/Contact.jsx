import React from 'react';
import { motion } from 'framer-motion';

// Contact section lists ways to get in touch. Use semantic markup for
// contact information and ensure links open in a new tab where
// appropriate. Feel free to extend this section with a contact form
// or map in the future.
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Get In Touch
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 text-lg text-gray-700 dark:text-gray-300"
          >
            <p>
              📍 Pančevo, Serbia
            </p>
            <p>
              ✉️ <a href="mailto:ivan.vaic22@gmail.com" className="underline hover:text-blue-600">ivan.vaic22@gmail.com</a>
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/ivan-vaic/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ivanvaic99"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
          </motion.div>
      </div>
    </section>
  );
}