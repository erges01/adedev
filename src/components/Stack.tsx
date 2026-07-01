// src/components/Stack.tsx
"use client";

import { motion } from "framer-motion";

const stackCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Rust", "C", "SQL"],
  },
  {
    title: "Backend & Core",
    skills: ["Node.js", "Express", "NestJS", "Axum", "Socket.io"],
  },
  {
    title: "Databases & ORMs",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma"],
  },
  {
    title: "Infrastructure & Cloud",
    skills: ["Docker", "CI/CD", "Git", "NeonDB", "WebAudio API"],
  },
];

export default function Stack() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="eyebrow font-mono mb-4">02 / Stack</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
          Stack
        </h2>
        <div className="title-underline" />
        <p className="text-lg text-gray-400">
          The tools I use to design, ship, and scale products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {stackCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-t border-white/10 pt-6"
          >
            <h3 className="text-white font-medium tracking-wide mb-6 uppercase text-sm font-mono">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full pill hover:bg-white/[0.05] transition-colors text-sm text-gray-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
