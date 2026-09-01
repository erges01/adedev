// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
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
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#050506]">
      <div className="absolute inset-0 bg-noise z-0 fixed pointer-events-none" />
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

      <section className="relative min-h-screen w-full">
        <div className="absolute inset-x-0 top-0 h-2 bg-[#ffce5c]/35 pointer-events-none" />
        <div className="z-10 mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 items-center gap-14 px-6 pb-20 pt-12 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:py-16 lg:px-14">
          <div className="flex flex-col items-start">
            <span className="eyebrow font-mono mb-7">
              Backend Engineer / Lagos
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[58px] font-black leading-[0.95] tracking-normal text-[#f8f4df] mb-7 md:text-[88px]"
            >
              Adesope Winner
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl space-y-3 text-lg font-medium leading-relaxed text-[#c9d0d8] md:text-2xl"
            >
              <p>Backend engineer building reliable systems with a playful edge.</p>
              <p>
                I like APIs, databases, Rust, TypeScript, and software that feels
                simple because the hard parts are handled well.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-4 md:gap-5"
            >
              <Link
                href="#work"
                className="px-6 py-3 font-bold transition-all cursor-pointer btn-primary"
              >
                See my work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 font-semibold transition-all cursor-pointer btn-secondary"
              >
                Let&apos;s build something
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-3 text-[#c9d0d8] hover:text-[#f8f4df] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span className="font-medium">Resume</span>
              </a>
            </motion.div>

            <div className="mt-12 grid w-full max-w-xl grid-cols-3 border-2 border-[#f8f4df]/15 bg-[#08090d]/90 font-mono text-xs uppercase text-[#c9d0d8] shadow-[6px_6px_0_#000]">
              <div className="border-r-2 border-[#f8f4df]/15 p-4">
                <span className="block text-[#ffce5c]">Mode</span>
                Backend
              </div>
              <div className="border-r-2 border-[#f8f4df]/15 p-4">
                <span className="block text-[#68e1fd]">Builds</span>
                APIs
              </div>
              <div className="p-4">
                <span className="block text-[#ff6f91]">Status</span>
                Open
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            className="relative flex min-h-[420px] w-full items-center justify-center md:min-h-[640px]"
          >
            <div className="pixel-computer" aria-label="Pixel computer terminal">
              <div className="crt-body">
                <div className="crt-bezel">
                  <div className="crt-screen font-mono">
                    <div className="crt-glare" aria-hidden="true" />
                    <span className="crt-label">system.exe</span>
                    <div className="boot-sequence">
                      <p className="boot-line boot-one">&gt; booting portfolio</p>
                      <p className="boot-line boot-two">
                        &gt; loading backend systems
                      </p>
                      <p className="boot-line boot-three">
                        &gt; ready for serious builds
                      </p>
                    </div>
                  </div>
                  <div className="crt-controls" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
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
      <div className="relative w-full section-shell section-shell-alt section-divider bg-[#08090d]">
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
        className="relative w-full section-shell section-shell-alt section-divider bg-[#08090d]"
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
      <div className="relative w-full section-shell section-shell-alt section-divider bg-[#08090d]">
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
        className="relative w-full section-shell section-shell-alt section-divider bg-[#08090d]"
      >
        <div className="section-content">
          <Contact />
        </div>
      </div>
    </main>
  );
}
