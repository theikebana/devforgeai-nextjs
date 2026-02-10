"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  FileText,
  Bot,
  ShieldCheck,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { useEffect, useState } from "react";
import { BsRobot } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiGlobeHemisphereWestLight } from "react-icons/pi";

/* ----------------------------------------
   Motion presets (MATCH IAN)
---------------------------------------- */
const heroContainer = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
};

/* ----------------------------------------
   Right-side mock data
---------------------------------------- */
const SEARCH_RESULTS = [
  "HR Policy — Leave & Payroll",
  "Engineering Onboarding Docs",
  "Customer Support SOP",
  "Security Compliance Handbook",
];

export default function MoogleMindHero() {
  const random = (min: number, max: number) =>
    Math.round(min + Math.random() * (max - min));

  const [confidence, setConfidence] = useState(92);
  const [docsIndexed, setDocsIndexed] = useState(14236);
  const [activeAgents, setActiveAgents] = useState(6);
  const [queryIndex, setQueryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setConfidence(random(88, 97));
      setDocsIndexed(random(14000, 15000));
      setActiveAgents(random(4, 8));
      setQueryIndex((v) => (v + 1) % SEARCH_RESULTS.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#07090E] pt-24 pb-36"
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-emerald-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1440px] mx-auto rounded-4xl border border-white/5 bg-[#020617] p-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 items-center gap-12"
        >
          {/* -------------------------------- LEFT (UNCHANGED) */}
          <div className="col-span-2 space-y-6 max-w-xl">
           
              

            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur"
            >
              <Sparkles className="h-3 w-3 text-emerald-300" />
              <span className="uppercase tracking-[0.18em] text-[10px]">
                Open-source • Self-hosted • Custom agents
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-[38px] font-semibold tracking-tight text-white"
            >
              One platform for enterprise search, custom AI agents, and secure
              self-hosting.
            </motion.h2>

            <motion.p
              className="text-base text-white/65 leading-relaxed"
            >
              Connect your internal knowledge, build intelligent agents, and
              deploy fully on your own infrastructure — with complete control.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 pt-2"
            >
              <button className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:bg-emerald-400">
                Try live search
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>

              <span className="flex items-center gap-2 text-xs text-white/55">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Fully self-hosted & secure
              </span>
            </motion.div>
          </div>

          {/* ================= MOOGLEMIND — SOVEREIGN INTELLIGENCE SYSTEM ================= */}

          <div className="col-span-2 flex flex-col gap-2">

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
                {[...Array(14)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/70"
                    style={{ top: `${20 + Math.random() * 60}%`, left: `${20 + Math.random() * 60}%` }}
                    animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                    transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
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


        </motion.div>
      </div>
    </section>
  );
}
