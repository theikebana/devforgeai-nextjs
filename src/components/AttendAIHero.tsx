"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const heroContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AttendAIHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20 bg-[#07090E]"
    >
      {/* Animated background glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 w-[80%] h-[120%] rounded-full bg-sky-500/20 blur-[120px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-1/4 -left-1/4 w-[60%] h-[80%] rounded-full bg-amber-500/10 blur-[100px]"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative container p-12 mx-auto rounded-4xl bg-[#020617] border border-white/5">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Logo + Brand */}
          <motion.div
            variants={heroItem}
            className="flex items-center gap-3 mb-6"
          >
            <motion.div
              variants={heroItem}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 border border-sky-400/40 shadow-lg shadow-sky-500/20"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-xl font-bold text-white tracking-tighter">
                A
              </span>
            </motion.div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                AttendAI
              </h1>
              <p className="text-xs md:text-sm text-white/60 tracking-wide">
                Facial Recognition Attendance Manager
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-100/80 backdrop-blur-sm mb-6"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20">
              <Sparkles className="h-3 w-3 text-sky-300" />
            </span>
            <span className="uppercase tracking-[0.18em] text-[10px]">
              Computer vision & IP camera integration
            </span>
          </motion.div>

          <motion.div variants={heroItem} className="space-y-5">
            <h2 className="text-3xl md:text-[34px] lg:text-[38px] font-semibold tracking-tight text-white">
              Next‑generation face attendance system for accurate, automated
              tracking.
            </h2>

            <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-3xl">
              AttendAI uses advanced computer vision and IP camera integration
              to deliver accurate, automated, and reliable attendance tracking.
              It combines a powerful dashboard, detailed reporting, SaaS
              enablement, and a refined UI to enhance usability and
              performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

