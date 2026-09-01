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
        <h2 className="text-3xl md:text-4xl font-black tracking-normal text-[#f8f4df] mb-2">
          Inventory
        </h2>
        <div className="title-underline" />
        <p className="text-lg text-[#c9d0d8]">
          The tools I reach for when systems need to stay fast, clear, and calm.
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
            className="pixel-card pt-10 p-6"
          >
            <h3 className="text-[#ffce5c] font-bold tracking-normal mb-6 uppercase text-sm font-mono">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 pill hover:bg-[#f8f4df]/8 transition-colors text-sm text-[#c9d0d8] font-medium"
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
