"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Mic, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { productsById } from "@/config/products";

const FEATURES = [
  { label: "One-click walkthroughs", icon: Play },
  { label: "AI voice narration", icon: Mic },
  { label: "Docs-driven control", icon: FileText },
];

const PARTICLE_CONFIGS = [...Array(12)].map(() => ({
  top: 20 + Math.random() * 60,
  left: 20 + Math.random() * 60,
  duration: 3 + Math.random() * 3,
  delay: Math.random() * 2,
}));

export default function DemoAgentHero() {
  const stageProduct = productsById["demo-agent"];

  return (
    <section className="relative overflow-hidden bg-[#07090E] py-8 lg:py-12">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-emerald-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl border border-white/5 bg-[#020617] px-4 py-8 lg:py-12 lg:p-8">
        <motion.div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-12">
          {/* LEFT */}
          <div
            className="order-2 lg:order-none lg:col-span-2 space-y-4
              text-center lg:text-left"
          >
            <div
              className="inline-flex items-center gap-2
                mx-auto lg:mx-0
                rounded-full border border-white/10
                bg-white/5 px-3 py-1
                text-[10px] text-emerald-200"
            >
              <Play className="h-3 w-3 text-emerald-300" />
              <span className="uppercase tracking-[0.18em] text-[10px]">
                Scripted Tour Automation • AI voice • Live Q&A
              </span>
            </div>

            <h2
              className="font-semibold tracking-snug text-white
                text-[26px] leading-[1.1]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                xl:text-[40px]"
            >
              Turn any web portal into{" "}
              <span className="text-emerald-400">
                a live-like, narrated product demo
              </span>
            </h2>

            <p
              className="lg:mx-0
                w-full sm:max-w-md mx-auto
                text-[14px] sm:text-sm md:text-base
                leading-relaxed text-white/65"
            >
              {stageProduct.description} STAGE watches real user flows, captures
              each step, generates a clean demo flow, and pairs it with{" "}
              <span className="text-white/85 font-medium">
                written narration and AI voice
              </span>{" "}
              so your demos feel human, consistent, and repeatable.
            </p>

            <div
              className="flex flex-wrap gap-3
                justify-center lg:justify-start text-sm text-white/70"
            >
              {FEATURES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex items-center gap-2 font-medium">
                      <Icon className="h-4 w-4 text-emerald-400" />
                      {item.label}
                    </span>
                    {i !== FEATURES.length - 1 && (
                      <span className="hidden sm:block h-4 w-px bg-white/15" />
                    )}
                  </div>
                );
              })}
            </div>

            <div
              className="flex items-center gap-4 pt-4
                justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-xl
                  bg-emerald-500 px-5 py-3 text-sm font-medium text-black
                  hover:bg-emerald-400 transition"
              >
                See STAGE in action
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="flex items-center gap-2 text-xs text-white/55">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Live-like demos · AI voice
              </span>
            </div>
          </div>

          {/* RIGHT — DEMO AGENT ANIMATION */}
          <div className="col-span-1 lg:col-span-2 relative border border-white/10 shadow-2xl p-2 rounded-2xl order-1 lg:order-none">
            <div className="h-[320px] lg:h-[460px] relative flex items-center justify-center">
              <motion.div className="relative h-[90%] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#020617] via-[#020617] to-black">
                {/* Outer glow frame */}
                <motion.div
                  className="absolute inset-6 rounded-2xl border border-emerald-400/15"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Vertical flow spine */}
                <motion.div
                  className="absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent"
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                />

                {/* LEFT: CAPTURE STREAMS */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={`capture-${i}`}
                    className="absolute left-0 h-[1px] w-[45%] bg-gradient-to-r from-transparent to-emerald-400/60"
                    style={{ top: 120 + i * 55 }}
                    animate={{ opacity: [0, 1, 0], x: [-40, 0] }}
                    transition={{
                      duration: 2.4,
                      delay: i * 0.4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* RIGHT: NARRATION STREAMS */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`narrate-${i}`}
                    className="absolute right-0 h-[1px] w-[45%] bg-gradient-to-l from-transparent to-emerald-400/55"
                    style={{ top: 140 + i * 65 }}
                    animate={{ opacity: [0, 1, 0], x: [40, 0] }}
                    transition={{
                      duration: 2.8,
                      delay: 1.2 + i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* CENTER AGENT */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/35 bg-[#020617] shadow-[0_0_80px_rgba(16,185,129,0.45)]"
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 40px rgba(16,185,129,0.3)",
                        "0 0 120px rgba(16,185,129,0.55)",
                        "0 0 40px rgba(16,185,129,0.3)",
                      ],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Play className="h-9 w-9 text-emerald-400" />
                  </motion.div>
                </div>

                {/* ORBITING STEPS */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={`step-${i}`}
                    className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-emerald-400"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: `${80 + i * 18}px center`,
                    }}
                  />
                ))}

                {/* PULSE RING */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/25"
                  animate={{ scale: [0.7, 1.5], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: "easeOut",
                  }}
                />

                {/* FEATURE CHIPS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  {[
                    { label: "Capture", icon: Play },
                    { label: "Narrate", icon: Mic },
                    { label: "Run", icon: FileText },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-2 rounded-full bg-[#0b111c]/90 border border-emerald-400/25 px-4 py-1 text-xs text-white"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.2 }}
                    >
                      <item.icon className="h-4 w-4 text-emerald-400" />
                      {item.label}
                    </motion.div>
                  ))}
                </div>

                {/* PARTICLES */}
                {PARTICLE_CONFIGS.map((config, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/70"
                    style={{
                      top: `${config.top}%`,
                      left: `${config.left}%`,
                    }}
                    animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                    transition={{
                      duration: config.duration,
                      repeat: Infinity,
                      delay: config.delay,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
