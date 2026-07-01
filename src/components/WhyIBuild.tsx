// src/components/WhyIBuild.tsx
"use client";

import { motion } from "framer-motion";

export default function WhyIBuild() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 md:py-48">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="eyebrow font-mono mb-4">00 / Intent</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
          Intent
        </h2>
        <div className="title-underline" />

        <div className="space-y-8 text-xl text-gray-400 font-medium leading-relaxed max-w-3xl">
          <p>
            I build software that feels inevitable—clean interfaces, clear
            systems, and zero wasted motion for the user.
          </p>
          <p>
            My focus is backend engineering and infrastructure, where design
            decisions compound. I care about performance, correctness, and
            system clarity from day one.
          </p>
          <p>
            Whether it’s creator tooling, a financial ledger engine, or a custom
            ORM, I optimize for long‑term maintainability and speed.
          </p>
          <p>
            I don’t build to ship code. I build to remove friction and unlock
            leverage.
          </p>
        </div>
      </motion.div>

      {/* The Minimalist Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/5"
      >
        <div className="space-y-4">
          <h3 className="text-white font-semibold tracking-wide">Frontend</h3>
          <ul className="space-y-2 text-gray-500">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold tracking-wide">Backend</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Rust</li>
            <li>Node.js</li>
            <li>Axum & Express</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold tracking-wide">
            Infrastructure
          </h3>
          <ul className="space-y-2 text-gray-500">
            <li>Docker</li>
            <li>Postgres</li>
            <li>SQLite</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold tracking-wide">Design</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Figma</li>
            <li>Motion</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
