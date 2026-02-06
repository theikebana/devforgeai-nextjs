"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  Target,
  Bell,
  BarChart3,
  Shield,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const stats = [
  {
    team: "West region",
    leads: 847,
    delta: "+23%",
    label: "Leads assigned this month",
  },
  {
    team: "Enterprise squad",
    leads: 612,
    delta: "+18%",
    label: "Response time improved",
  },
  {
    team: "SMB focus",
    leads: 423,
    delta: "+31%",
    label: "Keyword match rate",
  },
];

export default function ElvisStatsSection() {
  return (
    <div className="bg-[#07090E] pb-20">
      <AnimateSection type="scaleUp">
        <section
          id="elvis-stats"
          className="max-w-6xl mx-auto px-6 lg:px-8 mt-10 md:mt-16"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-stretch">
            {/* Card */}
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-400/50">
                      <TrendingUp className="h-4 w-4 text-violet-200" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                        Lead performance dashboard
                      </p>
                      <p className="text-[11px] text-white/50">
                        Snapshot of team activity and keyword performance
                      </p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] text-white/70 hover:bg-white/10 transition-colors">
                    View in ELVIS
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center mb-5">
                  {/* Gauge */}
                  <div className="relative h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full border border-white/10 bg-slate-950 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.6 }}
                          className="h-20 w-20 rounded-full bg-gradient-to-br from-violet-500/40 via-violet-400/20 to-violet-300/25 flex items-center justify-center"
                        >
                          <div className="text-center">
                            <p className="text-[10px] text-white/60">
                              Avg response
                            </p>
                            <p className="text-2xl font-semibold text-white">
                              &lt;2h
                            </p>
                            <p className="text-[10px] text-violet-300">
                              +40% faster
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
                      <div className="absolute left-1/2 top-[14%] h-14 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-300 via-violet-400 to-transparent" />
                    </motion.div>
                  </div>

                  {/* KPIs */}
                  <div className="space-y-2 text-[11px] text-white/75">
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center justify-between rounded-xl border border-violet-400/40 bg-violet-500/10 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-xs font-medium text-white">
                          Faster lead response
                        </p>
                        <p className="text-[10px] text-white/70">
                          Automated notifications for new leads.
                        </p>
                      </div>
                      <span className="rounded-full bg-violet-400/20 px-2 py-1 text-[10px] text-violet-100">
                        Team-wide
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center justify-between rounded-xl border border-violet-400/25 bg-violet-500/5 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-xs font-medium text-white">
                          No duplicate assignments
                        </p>
                        <p className="text-[10px] text-white/80">
                          Priority-based status per lead.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Leaderboard */}
                <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] text-white/60 uppercase tracking-[0.16em]">
                      Team leaderboard
                    </p>
                    <span className="text-[10px] text-violet-300">
                      Updated in real time
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
                            {row.leads}
                          </span>
                          <span className="text-[10px] text-violet-300">
                            {row.delta}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase mb-3">
                Impact & visibility
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Real-time visibility into every lead and every rep.
              </h2>
              <p className="text-sm md:text-base text-white/65 mb-5 max-w-xl">
                ELVIS gives managers a single view of team activity, lead
                progress, and keyword performance. Automated reports and
                notifications keep everyone aligned—no more chasing updates in
                spreadsheets or email threads.
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-xs text-white/75">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-400/40">
                    <Target className="h-4 w-4 text-violet-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Keyword-driven</p>
                    <p className="text-white/60">
                      Reps see only relevant opportunities.
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-400/40">
                    <BarChart3 className="h-4 w-4 text-violet-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Trend insights</p>
                    <p className="text-white/60">
                      Technology and keyword performance over time.
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
                    <Bell className="h-4 w-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Automated alerts</p>
                    <p className="text-white/60">
                      New leads and weekly reports delivered on time.
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-400/40">
                    <Shield className="h-4 w-4 text-violet-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Audit trail</p>
                    <p className="text-white/60">
                      Soft deletes and full history for compliance.
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
