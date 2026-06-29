// src/app/redner/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RednerCaseStudy() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-blue-500/30 font-sans pb-32">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise z-0 fixed pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Lab
        </Link>
      </nav>

      <article className="relative z-10 w-full max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="py-12 md:py-24 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
              Redner.
            </h1>
            <p className="text-2xl md:text-4xl text-gray-400 font-medium leading-tight max-w-2xl">
              Video creation should feel exactly like writing.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/5 text-sm uppercase tracking-widest font-mono text-gray-500"
          >
            <div>
              <span className="block text-white/30 mb-2">Role</span>
              Creator / Engineer
            </div>
            <div>
              <span className="block text-white/30 mb-2">Timeline</span>
              2026 – Present
            </div>
            <div>
              <span className="block text-white/30 mb-2">Category</span>
              Creator Tool
            </div>
            <div>
              <span className="block text-white/30 mb-2">Stack</span>
              React, WebAudio, Rust
            </div>
          </motion.div>
        </header>

        {/* The Problem */}
        <section className="py-24 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Problem</h2>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed max-w-3xl">
              <p>
                Modern video editing is inherently broken for the average creator. The paradigm hasn't changed since the early days of Premiere Pro: complex multi-track timelines, detached asset bins, and a steep learning curve just to sync audio with visual states.
              </p>
              <p>
                I wanted to build a web-first system that abstracts the complexity of the timeline. If you can type out a document, you should be able to orchestrate a video. 
              </p>
            </div>
          </motion.div>
        </section>

        {/* Architecture & Engineering */}
        <section className="py-24 space-y-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Architecture & The Stage Engine</h2>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed max-w-3xl">
              <p>
                Building a video editor in the browser is fundamentally an exercise in state management and rendering performance. The core of Redner relies on two distinct systems: the <span className="text-white font-medium">Timeline Playback mechanism</span> and the <span className="text-white font-medium">Stage Preview engine</span>.
              </p>
              
              <div className="my-12 p-8 bg-white/[0.02] border border-white/10 rounded-xl">
                <h3 className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
                  Engineering Challenge: The WebAudio API
                </h3>
                <p className="text-lg">
                  Syncing visual state changes with audio playback in a browser is notoriously difficult due to JavaScript's single-threaded nature. To solve this in Phases 2.3 and 2.4, I decoupled the audio playback layer from the React render cycle. By leveraging the WebAudio API clock as the absolute source of truth, the Stage Engine independently polls for state updates, ensuring frame-perfect synchronization without dropping frames during heavy UI renders.
                </p>
              </div>

              <p>
                The frontend architecture avoids traditional heavy DOM manipulation, leaning instead on optimized canvas rendering and strict separation between the "editor state" and the "player state."
              </p>
            </div>
          </motion.div>
        </section>

        {/* Lessons Learned */}
        <section className="py-24 space-y-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Takeaways</h2>
            <ul className="space-y-6 text-xl text-gray-400 leading-relaxed max-w-3xl list-none">
              <li className="flex gap-4">
                <span className="text-blue-500 font-mono text-lg">01</span>
                <span><strong className="text-white font-medium">State is everything.</strong> Complex local state in a web app can't just rely on React Context. You need deterministic, immutable stores to handle fast-scrubbing on a timeline.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 font-mono text-lg">02</span>
                <span><strong className="text-white font-medium">Browser APIs are incredibly powerful.</strong> You don't always need WASM immediately. Maximizing the WebAudio API and RequestAnimationFrame can get you 90% of the way there.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-500 font-mono text-lg">03</span>
                <span><strong className="text-white font-medium">UX dictates architecture.</strong> The decision to make video editing feel like "writing" meant throwing away traditional data models for tracks and clips, and engineering a completely new schema.</span>
              </li>
            </ul>
          </motion.div>
        </section>

      </article>
    </main>
  );
}