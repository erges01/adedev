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
    value: "High-leverage collaborations and product engineering roles.",
  },
];

export default function Philosophy() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 md:py-44">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <span className="eyebrow font-mono mb-4">06 / Now</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-normal text-[#f8f4df]">
          Current Run
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
            className="pixel-card p-6 pt-10 md:p-8 md:pt-12"
          >
            <span className="text-[#ffce5c] font-mono text-xs uppercase">
              {item.label}
            </span>
            <p className="mt-4 text-xl text-[#c9d0d8] leading-relaxed">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
