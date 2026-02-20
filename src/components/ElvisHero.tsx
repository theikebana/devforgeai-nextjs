"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Target,
  Layers,
  ArrowRight,
  Play,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import DotGrid from "@/components/dotgrid";

/* ----------------------------------------
   Motion presets (same as VIRA)
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
   ELVIS stats
---------------------------------------- */
const STATS = [
  { label: "Leads Tracked", value: 1240 },
  { label: "Active Opportunities", value: 312 },
  { label: "Assigned Today", value: 86 },
  { label: "Conversion Rate", value: 28 },
];

export default function ElvisHero() {
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
      className="relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] py-12 lg:py-16 xl:py-24 2xl:py-32"
    >
      {/* DotGrid — same as VIRA */}
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={15}
        baseColor="#181322ff"
        activeColor="#0078D4"
        proximity={280}
        shockRadius={280}
        shockStrength={5}
        resistance={450}
        returnDuration={1.5}
        autoMode
      />

      {/* Background images */}
      <div className="absolute top-0 left-0 pointer-events-none z-0">
        <Image src="/herodecorleft.png" alt="" width={1000} height={1000} />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image src="/herodecorright.png" alt="" width={1000} height={1000} />
      </div>

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[1159px] bg-[#0360A7]/60 blur-[190px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-10 xl:gap-12 lg:grid-cols-2"
        >
          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-1 space-y-5 text-center lg:text-left">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 mx-auto lg:mx-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C5E6FF]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              JOB LEADS MANAGEMENT & ANALYTICS
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-medium tracking-[-0.02em] text-white text-[26px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
            >
              ELVIS centralizes your sales pipeline —
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                {" "}
                discovering, assigning
              </span>{" "}
              and optimizing leads in real time.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto lg:mx-0 max-w-[32ch] sm:max-w-md text-sm md:text-base leading-relaxed text-white/65"
            >
              Replace spreadsheets and manual routing with intelligent lead
              discovery, automated assignment, and real-time analytics built
              for modern sales teams.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Get a live demo <ArrowRight className="h-4 w-4" />
              </Link>

              <button className="glass-card inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#C5E6FF] hover:bg-white/10 transition">
                <Play className="h-4 w-4 text-[#38BDF8]" />
                Product overview
              </button>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="flex items-center gap-2 justify-center lg:justify-start text-[11px] text-white/55"
            >
              <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
              Built for scale — secure, reliable, and sales-ready
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Radar Style */}
          <div className="relative mx-auto aspect-square w-full order-1 lg:order-2 max-w-[260px] sm:max-w-[300px] md:max-w-[340px] xl:max-w-md">
            <div className="absolute inset-0 rounded-full border border-[#38BDF8]/20 bg-gradient-to-b from-[#0360A7]/10 to-black/80" />

            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(0,120,212,0.35), transparent 38%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-8 rounded-full border border-[#38BDF8]/10" />
            <div className="absolute inset-20 rounded-full border border-[#38BDF8]/10" />

            {/* Feature nodes */}
            {[
              { icon: Target, label: "Lead Discovery", top: "30%", left: "65%" },
              { icon: Layers, label: "Smart Assignment", top: "60%", left: "30%" },
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
                animate={{ opacity: [0, 1, 0], scale: [0.9, 1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0078D4]/30 text-[#C5E6FF]">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="hidden sm:flex text-[10px] text-white whitespace-nowrap bg-[#0078D4]/70 px-2 py-1 rounded-full">
                  {item.label}
                </span>
              </motion.div>
            ))}

            {/* Stats (exact VIRA glass style) */}
            <div className="absolute bottom-[-90%] left-1/2 w-[92%] sm:w-full max-w-md xl:max-w-lg -translate-x-1/2 rounded-xl glass-card border border-white/5 bg-[#0C122812]/95 p-3 backdrop-blur-md flex justify-between gap-2">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-lg bg-white/5 px-2 py-2 text-center text-sm text-white/80"
                >
                  <div className="text-lg font-semibold text-[#AEDCFF]">
                    {statsCount[i]}
                    {stat.label === "Conversion Rate" && "%"}
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
