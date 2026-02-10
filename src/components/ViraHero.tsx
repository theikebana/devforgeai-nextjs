"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radar,
  ShieldCheck,
  ArrowRight,
  Play,
} from "lucide-react";
import { BiError } from "react-icons/bi";
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
   Events & Stats
---------------------------------------- */
const EVENTS = [
  { type: "warn", text: "Over-permissive IAM role detected" },
  { type: "warn", text: "Unencrypted volume flagged" },
  { type: "warn", text: "Unused security group found" },
  { type: "fix", text: "Public storage access auto-blocked" },
  { type: "fix", text: "CIS benchmark drift corrected" },
];

const STATS = [
  { label: "Assets", value: 1200 },
  { label: "Risks", value: 48 },
  { label: "Resolved", value: 36 },
  { label: "Alerts", value: 12 },
];

const RADAR_NODES = [
  { top: "25%", left: "65%", eventIndex: 0 },
  { top: "40%", left: "35%", eventIndex: 1 },
  { top: "60%", left: "55%", eventIndex: 2 },
  { top: "70%", left: "25%", eventIndex: 3 },
  { top: "50%", left: "75%", eventIndex: 4 },
];

export default function ViraHero() {
  const [statsCount, setStatsCount] = useState(STATS.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCount((prev) =>
        prev.map((v, i) =>
          v < STATS[i].value
            ? Math.min(v + Math.ceil(STATS[i].value / 60), STATS[i].value)
            : v
        )
      );
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#07090E]
        py-12 lg:py-16 xl:py-20 2xl:py-24"
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4
          w-[80%] h-[120%] rounded-full bg-emerald-500/20 blur-[120px]"
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div
        className="relative mx-auto max-w-7xl 2xl:max-w-[1440px] 2xl:rounded-4xl rounded-3xl
          bg-[#020617] border border-white/5
          p-6 sm:p-8 lg:p-10 xl:p-12"
      >
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center
            gap-10 xl:gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            xl:grid-cols-[1.15fr_1fr]"
        >
          {/* CONTENT */}
          <div
            className="order-2 lg:order-1 space-y-4
              text-center lg:text-left"
          >
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2
                mx-auto lg:mx-0
                rounded-full border border-white/10
                bg-white/5 px-3 py-1
                text-[10px] text-emerald-200"
            >
              <Radar className="h-3.5 w-3.5 text-emerald-400" />
              AUTONOMOUS CLOUD SECURITY
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-semibold tracking-snug text-white
                text-[26px] leading-[1.1]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                xl:text-[40px]"
            >
              VIRA continuously secures your cloud —
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                {" "}
                detecting, prioritizing
              </span>{" "}
              and resolving risks in real time.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto lg:mx-0
                max-w-[32ch] sm:max-w-md
                text-[14px] sm:text-sm md:text-base
                leading-relaxed text-white/65"
            >
              Always-on security scanning, automated compliance enforcement,
              and adaptive threat intelligence for modern infrastructure.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-3
                justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-xl
                  bg-emerald-500 px-5 py-3 text-sm font-medium text-black
                  hover:bg-emerald-400 transition"
              >
                Get a live demo <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                className="inline-flex items-center gap-2 rounded-xl
                  border border-white/15 bg-white/5
                  px-5 py-3 text-sm text-white/80 hover:bg-white/10"
              >
                <Play className="h-4 w-4 text-emerald-300" />
                Product overview
              </button>
            </motion.div>

            <div
              className="flex items-center gap-2
                justify-center lg:justify-start
                text-[10px] sm:text-[11px] text-white/55"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Running quietly in production — 24/7
            </div>
          </div>

          {/* RADAR */}
          <div
            className="relative mx-auto aspect-square w-full
              order-1 lg:order-2
              max-w-[260px] sm:max-w-[300px]
              md:max-w-[340px] xl:max-w-md"
          >
            <div className="absolute inset-0 rounded-full
              border border-emerald-400/20
              bg-gradient-to-b from-emerald-500/5 to-black/80"
            />

            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(16,185,129,0.35), transparent 38%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-8 rounded-full border border-emerald-400/10" />
            <div className="absolute inset-20 rounded-full border border-emerald-400/10" />

            {RADAR_NODES.map((node, i) => {
              const event = EVENTS[node.eventIndex];
              if (event.type !== "warn") return null;

              return (
                <motion.div
                  key={i}
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    top: node.top,
                    left: node.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ opacity: [0, 1, 0], scale: [0.85, 1, 0.85] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                >
                  {/* Radar dot — visible on ALL sizes */}
                  <span className="h-3 w-3 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500" />

                  {/* Error label — tablet & up only */}
                  <span
                    className="
          hidden sm:flex items-center gap-1
          rounded-full bg-red-600/80 px-2 py-1
          text-[10px] text-white whitespace-nowrap
        "
                  >
                    <BiError className="h-3 w-3" />
                    {event.text}
                  </span>
                </motion.div>
              );
            })}


            {/* Stats */}
            <div
              className="absolute bottom-[-10px] left-1/2
                w-[92%] sm:w-full max-w-md xl:max-w-lg
                -translate-x-1/2
                rounded-2xl border border-white/10
                bg-[#0B0D14]/90 p-3 backdrop-blur
                flex justify-between gap-2"
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-lg bg-white/5
                    px-2 py-2 text-center text-sm text-white/80"
                >
                  <div className="text-lg font-semibold text-emerald-300">
                    {statsCount[i]}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
