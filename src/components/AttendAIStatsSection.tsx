"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  Camera,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const stats = [
  {
    team: "Engineering",
    count: 98,
    delta: "+2%",
    label: "Present today",
  },
  {
    team: "Operations",
    count: 94,
    delta: "+5%",
    label: "Recognition accuracy",
  },
  {
    team: "Support",
    count: 100,
    delta: "On time",
    label: "Check-in compliance",
  },
];

export default function AttendAIStatsSection() {
  return (
    <div className="bg-[#07090E] pb-20">
      <AnimateSection type="scaleUp">
        <section
          id="attendai-stats"
          className="max-w-6xl mx-auto px-6 lg:px-8 mt-10 md:mt-16"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black/95 p-5 md:p-6 backdrop-blur-xl shadow-[0_0_20px_rgba(15,23,42,0.95)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-400/50">
                      <TrendingUp className="h-4 w-4 text-sky-200" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                        Attendance dashboard
                      </p>
                      <p className="text-[11px] text-white/50">
                        Daily status and recognition metrics
                      </p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] text-white/70 hover:bg-white/10 transition-colors">
                    View in AttendAI
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center mb-5">
                  <div className="relative h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full border border-white/10 bg-slate-950 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.6 }}
                          className="h-20 w-20 rounded-full bg-gradient-to-br from-sky-500/40 via-sky-400/20 to-sky-300/25 flex items-center justify-center"
                        >
                          <div className="text-center">
                            <p className="text-[10px] text-white/60">
                              Recognition
                            </p>
                            <p className="text-2xl font-semibold text-white">
                              98%
                            </p>
                            <p className="text-[10px] text-sky-300">
                              Accuracy
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0"
                      style={{ transformOrigin: "50% 80%" }}
                      animate={{ rotate: [-10, 20, -10] }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute left-1/2 top-[14%] h-14 w-0.5 -translate-x-1/2 bg-gradient-to-b from-sky-300 via-sky-400 to-transparent" />
                    </motion.div>
                  </div>

                  <div className="space-y-2 text-[11px] text-white/75">
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center justify-between rounded-xl border border-sky-400/40 bg-sky-500/10 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-xs font-medium text-white">
                          IN/OUT with images
                        </p>
                        <p className="text-[10px] text-white/70">
                          Detailed reports per user.
                        </p>
                      </div>
                      <span className="rounded-full bg-sky-400/20 px-2 py-1 text-[10px] text-sky-100">
                        Reports
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center justify-between rounded-xl border border-sky-400/25 bg-sky-500/5 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-xs font-medium text-white">
                          False / unidentified
                        </p>
                        <p className="text-[10px] text-white/80">
                          Automatic reporting for review.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] text-white/60 uppercase tracking-[0.16em]">
                      Department snapshot
                    </p>
                    <span className="text-[10px] text-sky-300">
                      Today
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {stats.map((row, i) => (
                      <motion.div
                        key={row.team}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center justify-between rounded-xl bg-white/[0.03] px-2.5 py-2 hover:bg-white/[0.06] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] text-white/55 w-4">
                            #{i + 1}
                          </span>
                          <div>
                            <p className="text-xs text-white">{row.team}</p>
                            <p className="text-[10px] text-white/55">
                              {row.label}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white">
                            {row.count}%
                          </span>
                          <span className="text-[10px] text-sky-300">
                            {row.delta}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase mb-3">
                Impact & visibility
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Real-time attendance with clear reporting.
              </h2>
              <p className="text-sm md:text-base text-white/65 mb-5 max-w-xl">
                AttendAI gives managers a single view of who’s in, when they
                checked in or out, and automatic flags for false or unidentified
                captures. Reports by week, month, or custom range keep compliance
                and payroll simple.
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-xs text-white/75">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-400/40">
                    <Camera className="h-4 w-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">IP camera integration</p>
                    <p className="text-white/60">
                      Seamless setup with advanced face detection.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-400/40">
                    <BarChart3 className="h-4 w-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Flexible reports</p>
                    <p className="text-white/60">
                      Week, month, or custom date range with IN/OUT times.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-400/40">
                    <Clock className="h-4 w-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Automated tracking</p>
                    <p className="text-white/60">
                      No manual punch cards or spreadsheets.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-400/40">
                    <Shield className="h-4 w-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">SaaS-ready</p>
                    <p className="text-white/60">
                      Multi-tenant and scalable with pricing plans.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
