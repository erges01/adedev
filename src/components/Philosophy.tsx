// src/components/Philosophy.tsx
"use client";

import { motion } from "framer-motion";

const beliefs = [
  "Software should disappear.",
  "The best UX is invisible.",
  "AI should amplify creativity.",
  "Good products reduce decisions.",
  "Great infrastructure feels like magic."
];

export default function Philosophy() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 md:py-48">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Things I Believe.
        </h2>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {beliefs.map((belief, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 group"
          >
            <span className="text-blue-500 font-mono text-lg md:text-xl font-medium shrink-0">
              0{index + 1}
            </span>
            <h3 className="text-3xl md:text-5xl font-medium text-gray-400 group-hover:text-white transition-colors duration-500">
              {belief}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}