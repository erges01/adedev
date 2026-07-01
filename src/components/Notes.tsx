// src/components/Notes.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link"; // <-- Import Link

const notes = [
  {
    date: "06.2026",
    title: "How I designed Redner's Timeline engine",
    category: "Architecture",
    slug: "redner-timeline-engine",
  },
  {
    date: "05.2026",
    title: "AI-assisted development is not 'vibe coding'",
    category: "Workflow",
    slug: "ai-assisted-development",
  },
  {
    date: "05.2026",
    title: "Lessons from building a financial ledger in Rust",
    category: "Backend",
    slug: "rust-ledger-lessons",
  },
  {
    date: "04.2026",
    title: "Things I got wrong building GirdORM",
    category: "Post-mortem",
    slug: "girdorm-mistakes",
  },
];

export default function Notes() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <span className="eyebrow font-mono mb-4">07 / Writing</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
            Writing
          </h2>
          <div className="title-underline" />
          <p className="text-xl text-gray-400">
            Short essays on engineering, design, and architecture.
          </p>
        </div>

        <button className="text-blue-400/90 hover:text-blue-300 transition-colors font-mono uppercase tracking-widest text-xs flex items-center gap-2">
          View all notes
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>

      <div className="flex flex-col border-t border-white/10">
        {notes.map((note, index) => (
          <motion.div
            key={note.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Replaced <a> with <Link> */}
            <Link
              href={`/notes/${note.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors -mx-6 px-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <span className="text-gray-500 font-mono text-sm tracking-widest w-24">
                  {note.date}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-gray-300 group-hover:text-white transition-colors">
                  {note.title}
                </h3>
              </div>

              <span className="hidden md:block text-blue-500/0 group-hover:text-blue-500 font-mono text-sm tracking-wider uppercase transition-colors">
                {note.category}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
