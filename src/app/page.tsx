// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // <-- Added the Link import here
import WhyIBuild from "@/components/WhyIBuild";
import SelectedProjects from "@/components/SelectedProjects";
import Timeline from "@/components/Timeline";
import Philosophy from "@/components/Philosophy";
import Notes from "@/components/Notes";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Noise Layer */}
      <div className="absolute inset-0 bg-noise z-0 fixed pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="z-10 flex flex-col items-start max-w-4xl w-full px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[72px] md:text-[96px] font-bold leading-none tracking-tight text-white mb-6"
          >
            Adesope Winner
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-2 text-xl md:text-2xl text-gray-400 font-medium"
          >
            <p>Building software that feels inevitable.</p>
            <p>Product Engineer.</p>
            <p>Full-stack Developer.</p>
            <p>Obsessed with creator tools.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            {/* FIXED: Changed from <button> to <Link> and added hrefs */}
            <Link 
              href="#work"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              See my work
            </Link>
            <Link 
              href="#contact"
              className="px-6 py-3 text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            >
              Let's build something
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Story & Stack */}
      <div className="relative z-10 w-full">
        <WhyIBuild />
      </div>

      {/* Selected Projects */}
      <div id="work" className="relative z-10 w-full border-t border-white/5">
        <SelectedProjects />
      </div>

      {/* The Timeline */}
      <div className="relative z-10 w-full border-t border-white/5 bg-[#050505]">
        <Timeline />
      </div>

      {/* The Philosophy */}
      <div className="relative z-10 w-full border-t border-white/5">
        <Philosophy />
      </div>

      {/* The Notes */}
      <div className="relative z-10 w-full border-t border-white/5 bg-[#050505]">
        <Notes />
      </div>

      {/* The Contact Footer */}
      <div id="contact" className="relative z-10 w-full border-t border-white/5">
        <Contact />
      </div>

    </main>
  );
}