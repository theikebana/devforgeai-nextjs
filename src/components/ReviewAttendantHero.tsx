"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { BsRobot } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import DotGrid from "@/components/dotgrid";

/* ------------------------ Sample Testimonial Data ------------------------ */
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/80?img=3",
    text: "Amazing platform! The AI agents are smart, intuitive, and secure.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/80?img=5",
    text: "Secure, fast, and reliable. AI integration made workflows effortless.",
    rating: 4,
  },
  {
    name: "Emily Roberts",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/80?img=8",
    text: "Unified dashboard is a game-changer. Real-time alerts keep us ahead.",
    rating: 5,
  },
];

export default function ReviewAttendantHero() {
  return (
    <section className="relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] py-12 lg:py-16 xl:py-24 2xl:py-32">

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

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[1000px] bg-[#0360A7]/40 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C5E6FF]">
              MULTI-PLATFORM REVIEW INTELLIGENCE
            </div>

            <h2 className="text-[30px] sm:text-[36px] xl:text-[42px] font-medium text-white leading-[1.15]">
              One platform for all
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                {" "}your reviews & reputation
              </span>
            </h2>

            <p className="text-white/65 max-w-[34ch] mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              Connect review platforms, classify sentiment with AI,
              and manage responses from one intelligent dashboard.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105">
                Try live dashboard <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-white/60">
                <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
                Fully self-hosted & secure
              </div>
            </div>
          </div>

          {/* ================= RIGHT GLASS TESTIMONIAL AREA ================= */}
          <div className="relative">

            {/* Main Glass Container */}
            <div className="glass-card relative rounded-xl border border-white/10 bg-[#0C1228]/70 backdrop-blur-xl p-8 overflow-hidden">

              {/* Vertical animated spine */}
              <motion.div
                className="absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#38BDF8]/60 to-transparent"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Testimonial Cards */}
              <div className="flex justify-center gap-2 ">
                {TESTIMONIALS.map((t, idx) => (
                  <div
                    key={idx}
                    className="glass-card w-[280px] shrink-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
                  >
                    <div className="flex gap-4">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="rounded-full border-2 border-[#38BDF8]"
                      />
                      <div>
                        <h3 className="text-white font-semibold text-sm">{t.name}</h3>
                        <p className="text-xs text-white/60">{t.role}</p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${i < t.rating ? "text-[#38BDF8]" : "text-white/30"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 mt-3 leading-snug">
                      “{t.text}”
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom AI Icons */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
                {[IoIosSearch, BsRobot, CiServer].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    className="p-3 rounded-full border border-[#38BDF8]/30 bg-[#0C1228] shadow-[0_0_40px_rgba(56,189,248,0.35)]"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 20px rgba(56,189,248,0.25)",
                        "0 0 60px rgba(56,189,248,0.45)",
                        "0 0 20px rgba(56,189,248,0.25)",
                      ],
                    }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  >
                    <Icon className="h-6 w-6 text-[#38BDF8]" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ================= REVIEW STATS GLASS ================= */}
            <div className="mt-4 glass-card rounded-xl border border-white/10 bg-[#0C1228]/70 backdrop-blur-xl p-2 flex flex-wrap justify-center gap-4 text-white">
              {[
                { rating: 4.9, source: "Yelp" },
                { rating: 4.8, source: "Google" },
                { rating: 4.7, source: "Trustpilot" },
                { rating: 4.8, source: "Facebook" },
              ].map((rev, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center  py-3 rounded-xl bg-white/5 border border-white/10  flex-1 text-center"
                >
                  <div className="text-lg font-semibold text-[#AEDCFF]">
                    {rev.rating} ★
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    {rev.source}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
