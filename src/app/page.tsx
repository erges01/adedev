// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react"; // <-- Added Download icon
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
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
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="z-10 flex flex-col items-start max-w-4xl w-full px-6">
          <span className="eyebrow font-mono mb-6">
          Software Engineer / Lagos
          </span>
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
            <p>Software Engineer.</p>
            <p>Solving problems and building cool software.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-4 md:gap-6"
          >
            <Link
              href="#work"
              className="px-6 py-3 font-semibold rounded-full transition-colors cursor-pointer btn-primary"
            >
              See my work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full transition-colors cursor-pointer btn-secondary"
            >
              Let's build something
            </Link>

            {/* The Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer ml-2"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Resume</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* The About Section */}
      <div className="relative w-full section-shell section-divider">
        <div className="section-content">
          <About />
        </div>
      </div>

      {/* The Tech Stack */}
      <div className="relative w-full section-shell section-shell-alt section-divider bg-[#050505]">
        <div className="section-content">
          <Stack />
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative w-full section-shell section-divider">
        <div className="section-content">
          <Experience />
        </div>
      </div>

      {/* Selected Projects */}
      <div
        id="work"
        className="relative w-full section-shell section-shell-alt section-divider bg-[#050505]"
      >
        <div className="section-content">
          <SelectedProjects />
        </div>
      </div>

      {/* The Timeline */}
      <div className="relative w-full section-shell section-divider">
        <div className="section-content">
          <Timeline />
        </div>
      </div>

      {/* The Philosophy */}
      <div className="relative w-full section-shell section-shell-alt section-divider bg-[#050505]">
        <div className="section-content">
          <Philosophy />
        </div>
      </div>

      {/* The Notes */}
      <div className="relative w-full section-shell section-divider">
        <div className="section-content">
          <Notes />
        </div>
      </div>

      {/* The Contact Footer */}
      <div
        id="contact"
        className="relative w-full section-shell section-shell-alt section-divider bg-[#050505]"
      >
        <div className="section-content">
          <Contact />
        </div>
      </div>
    </main>
  );
}
