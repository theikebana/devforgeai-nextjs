"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Play, Radar } from "lucide-react";
import DotGrid from "@/components/dotgrid";

export default function lAttendAIHero() {
  return (
    <section className="relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] py-12 lg:py-16">

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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[900px] bg-[#0360A7]/40 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C5E6FF]">
              <Radar className="h-3.5 w-3.5 text-[#38BDF8]" />
              AUTOMATED ATTENDANCE
            </div>

            <h1 className="text-[30px] sm:text-[36px] xl:text-[42px] font-medium text-white leading-[1.15]">
              Automated attendance
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                {" "}powered by face recognition
              </span>
            </h1>

            <p className="text-white/65 max-w-[34ch] mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              Real-time facial recognition, AI validation, and IP camera feeds
              delivering tamper-proof attendance with instant reporting.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Get a live demo <ArrowRight className="h-4 w-4" />
              </Link>

              <button className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 hover:bg-white/10">
                <Play className="h-4 w-4 text-[#38BDF8]" />
                Product overview
              </button>
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-start text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
              Running quietly in production — 24/7
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* OUTER GLASS */}
            <div className="glass-card p-4 rounded-3xl">

              {/* INNER FRAME */}
              <div className="glass-card h-[320px] lg:h-auto rounded-2xl relative overflow-hidden">

                {/* Animated grid */}
                <motion.div
                  className="absolute inset-0
                  bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),
                      linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)]
                  bg-[size:44px_44px]"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-[#38BDF8]/90 blur-sm"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* FACE GRID */}
                <div className="hidden lg:grid lg:grid-cols-5 gap-6 p-10 place-items-center relative z-10">
                  {[11, 32, 18, 44, 21, 5, 47, 19, 38, 25].map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="glass-card w-[90px] h-[90px] rounded-xl overflow-hidden">
                        <Image
                          src={`https://i.pravatar.cc/150?img=${img}`}
                          alt="Recognized face"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="glass-card mt-2 px-3 py-[4px] text-[10px] text-[#87CBFF] rounded-md">
                        ✓ Verified · 98%
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* DASHBOARD */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%] grid grid-cols-3 lg:grid-cols-6 gap-3 glass-card p-2 rounded-xl z-20">

                  {[
                    { label: "Today", value: 128 },
                    { label: "Present", value: 114 },
                    { label: "Absent", value: 14 },
                    { label: "Late", value: 9 },
                    { label: "On-time", value: "92%" },
                    { label: "Cameras", value: 6 },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="glass-card flex flex-col items-center justify-center py-2 rounded-md"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.12 }}
                    >
                      <span className="text-lg font-semibold text-[#AEDCFF]">
                        {stat.value}
                      </span>
                      <span className="text-[10px] uppercase tracking-wide text-white/60">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
