"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Radar,
  ShieldCheck,
  ArrowRight,
  Play,
  AlertTriangle,
  CheckCircle2,
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
   Fake live security events with levels
---------------------------------------- */
const EVENTS = [
  { type: "warn", level: "high", text: "Over-permissive IAM role detected" },
  { type: "warn", level: "medium", text: "Unencrypted volume flagged" },
  { type: "warn", level: "low", text: "Unused security group found" },
  { type: "fix", level: "info", text: "Public storage access auto-blocked" },
  { type: "fix", level: "info", text: "CIS benchmark drift corrected" },
];

/* ----------------------------------------
   Stats metrics for dashboard chips
---------------------------------------- */
const STATS = [
  { label: "Assets Monitored", value: 1200 },
  { label: "Risks Detected", value: 48 },
  { label: "Auto-Resolved", value: 36 },
  { label: "Alerts Today", value: 12 },
];

/* ----------------------------------------
   Radar nodes dynamically mapped to EVENTS
---------------------------------------- */
const RADAR_NODES = [
  { top: "25%", left: "65%", eventIndex: 0 },
  { top: "40%", left: "35%", eventIndex: 1 },
  { top: "60%", left: "55%", eventIndex: 2 },
  { top: "70%", left: "25%", eventIndex: 3 },
  { top: "50%", left: "75%", eventIndex: 4 },
];

export default function ViraHero() {
  const [eventIndex, setEventIndex] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [statsCount, setStatsCount] = useState(STATS.map(() => 0));

  /* rotate ticker events */
  useEffect(() => {
    const i = setInterval(
      () => setEventIndex((v) => (v + 1) % EVENTS.length),
      3200
    );
    return () => clearInterval(i);
  }, []);

  /* sticky CTA on scroll */
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 280);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Animate stats count up */
  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCount((prev) =>
        prev.map((v, i) => {
          if (v < STATS[i].value)
            return Math.min(v + Math.ceil(STATS[i].value / 60), STATS[i].value);
          return v;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden pt-20 pb-36 lg:pt-28 lg:pb-36 bg-[#07090E]"
      >
        {/* Ambient glow */}
        <motion.div
          className="pointer-events-none absolute -top-1/2 -right-1/4 w-[80%] h-[120%] rounded-full bg-emerald-500/20 blur-[120px]"
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Clouds behind radar */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute w-64 h-24 bg-white/10 rounded-full blur-3xl top-20 left-1/4" />
          <div className="absolute w-48 h-20 bg-white/5 rounded-full blur-2xl top-40 right-1/4" />
          <div className="absolute w-72 h-28 bg-white/5 rounded-full blur-3xl top-32 left-1/2 -translate-x-1/2" />
        </motion.div>

        <div className="relative max-w-[1440px] p-12 mx-auto rounded-4xl bg-[#020617] border border-white/5">
          <motion.div
              initial="hidden"
            animate="visible"
            className="grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center"
          >
            {/* LEFT — Copy & CTA */}
            <div className="space-y-5">
              <motion.div
  
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur-sm"
              >
                <Radar className="h-3.5 w-3.5 text-emerald-300" />
                <span className="uppercase tracking-[0.18em] text-[10px]">
                  Autonomous Cloud Security
                </span>
              </motion.div>

              <motion.h1
  
                className="text-3xl md:text-[34px] lg:text-[40px] font-semibold tracking-tight text-white"
              >
                VIRA continuously secures your cloud —
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                  {" "}
                  detecting, prioritizing,
                </span>{" "}
                and resolving risks in real time.
              </motion.h1>

              <motion.p
  
                className="text-sm md:text-base text-white/65 leading-relaxed max-w-xl"
              >
                Always-on security scanning, automated compliance enforcement,
                and threat intelligence that adapts as your infrastructure
                evolves.
              </motion.p>

              {/* CTA */}
              <motion.div
  
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition">
                  Get a live demo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur hover:bg-white/10">
                  <Play className="h-4 w-4 text-emerald-300" />
                  Product overview
                </button>
              </motion.div>

              <motion.div
  
                className="flex items-center gap-2 text-[11px] text-white/55"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Running quietly in production — 24/7
              </motion.div>
            </div>

            {/* RIGHT — Radar System */}
            <motion.div

              className="relative mx-auto aspect-square w-full max-w-md"
            >
              {/* Base */}
              <div className="absolute inset-0 rounded-full border border-emerald-400/20 bg-gradient-to-b from-emerald-500/5 to-black/80 backdrop-blur-xl" />

              {/* Radar sweep */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(16,185,129,0.35), transparent 38%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Rings */}
              <div className="absolute inset-8 rounded-full border border-emerald-400/10" />
              <div className="absolute inset-20 rounded-full border border-emerald-400/10" />

              {/* Radar threat nodes + multiple warning pills */}
              {RADAR_NODES.map((node, i) => {
                const event = EVENTS[node.eventIndex];
                const isWarn = event.type === "warn";
                return (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col items-center gap-1"
                    style={{ top: node.top, left: node.left, transform: "translate(-50%, -50%)" }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: isWarn ? [0.8, 1, 0.8] : [0.6, 1.4, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  >
                    {/* Node circle */}
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isWarn ? "bg-red-500" : "bg-emerald-400"
                      }`}
                    />

                    {/* Warning pill with icon */}
                    {isWarn && (
                      <span className="flex items-center gap-1 bg-red-600/80 px-2 py-1 rounded-full text-[10px] text-white/90 whitespace-nowrap">
                        <BiError className="h-3 w-3 text-white" />
                        {event.text}
                      </span>
                    )}
                  </motion.div>
                );
              })}

              {/* Ticker above stats */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={eventIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-[90px] left-1/2 w-fit -translate-x-1/2 rounded-xl border border-white/10 bg-slate-950/90 p-3 backdrop-blur z-20"
                >
                  <div className="flex items-center gap-2 text-xs text-white/75">
                    {EVENTS[eventIndex].type === "warn" ? (
                      <AlertTriangle className="h-4 w-4 text-amber-300" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    )}
                    <span>{EVENTS[eventIndex].text}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats dashboard overlay — single sleek row */}
              <motion.div
                className="absolute bottom-[-10px] left-1/2 w-full max-w-lg -translate-x-1/2 rounded-2xl bg-[#0B0D14]/90 border border-white/10 p-3 backdrop-blur-lg flex justify-between gap-3 shadow-xl z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 text-center rounded-lg bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    <div className="text-lg font-semibold text-emerald-300">
                      {statsCount[i]}
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

      {/* Sticky CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-xl shadow-xl"
          >
            <button className="flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200">
              Get a live demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
