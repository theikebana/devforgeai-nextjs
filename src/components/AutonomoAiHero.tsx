"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight} from "lucide-react";
import { BsRobot } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import DotGrid from "@/components/dotgrid";

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
   Particles (original logic retained)
---------------------------------------- */
const PARTICLE_CONFIGS = [...Array(14)].map(() => ({
  top: 20 + Math.random() * 60,
  left: 20 + Math.random() * 60,
  duration: 3 + Math.random() * 3,
  delay: Math.random() * 2,
}));

export default function AutonomoAIHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] py-16 xl:py-24 2xl:py-32"
    >
      {/* DotGrid Background */}
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

      {/* Decorative Images */}
      <div className="absolute top-0 left-0 pointer-events-none z-0">
        <Image src="/herodecorleft.png" alt="" width={1000} height={1000} />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image src="/herodecorright.png" alt="" width={1000} height={1000} />
      </div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[1000px] bg-[#0360A7]/40 blur-[190px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 xl:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C5E6FF]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              SECURE • SELF HOSTED • AI AGENTS
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="text-[30px] sm:text-[36px] xl:text-[42px] font-medium tracking-tight text-white leading-[1.15]"
            >
              One platform for enterprise search,
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                {" "}
                custom AI agents
              </span>{" "}
              and secure deployment.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="max-w-[34ch] mx-auto lg:mx-0 text-white/65 text-sm sm:text-base leading-relaxed"
            >
              Connect internal knowledge, deploy AI securely,
              and retain full infrastructure control.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Try live search <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center gap-2 text-[12px] text-white/60">
                <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
                Fully self-hosted & secure
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT ANIMATION (Original Preserved) ================= */}
{/* ================= RIGHT ANIMATION ================= */}
<div className="relative w-full flex justify-center">

  <motion.div
    className="relative w-full max-w-xl h-[460px] rounded-3xl glass-card border border-white/10 p-4 flex flex-col justify-between"
  >

    {/* ================= MAIN VISUAL ================= */}
    <div className="relative flex-1 rounded-2xl overflow-hidden backdrop-blur-md">

      {/* Outer animated boundary */}
      <motion.div
        className="absolute inset-4 rounded-2xl border border-[#38BDF8]/20"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Vertical spine */}
      <motion.div
        className="absolute left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#38BDF8]/60 to-transparent backdrop-blur-2xl"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* DATA STREAMS */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-0 h-[1px] w-[45%] bg-gradient-to-r from-transparent to-[#38BDF8]/60"
          style={{ top: 80 + i * 55 }}
          animate={{ opacity: [0, 1, 0], x: [-40, 0, 0] }}
          transition={{
            duration: 2.5,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}

      {/* CENTER ICONS */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6">
        {[IoIosSearch, BsRobot, CiServer].map((Icon, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-full border border-[#38BDF8]/30 bg-white/5 backdrop-blur-md shadow-[0_0_60px_rgba(56,189,248,0.35)]"
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 35px rgba(56,189,248,0.25)",
                "0 0 90px rgba(56,189,248,0.45)",
                "0 0 35px rgba(56,189,248,0.25)",
              ],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              delay: idx * 0.2,
            }}
          >
            <Icon className="h-12 w-12 text-[#38BDF8]" />
          </motion.div>
        ))}
      </div>

      {/* PARTICLES */}
      {PARTICLE_CONFIGS.map((config, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#38BDF8]/70"
          style={{ top: `${config.top}%`, left: `${config.left}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            delay: config.delay,
          }}
        />
      ))}
    </div>

    {/* ================= STATS ================= */}
    <div className=" flex justify-between gap-3">
      {[
        { number: "125K", label: "Documents" },
        { number: "32", label: "Agents" },
        { number: "99.9%", label: "Uptime" },
        { number: "1.2M", label: "Queries" },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-center"
        >
          <div className="text-lg font-semibold text-[#AEDCFF]">
            {stat.number}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/60">
            {stat.label}
          </div>
        </div>
      ))}
    </div>

  </motion.div>
</div>


        </motion.div>
      </div>
    </section>
  );
}
