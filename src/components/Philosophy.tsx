// src/components/Philosophy.tsx
"use client";

import { motion } from "framer-motion";

const nowItems = [
  {
    label: "Building",
    value: "Creator tools with real-time systems and clean UX.",
  },
  {
    label: "Focus",
    value: "Backend infrastructure, deterministic state, and performance.",
  },
  {
    label: "Open to",
    value: "High‑leverage collaborations and product engineering roles.",
  },
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
        <span className="eyebrow font-mono mb-4">06 / Now</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Now
        </h2>
        <div className="title-underline" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nowItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
              {item.label}
            </span>
            <p className="mt-4 text-xl text-gray-300 leading-relaxed">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
