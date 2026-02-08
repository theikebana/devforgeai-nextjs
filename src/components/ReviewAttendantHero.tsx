"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BsRobot } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

/* ------------------------ Sample Testimonial Data ------------------------ */
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/80?img=3",
    text: "Amazing platform! The AI agents are smart, intuitive, and secure. Managing reviews has never been easier.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/80?img=5",
    text: "Secure, fast, and reliable. The hosting and AI integration made our workflow effortless.",
    rating: 4,
  },
  {
    name: "Emily Roberts",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/80?img=8",
    text: "Unified dashboard is a game-changer. Real-time alerts and insights keep our reputation strong.",
    rating: 5,
  },
];

export default function ReviewAttendantHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="hero" className="relative overflow-hidden bg-[#07090E] pt-24 pb-36">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-emerald-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1440px] mx-auto rounded-4xl border border-white/5 bg-[#020617] p-8">
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-4 items-center gap-12">
          {/* LEFT */}
          <div className="col-span-2 space-y-6 max-w-xl">
            <motion.div className="flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 border border-emerald-400/40 shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <span className="text-xl font-bold text-white">M</span>
              </motion.div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Review Attendant</h1>
                <p className="text-xs md:text-sm text-white/60">Unified Review Management</p>
              </div>
            </motion.div>

            <motion.div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur">
              <Sparkles className="h-3 w-3 text-emerald-300" />
              <span className="uppercase tracking-[0.18em] text-[10px]">
                Yelp • Google • Facebook • Twitter
              </span>
            </motion.div>

            <motion.h2 className="text-3xl lg:text-[38px] font-semibold tracking-tight text-white">
              One platform for all <br /> <span className=" text-[#00d492]">your reviews and reputation.</span>
            </motion.h2>

            <motion.p className="text-base text-white/65 leading-relaxed">
              Connect your review platforms, let AI classify sentiment, and manage responses from a unified dashboard.
              Real-time alerts and analytics keep your reputation strong.
            </motion.p>

            <motion.div className="flex items-center gap-4 pt-2">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:bg-emerald-400">
                Try live dashboard
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>

              <span className="flex items-center gap-2 text-xs text-white/55">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Fully self-hosted & secure
              </span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="col-span-2 flex flex-col gap-2 relative border border-white/10 shadow-md p-2 rounded-2xl">
            <div className="h-[300px] relative">
              <motion.div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#020617] via-[#020617] to-black p-6">
                {/* Vertical spine */}
                <motion.div
                  className="absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/55 to-transparent"
                  animate={{ opacity: [0.35, 0.9, 0.35] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* ------------------ TESTIMONIAL CARD ------------------ */}

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex justify-center gap-4">

                  {TESTIMONIALS.slice(0, 3).map((current, idx) => (
                    <div
                      key={idx}
                      className="relative w-[300px] bg-[#0b111c]/90 border border-white/20 rounded-xl p-4 flex flex-col items-start gap-3 shadow-lg backdrop-blur-sm"
                    >
                      {/* Top Section: Avatar + Name/Role */}
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <img
                            src={current.avatar}
                            alt={current.name}
                            className="w-14 h-14 rounded-full border-2 border-emerald-400 object-cover shadow-sm"
                          />
                          <span className="absolute -inset-1 rounded-full border border-emerald-500 opacity-50 animate-pulse"></span>
                        </div>

                        <div className="flex-1 flex flex-col">
                          <h3 className="text-white font-semibold text-sm">{current.name}</h3>
                          <span className="text-xs text-white/60">{current.role}</span>

                          {/* Rating */}
                          <div className="flex gap-1 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <motion.span
                                key={i}
                                className={`text-amber-400 text-sm ${i < current.rating ? "" : "text-white/30"}`}
                                animate={{ scale: [0.8, 1.1, 1] }}
                                transition={{ delay: i * 0.05 }}
                              >
                                ★
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-[#adb7e9] text-[14px] leading-snug mt-2">
                        “{current.text}”
                      </p>
                    </div>
                  ))}

                </div>



                {/* ------------------ BOTTOM CENTER ICONS ------------------ */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6">
                  {[IoIosSearch, BsRobot, CiServer].map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-center p-3 rounded-full border border-emerald-400/35 bg-[#020617] shadow-[0_0_40px_rgba(16,185,129,0.25)]"
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 20px rgba(16,185,129,0.2)",
                          "0 0 50px rgba(16,185,129,0.4)",
                          "0 0 20px rgba(16,185,129,0.2)",
                        ],
                      }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2,
                      }}
                    >
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Pulse ring */}
                <motion.div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full border border-emerald-400/25"
                  animate={{ scale: [0.7, 1.3], opacity: [0.5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4, ease: "easeOut" }}
                />
              </motion.div>
            </div>

            {/* ================= REVIEW STATS ================= */}
            <motion.div
              className="w-full max-w-5xl mx-auto p-2 rounded-xl bg-[#0b111c]/40  flex flex-nowrap gap-2 justify-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {[
                { rating: 4.9, source: "Yelp", reviews: "2.1K Reviews" },
                { rating: 4.8, source: "Google", reviews: "4.5K Reviews" },
                { rating: 4.7, source: "Trustpilot", reviews: "1.2K Reviews" },
                { rating: 4.8, source: "Facebook", reviews: "3.8K Reviews" },
                { rating: 4.8, source: "Twitter", reviews: "3.8K Reviews" },
              ].map((rev, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#0b111c]/60 border border-emerald-400/25 shadow-lg w-36 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2, duration: 0.7, type: "spring", stiffness: 120 }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-lg font-bold">{rev.rating}</span>
                    <span className="text-emerald-400 text-sm">★</span>
                  </div>
                  <p className="text-sm mt-1">{rev.source}</p>
                  <p className="text-xs text-white/70 mt-0.5">{rev.reviews}</p>
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-emerald-400/70"
                    animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5 + idx * 0.1, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
