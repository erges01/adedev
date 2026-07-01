// src/components/Timeline.tsx
"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2022",
    title: "Started taking software seriously",
    description:
      "Moved from tutorials to real projects. Learned the fundamentals of web architecture, debugging, and shipping small apps end-to-end.",
  },
  {
    year: "2023",
    title: "Leveled up in backend systems",
    description:
      "Doubled down on APIs, data modeling, and reliability. Built services with stronger abstractions and a focus on performance.",
  },
  {
    year: "2024",
    title: "Started building",
    description:
      "Moved beyond just learning syntax. Started piecing together how the web actually works and discovering the gap between writing scripts and engineering systems.",
  },
  {
    year: "2025",
    title: "Built an event platform",
    description:
      "Architected and shipped my first major full-stack product. Learned the hard way how to manage complex state, handle databases in production, and build for real users.",
  },
  {
    year: "2026",
    title: "Infrastructure & Redner",
    description:
      "Shifted focus to the invisible layers. Built a financial ledger in Rust, engineered GirdORM, and began architecting Redner to make video editing feel as seamless as writing.",
  },
  {
    year: "Future",
    title: "Building tools creators deserve",
    description:
      "Continuing to push the boundaries of what's possible on the web. The ultimate goal is invisible software that removes friction and amplifies human creativity.",
  },
];

export default function Timeline() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="eyebrow font-mono mb-4">05 / Journey</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
          Journey
        </h2>
        <div className="title-underline" />
      </motion.div>

      <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-16">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="relative pl-8 md:pl-12"
          >
            {/* The glowing dot on the timeline */}
            <div className="absolute w-3 h-3 bg-[#0a0a0a] border-2 border-blue-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

            <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-2 block">
              {item.year}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
