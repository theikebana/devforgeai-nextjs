"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Play, Radar } from "lucide-react";

export default function lAttendAIHero() {
  return (
    <section className="relative overflow-hidden bg-[#07090E] py-8 lg:py-12">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-sky-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl border border-white/5 bg-[#020617] px-4 py-8 lg:py-12 lg:p-8">
        <motion.div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-12">
          {/* ================= LEFT ================= */}

          <div
            className="order-2 lg:order-none lg:col-span-2 space-y-4
              text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2
                mx-auto lg:mx-0
                rounded-full border border-white/10
                bg-white/5 px-3 py-1
                text-[10px] text-emerald-200"
            >
              <Radar className="h-3.5 w-3.5 text-emerald-400" />
              AUTOMATED ATTENDANCE
            </motion.div>

            <motion.h1
              className="font-semibold tracking-snug text-white
                text-[26px] leading-[1.1]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                xl:text-[40px]"
            >
              Automated attendance <br />
              <span className="text-sky-400">
                powered by face recognition
              </span>
            </motion.h1>

            <motion.p

              className=" lg:mx-0
                w-full sm:max-w-md
                text-[14px] sm:text-sm md:text-base
                leading-relaxed text-white/65"
            >
              Eliminate manual roll calls. AttendAI uses real-time facial
              recognition, IP camera feeds, and AI validation to deliver
              accurate, tamper-proof attendance with instant reports.
            </motion.p>

            <motion.div

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



          <div className="col-span-1 lg:col-span-2 relative border border-white/10 shadow-2xl p-2 rounded-2xl order-1 lg:order-none">
            <div className="h-[280px] lg:h-[460px] relative">
              <motion.div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-black">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-black" />
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Header */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  LIVE CAMERA • MAIN ENTRANCE
                </div>

                {/* Grid */}
                <motion.div
                  className="absolute inset-0
          bg-[linear-gradient(rgba(56,189,248,0.045)_1px,transparent_1px),
              linear-gradient(90deg,rgba(56,189,248,0.045)_1px,transparent_1px)]
          bg-[size:44px_44px]"
                  animate={{ opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-sky-400/80 blur-[1px]"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* ================= GROUP FACES ================= */}
                {/* ================= GROUP FACES (5 x 3 GRID) ================= */}
                <motion.div
                  className="absolute top-1 z-[2]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Mobile view: only first 3 items, horizontally centered */}
                  <div className="flex justify-center gap-4 lg:hidden p-4">
                    {[
                      { img: 11, id: "EMP-1023", conf: "99.2%" },
                      { img: 32, id: "EMP-2044", conf: "98.7%" },
                      { img: 18, id: "EMP-3319", conf: "97.9%" },
                    ].map((face, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center justify-center w-[90px]"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="relative w-[90px] h-[90px] rounded-md overflow-hidden border border-sky-400/80">
                          <Image
                            src={`https://i.pravatar.cc/150?img=${face.img}`}
                            alt={`Recognized face ${face.id}`}
                            fill
                            className="object-cover contrast-110 grayscale-[20%]"
                          />
                          {/* Corner ticks */}
                          <span className="absolute top-0 left-0 h-3 w-3 border-l-2 border-t-2 border-sky-400" />
                          <span className="absolute top-0 right-0 h-3 w-3 border-r-2 border-t-2 border-sky-400" />
                          <span className="absolute bottom-0 left-0 h-3 w-3 border-l-2 border-b-2 border-sky-400" />
                          <span className="absolute bottom-0 right-0 h-3 w-3 border-r-2 border-b-2 border-sky-400" />
                        </div>
                        {/* Label */}
                        <div className="mt-1 rounded bg-[#020617]/90 backdrop-blur border border-sky-400/30 px-2 py-[2px] text-[10px] text-sky-300 text-center">
                          ✓ {face.id} · {face.conf}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tablet and desktop: full 5x3 grid */}
                  <motion.div className="hidden lg:grid lg:grid-cols-5 lg:grid-rows-3 gap-4 p-10 place-items-center">
                    {[
                      { img: 11, id: "EMP-1023", conf: "99.2%" },
                      { img: 32, id: "EMP-2044", conf: "98.7%" },
                      { img: 18, id: "EMP-3319", conf: "97.9%" },
                      { img: 44, id: "EMP-1198", conf: "96.8%" },
                      { img: 21, id: "EMP-2201", conf: "97.1%" },
                      { img: 5, id: "EMP-9081", conf: "98.3%" },
                      { img: 47, id: "EMP-3344", conf: "97.2%" },
                      { img: 19, id: "EMP-1182", conf: "96.5%" },
                      { img: 38, id: "EMP-7749", conf: "98.8%" },
                      { img: 25, id: "EMP-2217", conf: "97.0%" },
                    ].map((face, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="relative w-[90px] h-[90px] rounded-md overflow-hidden border border-sky-400/80">
                          <Image
                            src={`https://i.pravatar.cc/150?img=${face.img}`}
                            alt={`Recognized face ${face.id}`}
                            fill
                            className="object-cover contrast-110 grayscale-[20%]"
                          />
                          {/* Corner ticks */}
                          <span className="absolute top-0 left-0 h-3 w-3 border-l-2 border-t-2 border-sky-400" />
                          <span className="absolute top-0 right-0 h-3 w-3 border-r-2 border-t-2 border-sky-400" />
                          <span className="absolute bottom-0 left-0 h-3 w-3 border-l-2 border-b-2 border-sky-400" />
                          <span className="absolute bottom-0 right-0 h-3 w-3 border-r-2 border-b-2 border-sky-400" />
                        </div>
                        {/* Label */}
                        <div className="mt-1 rounded bg-[#020617]/90 backdrop-blur border border-sky-400/30 px-2 py-[2px] text-[10px] text-sky-300 text-center">
                          ✓ {face.id} · {face.conf}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>






                {/* ================= DASHBOARD ================= */}
                <motion.div
                  className="block absolute bottom-4 left-1/2 -translate-x-1/2 w-[96%]
    grid grid-flow-col auto-cols-[calc(100%/3)] lg:grid-flow-row lg:grid-cols-6 gap-3 
    bg-[#020617]/85 backdrop-blur border border-white/10 rounded-xl p-3
    overflow-x-auto lg:overflow-visible"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { label: "Today", value: 128, color: "text-white" },
                    { label: "Present", value: 114, color: "text-emerald-400" },
                    { label: "Absent", value: 14, color: "text-rose-400" },
                    { label: "Late", value: 9, color: "text-amber-400" },
                    { label: "On-time", value: "92%", color: "text-sky-400" },
                    { label: "Cameras", value: 6, color: "text-indigo-400" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="relative flex flex-col items-center justify-center
        rounded-lg bg-[#0b111c]/70 border border-white/10 py-2 min-w-[100px]"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.12 }}
                    >
                      <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
                      <span className="text-[10px] uppercase tracking-wide text-white/60">
                        {stat.label}
                      </span>

                      <motion.span
                        className="absolute top-1 right-1 h-2 w-2 rounded-full bg-sky-400"
                        animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

              </motion.div>
            </div>
          </div>



        </motion.div>
      </div>
    </section>
  );
}
