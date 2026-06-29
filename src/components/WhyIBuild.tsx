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
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-12">
          Why I Build.
        </h2>

        <div className="space-y-8 text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
          <p>
            I left my first university at 18 because I didn't just want to memorize how systems worked—I wanted to architect them from the ground up. 
          </p>
          <p>
            Now, my obsession lies in the invisible layers of software. I build infrastructure that makes complex things feel simple. Whether that's engineering a financial ledger in Rust, writing a type-safe ORM, or building Redner so video editing feels as seamless as writing text.
          </p>
          <p>
            I don't just write code. I look for bottlenecks, design the architecture, and ship products that reduce decisions for the user.
          </p>
        </div>
      </motion.div>

      {/* The Minimalist Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12"
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
          <h3 className="text-white font-semibold tracking-wide">Infrastructure</h3>
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