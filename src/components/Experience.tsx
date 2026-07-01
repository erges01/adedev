// src/components/Experience.tsx
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Varsigram",
    role: "Software Engineer, Backend",
    date: "2025 — Present",
    location: "Lagos, Nigeria",
    description: [
      "Architected scalable chat microservices supporting 1-on-1 messaging and threaded replies using Socket.io and Node.js.",
      "Designed and maintained core database schemas utilizing Postgres, NeonDB, and Prisma ORM for high-availability data access.",
      "Implemented Test-Driven Development (TDD) and strict CI/CD pipelines to ensure continuous, reliable software delivery in production.",
      "Optimized backend systems in TypeScript, significantly increasing API performance and overall system reliability.",
    ],
    stack: ["TypeScript", "Node.js", "Postgres", "Socket.io", "Prisma"],
  },
];

export default function Experience() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="eyebrow font-mono mb-4">03 / Experience</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
          Experience
        </h2>
        <div className="title-underline" />
        <p className="text-xl text-gray-400">
          Production work, systems, and impact.
        </p>
      </motion.div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex flex-col md:flex-row gap-8 md:gap-12 group glass-card rounded-2xl p-6 md:p-8"
          >
            {/* Timeline Column */}
            <div className="md:w-1/4 shrink-0">
              <span className="text-gray-500 font-mono text-sm tracking-widest block mb-1">
                {exp.date}
              </span>
              <span className="text-white/30 font-mono text-xs tracking-wider uppercase block">
                {exp.location}
              </span>
            </div>

            {/* Details Column */}
            <div className="md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {exp.role}
              </h3>
              <span className="text-blue-400 font-medium text-lg block mb-6">
                @ {exp.company}
              </span>

              <ul className="space-y-4 mb-8">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-lg text-gray-400 leading-relaxed flex gap-4"
                  >
                    <span className="text-blue-500/50 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full pill text-xs font-mono text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
