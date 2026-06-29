// src/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Email", href: "mailto:adesopewinner@gmail.com" }, // Update with your email
  { name: "GitHub", href: "https://github.com/erges01" }, // Update with your GitHub
  { name: "LinkedIn", href: "https://www.linkedin.com/in/winner-adesope-a28b70319/" }, // Update with your LinkedIn
  { name: "X", href: "https://x.com/ade_sope01" } // Update with your X
];

export default function Contact() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-32 md:py-48">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-16 max-w-3xl leading-tight">
          Let's build something <span className="text-gray-500">ambitious.</span>
        </h2>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 pt-12 border-t border-white/10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}