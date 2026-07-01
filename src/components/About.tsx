// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 md:py-48 text-[#8c949e]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <span className="eyebrow font-mono mb-4">01 / Profile</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
          Profile
        </h2>
        <div className="title-underline" />

        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p>
            I’m a software engineer based in Lagos, Nigeria. I design systems,
            build core infrastructure, and ship deterministic software that
            keeps complex problems simple.
          </p>

          <p>
            My work is anchored in{" "}
            <span className="text-white font-medium">
              TypeScript, Node.js, and Rust
            </span>
            —from scalable microservices to monolithic apps where correctness,
            latency, and reliability matter most.
          </p>

          <p>
            I care about architecture as much as implementation. I plan schemas,
            state machines, and interfaces first, then execute with speed and
            discipline.
          </p>

          <p className="pt-4 text-white font-medium">
            Open to collaborations and high‑leverage problems.
          </p>
        </div>

        {/* Bottom Metadata Section */}
        <div className="mt-16 glass-card rounded-2xl p-6">
          <div className="grid grid-cols-2 gap-8 text-sm tracking-wider uppercase font-mono border-t border-white/5 pt-8">
            <div>
              <span className="block text-gray-600 mb-2">Base</span>
              <span className="text-gray-300">Lagos, Nigeria</span>
            </div>
            <div>
              <span className="block text-gray-600 mb-2">Core Stack</span>
              <span className="text-gray-300">Rust, TypeScript, Postgres</span>
            </div>
            <div>
              <span className="block text-gray-600 mb-2">Current Focus</span>
              <span className="text-gray-300">Backend Infrastructure</span>
            </div>
            <div>
              <span className="block text-gray-600 mb-2">Methodology</span>
              <span className="text-gray-300">AI-Assisted Engineering</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
