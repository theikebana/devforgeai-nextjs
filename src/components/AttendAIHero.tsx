"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { BsCameraVideo, BsRobot } from "react-icons/bs";
import { CiServer } from "react-icons/ci";

/* ------------------ SAMPLE ATTENDANCE EVENTS ------------------ */
const ATTENDANCE = [
  {
    name: "Rahul Verma",
    role: "Employee • ID 1023",
    avatar: "https://i.pravatar.cc/80?img=12",
    status: "Checked in • 09:02 AM",
  },
  {
    name: "Aisha Khan",
    role: "Student • Roll 45",
    avatar: "https://i.pravatar.cc/80?img=32",
    status: "Checked in • 09:04 AM",
  },
  {
    name: "Daniel Chen",
    role: "Staff • ID 778",
    avatar: "https://i.pravatar.cc/80?img=18",
    status: "Checked in • 09:05 AM",
  },
];

export default function AttendAIHero() {
  return (
    <section className="relative overflow-hidden bg-[#07090E] py-12 lg:py-24">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-sky-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1440px] mx-auto rounded-4xl border border-white/5 bg-[#020617] p-8">
        <motion.div className="grid grid-cols-4 items-center gap-12">
          {/* ================= LEFT ================= */}
          <div className="col-span-2 space-y-6 max-w-xl">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 border border-sky-400/40 shadow-lg shadow-sky-500/20"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <span className="text-xl font-bold text-white">A</span>
              </motion.div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  AttendAI
                </h1>
                <p className="text-xs md:text-sm text-white/60">
                  Facial Recognition Attendance
                </p>
              </div>
            </div>

            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-100/80 backdrop-blur">
              <Sparkles className="h-3 w-3 text-sky-300" />
              <span className="uppercase tracking-[0.18em] text-[10px]">
                Computer vision • IP cameras
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-[38px] font-semibold tracking-tight text-white">
              Automated attendance <br />
              <span className="text-sky-400">
                powered by face recognition
              </span>
            </h2>

            {/* Description */}
            <p className="text-base text-white/65 leading-relaxed">
              Eliminate manual roll calls. AttendAI uses real-time facial
              recognition, IP camera feeds, and AI validation to deliver
              accurate, tamper-proof attendance with instant reports.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:bg-sky-400"
              >
                View live demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <span className="flex items-center gap-2 text-xs text-white/55">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                Secure & privacy-first
              </span>
            </div>
          </div>


<div className="col-span-2 relative border border-white/10 shadow-2xl p-2 rounded-2xl">
  <div className="h-[460px] relative">
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
  className="absolute top-1 z-[2] grid grid-cols-5 grid-rows-3 gap-4 p-10 place-items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  {[
    { img: 11, id: "EMP-1023", conf: "99.2%" },
    { img: 32, id: "EMP-2044", conf: "98.7%" },
    { img: 18, id: "EMP-3319", conf: "97.9%" },
    { img: 44, id: "EMP-1198", conf: "96.8%" },
    { img: 21, id: "EMP-2201", conf: "97.1%" },

    // { img: 7, id: "EMP-8891", conf: "98.1%" },
    // { img: 56, id: "EMP-4402", conf: "96.4%" },
    // { img: 13, id: "EMP-7710", conf: "99.0%" },
    // { img: 29, id: "EMP-6621", conf: "97.6%" },
    // { img: 61, id: "EMP-5508", conf: "96.9%" },

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
        <img
          src={`https://i.pravatar.cc/150?img=${face.img}`}
          className="w-full h-full object-cover contrast-110 grayscale-[20%]"
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


      {/* ================= DASHBOARD ================= */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[96%]
          grid grid-cols-6 gap-3 bg-[#020617]/85 backdrop-blur
          border border-white/10 rounded-xl p-3"
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
              rounded-lg bg-[#0b111c]/70 border border-white/10 py-2"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: idx * 0.12 }}
          >
            <span className={`text-lg font-bold ${stat.color}`}>
              {stat.value}
            </span>
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
