import React from 'react';
import { motion } from 'framer-motion';

// About section summarising Ivan's experience and strengths. Tailwind
// utilities ensure appropriate spacing and responsive typography.
export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm a passionate frontend engineer with a knack for crafting intuitive user
          interfaces and seamless user experiences. Over the past few years I've built
          production websites and dashboards using <strong>React</strong> and <strong>TailwindCSS</strong>,
          paying special attention to performance, accessibility and SEO. On the WordPress
          side I'm comfortable developing custom themes and plugins for WooCommerce and
          optimising sites to deliver blazing-fast page loads. When I'm not coding I
          enjoy experimenting with new UI libraries and prototyping animations with
          Framer Motion.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond delivering websites, I collaborate with designers and stakeholders to
          ensure the final product meets business goals and delights users. Let's build
          something great together!
        </p>
      </motion.div>
    </section>
  );
}