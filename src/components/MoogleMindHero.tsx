"use client";

import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import {
  Sparkles,
  Search,
  ShieldCheck,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { BsRobot } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

/* ----------------------------------------
    Motion presets
---------------------------------------- */
const heroContainer: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as Easing,
      staggerChildren: 0.08,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" as Easing },
  },
};

const PARTICLE_CONFIGS = [...Array(14)].map(() => ({
  top: 20 + Math.random() * 60,
  left: 20 + Math.random() * 60,
  duration: 3 + Math.random() * 3,
  delay: Math.random() * 2,
}));

export default function MoogleMindHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#07090E] py-12 lg:py-16 xl:py-20 2xl:py-24">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/4 -right-1/4 h-[100%] w-[100%] sm:h-[120%] sm:w-[80%] rounded-full bg-emerald-500/10 blur-[120px]"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/5 bg-[#020617] p-5 sm:p-8 lg:p-12"
        >
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-4 items-center">

            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-none lg:col-span-2 space-y-5 sm:space-y-6 max-w-xl text-center lg:text-left">
              <motion.div
                variants={heroItem}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur"
              >
                <Sparkles className="h-3 w-3 text-emerald-300" />
                <span className="uppercase tracking-[0.1em] sm:tracking-[0.18em] text-[9px] sm:text-[10px]">
                  Open-source • Self-hosted • AI agents
                </span>
              </motion.div>

              <motion.h2
                variants={heroItem}
                className="text-xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight text-white leading-tight"
              >
                One platform for enterprise search, custom AI agents, and secure self-hosting.
              </motion.h2>

              <motion.p
                variants={heroItem}
                className="text-xs sm:text-base text-white/65 leading-relaxed px-2 sm:px-0"
              >
                Connect your internal knowledge and deploy fully
                on your own infrastructure — with complete control.
              </motion.p>

              <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:bg-emerald-400 transition-colors">
                  Try live search
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>

                <span className="flex items-center gap-2 text-[11px] sm:text-xs text-white/55">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Fully self-hosted & secure
                </span>
              </motion.div>
            </div>

            {/* RIGHT VISUALS - ANIMATION FITTED FOR MOBILE */}
            <div className="order-1 lg:order-none lg:col-span-2 flex flex-col gap-3 sm:gap-4 w-full overflow-hidden md:hidden">

              {/* MAIN ANIMATION HERO - MOBILE HEIGHT REDUCED */}
              <div className="relative w-full aspect-[16/11] sm:aspect-auto sm:h-[350px]">
                <motion.div
                  className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-[#020617] via-[#020617] to-black"
                >
                  {/* Boundary Ring */}
                  <motion.div
                    className="absolute inset-3 sm:inset-6 rounded-xl sm:rounded-2xl border border-emerald-400/15"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />

                  {/* Vertical spine */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" />

                  {/* DATA STREAMS - SCALED FOR MOBILE */}
                  {[0, 1, 2, 3].map(i => (
                    <motion.div
                      key={`stream-${i}`}
                      className="absolute h-px w-[40%] bg-gradient-to-r from-transparent to-emerald-400/40"
                      style={{ top: `${20 + i * 20}%`, left: 0 }}
                      animate={{ opacity: [0, 1, 0], x: [-20, 10, 10] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    />
                  ))}

                  {/* CENTRAL ICONS - DYNAMICALLY SIZED */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-6">
                    {[IoIosSearch, BsRobot, CiServer].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-center p-2.5 sm:p-4 rounded-full border border-emerald-400/30 bg-[#020617] shadow-lg"
                        animate={{
                          y: [0, -5, 0],
                          boxShadow: [
                            "0 0 15px rgba(16,185,129,0.1)",
                            "0 0 40px rgba(16,185,129,0.3)",
                            "0 0 15px rgba(16,185,129,0.1)",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: idx * 0.3,
                        }}
                      >
                        <Icon className="h-6 w-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-emerald-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* MOBILE-ONLY LABELS (PILLS) */}
                  <div className="absolute bottom-3 left-0 w-full flex justify-center gap-2 px-2 sm:hidden">
                    <span className="text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/50">SEARCH</span>
                    <span className="text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/50">AGENTS</span>
                    <span className="text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/50">SECURE</span>
                  </div>

                  {/* DESKTOP-ONLY FEATURE LABELS */}
                  <div className="absolute left-0 bottom-4 w-full hidden sm:flex justify-around px-2">
                    {[
                      { title: "Search", icon: Search },
                      { title: "Agents", icon: Cpu },
                      { title: "Secure", icon: ShieldCheck },
                    ].map((card, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b111c]/90 border border-emerald-400/25 text-white">
                        <card.icon className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">{card.title}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* STATS BAR - FITTED FOR MOBILE (Scrollable or Grid) */}
              <motion.div
                className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-[#0b111c]/32 border border-white/10 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {[
                  { number: "125K", label: "Docs" },
                  { number: "32", label: "Agents" },
                  { number: "99%", label: "Uptime" },
                  { number: "24/7", label: "Support" },
                  { number: "1.2M", label: "Queries" },
                ].map((stat, idx) => (
                  <div key={idx} className={`flex flex-col items-center p-2 rounded-lg bg-white/5 ${idx > 2 ? 'hidden sm:flex' : 'flex'}`}>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400">{stat.number}</span>
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-tighter text-white/40 text-center">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

            </div>

            <div className="lg:col-span-2 flex flex-col gap-2 order-1 lg:order-none hidden md:flex">

              {/* ================= MAIN ANIMATION HERO ================= */}
              <div className="h-[350px] relative">
                <motion.div
                  className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#020617] via-[#020617] to-black"
                >
                  {/* Outer boundary */}
                  <motion.div
                    className="absolute inset-6 rounded-2xl border border-emerald-400/15"
                    animate={{ opacity: [0.2, 0.45, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Vertical spine */}
                  <motion.div
                    className="absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/55 to-transparent"
                    animate={{ opacity: [0.35, 0.9, 0.35] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* DATA STREAMS */}
                  {[0, 1, 2, 3, 4].map(i => (
                    <motion.div
                      key={`left-${i}`}
                      className="absolute left-0 h-[1px] w-[45%] bg-gradient-to-r from-transparent to-emerald-400/60"
                      style={{ top: 120 + i * 55 }}
                      animate={{ opacity: [0, 1, 0], x: [-40, 0, 0] }}
                      transition={{ duration: 2.4, delay: i * 0.4, repeat: Infinity, repeatDelay: 2, ease: "easeOut" }}
                    />
                  ))}
                  {[0, 1, 2, 3].map(i => (
                    <motion.div
                      key={`right-${i}`}
                      className="absolute right-0 h-[1px] w-[45%] bg-gradient-to-l from-transparent to-emerald-400/55"
                      style={{ top: 140 + i * 65 }}
                      animate={{ opacity: [0, 1, 0], x: [40, 0, 0] }}
                      transition={{ duration: 2.8, delay: 1.2 + i * 0.5, repeat: Infinity, repeatDelay: 2, ease: "easeOut" }}
                    />
                  ))}

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-6">
                    {[IoIosSearch, BsRobot, CiServer].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-center p-4 rounded-full border border-emerald-400/35 bg-[#020617] shadow-[0_0_60px_rgba(16,185,129,0.35)]"
                        animate={{
                          scale: [1, 1.08, 1],
                          boxShadow: [
                            "0 0 35px rgba(16,185,129,0.25)",
                            "0 0 90px rgba(16,185,129,0.45)",
                            "0 0 35px rgba(16,185,129,0.25)",
                          ],
                        }}
                        transition={{
                          duration: 3.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.2, // slightly offset pulses for a dynamic effect
                        }}
                      >
                        <Icon className="h-12 w-12 text-emerald-400" />
                      </motion.div>
                    ))}
                  </div>


                  {/* PULSE RING */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-emerald-400/25"
                    animate={{ scale: [0.6, 1.4], opacity: [0.6, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4, ease: "easeOut" }}
                  />

                  {/* ================= CENTERED FEATURE CARDS ================= */}
                  <div className="absolute left-1/2 bottom-2 -translate-x-1/2 flex w-full justify-around">
                    {[
                      { title: "Enterprise Search", desc: "Search across your knowledge base seamlessly.", icon: Search },
                      { title: "Custom AI Agents", desc: "Autonomous agents tailored to your workflows.", icon: Cpu },
                      { title: "Secure Self-Hosting", desc: "Deploy safely within your own infrastructure.", icon: ShieldCheck },
                    ].map((card, idx) => (
                      <motion.div
                        key={idx}
                        className="w-auto px-4 py-1 gap-2 items-center  rounded-full bg-[#0b111c]/90 border border-emerald-400/25 shadow-lg text-white text-sm text-center flex  "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 0.8 }}
                      >
                        <card.icon className="h-5 w-5  text-emerald-400" />
                        <p className="font- text-sm">{card.title}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* VECTOR PARTICLES */}
                  {PARTICLE_CONFIGS.map((config, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/70"
                      style={{ top: `${config.top}%`, left: `${config.left}%` }}
                      animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                      transition={{ duration: config.duration, repeat: Infinity, delay: config.delay }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* ================= SLEEK INFO DASHBOARD ================= */}
              <motion.div
                className="w-full max-w-5xl mx-auto p-2 rounded-xl bg-[#0b111c]/32 border border-white/10 shadow-md flex gap-1 justify-between text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {[
                  { number: "125K", label: "Documents Indexed" },
                  { number: "32", label: "Active Agents" },
                  { number: "99.9%", label: "Uptime" },
                  { number: "24/7", label: "Support Hours" },
                  { number: "1.2M", label: "Queries Processed" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center p-4 border border-white/10 rounded-md w-auto">
                    <span className="text-lg font-bold">{stat.number}</span>
                    <span className="text-xs text-white/70 mt-1 text-center">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}