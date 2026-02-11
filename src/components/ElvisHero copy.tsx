"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  BarChart3,
  Target,
  Layers,
  ArrowRight,
  Play,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ----------------------------------------
   Motion presets
---------------------------------------- */
const heroContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ----------------------------------------
   ELVIS stats (VIRA-style)
---------------------------------------- */
const STATS = [
  { label: "Leads Tracked", value: 1240 },
  { label: "Active Opportunities", value: 312 },
  { label: "Assigned Today", value: 86 },
  { label: "Conversion Rate", value: 28 }, // %
];

export default function ElvisHero() {
  const [statsCount, setStatsCount] = useState(STATS.map(() => 0));

  /* Count-up animation */
  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCount((prev) =>
        prev.map((v, i) => {
          if (v < STATS[i].value) {
            return Math.min(
              v + Math.ceil(STATS[i].value / 60),
              STATS[i].value
            );
          }
          return v;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-36 lg:pt-28 lg:pb-36 bg-[#07090E]"
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 w-[80%] h-[120%] rounded-full bg-violet-600/15 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 w-[70%] h-[90%] rounded-full bg-violet-500/10 blur-[100px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1440px] p-12 mx-auto rounded-4xl bg-[#020617] border border-white/5">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center"  
        >
          {/* LEFT — Copy + CTA */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-100/80 backdrop-blur-sm"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20">
                <Sparkles className="h-3 w-3 text-violet-300" />
              </span>
              <span className="uppercase tracking-[0.18em] text-[10px]">
                Job leads management & analytics
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={heroItem}
              className="text-3xl md:text-[34px] lg:text-[40px] font-semibold tracking-tight text-white"
            >
              Job Leads Management & Analytics Platform
              <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-violet-200 bg-clip-text text-transparent">
                {" "}
                built for modern sales teams
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="text-sm md:text-base text-white/65 leading-relaxed max-w-xl"
            >
              ELVIS centralizes job lead discovery, intelligent assignment,
              real-time tracking, and performance analytics into a single,
              unified system. Replace spreadsheets, manual routing, and
              disconnected tools with automated workflows and AI-powered
              visibility across your entire sales pipeline.
            </motion.p>

            {/* CTA buttons (VIRA-style) */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:bg-violet-400 transition"
              >
                Get a live demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur hover:bg-white/10 transition">
                <Play className="h-4 w-4 text-violet-300" />
                Product overview
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={heroItem}
              className="flex items-center gap-2 text-[11px] text-white/55"
            >
              <ShieldCheck className="h-4 w-4 text-violet-400" />
              Designed for scale — secure, reliable, and sales-ready
            </motion.div>
          </div>

          {/* RIGHT — Visual + Stats */}
          <motion.div
            variants={heroItem}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            {/* Base */}
            <div className="absolute inset-0 rounded-full border border-violet-400/20 bg-gradient-to-b from-violet-500/10 to-black/80 backdrop-blur-xl" />

            {/* Rotating sweep */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(139,92,246,0.35), transparent 40%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Rings */}
            <div className="absolute inset-10 rounded-full border border-violet-400/10" />
            <div className="absolute inset-24 rounded-full border border-violet-400/10" />

            {/* Capability nodes */}
            {[
              { icon: Target, label: "Lead Discovery", top: "25%", left: "65%" },
              { icon: Layers, label: "Smart Assignment", top: "55%", left: "30%" },
              { icon: BarChart3, label: "AI Analytics", top: "70%", left: "70%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute flex flex-col items-center gap-1"
                style={{
                  top: item.top,
                  left: item.left,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/30 text-violet-200">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-[10px] text-white/70 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            ))}

            {/* Stats overlay */}
            <motion.div
              className="absolute bottom-[-12px] left-1/2 w-full max-w-lg -translate-x-1/2
                         rounded-2xl bg-[#0B0D14]/90 border border-white/10
                         p-3 backdrop-blur-lg flex justify-between gap-3
                         shadow-xl z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 text-center rounded-lg bg-white/5 px-3 py-2
                             text-sm text-white/80 backdrop-blur-sm
                             hover:bg-white/10 transition"
                >
                  <div className="text-lg font-semibold text-violet-300">
                    {statsCount[i]}
                    {stat.label === "Conversion Rate" && "%"}
                  </div>
                  <div className="uppercase tracking-widest text-[9px] text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
