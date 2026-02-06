import { motion } from "framer-motion";
import { Trophy, ArrowUpRight, Star, Shield, BarChart3 } from "lucide-react";
import AnimateSection from "./AnimateSection";

const leaderboard = [
  { name: "Backend squad", score: 94, delta: "+12", label: "Critical bugs prevented" },
  { name: "Payments team", score: 91, delta: "+8", label: "Incidents averted" },
  { name: "Platform group", score: 89, delta: "+5", label: "Review time reduced" },
];

export default function RexScoreSection() {
  return (
    <div className="bg-[#07090E] pb-20">
      <AnimateSection type="scaleUp">
        <section
          id="rex-score"
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
              <div className="pointer-events-none absolute -inset-6 rounded-2xl  opacity-90" />
              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black/95 p-5 md:p-6 backdrop-blur-xl shadow-[0_0_20px_rgba(15,23,42,0.95)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/50">
                      <Trophy className="h-4 w-4 text-emerald-200" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
                        Rex Score dashboard
                      </p>
                      <p className="text-[11px] text-white/50">
                        Snapshot of your last 7 days of PRs
                      </p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] text-white/70">
                    View in CI
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center mb-5">
                  {/* Gauge */}
                  <div className="relative h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full border border-white/10 bg-slate-950 flex items-center justify-center">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500/40 via-emerald-400/20 to-emerald-300/25 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-[10px] text-white/60">Org avg</p>
                            <p className="text-2xl font-semibold text-white">89</p>
                            <p className="text-[10px] text-emerald-300">+9 this month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0"
                      style={{ transformOrigin: "50% 80%" }}
                      animate={{ rotate: [ -10, 20, -10 ] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="absolute left-1/2 top-[14%] h-14 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-emerald-400 to-transparent" />
                    </motion.div>
                  </div>

                  {/* KPIs */}
                    <div className="space-y-2 text-[11px] text-white/75">
                    <div className="flex items-center justify-between rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2.5">
                      <div>
                        <p className="text-xs font-medium text-white">
                          37% faster reviews
                        </p>
                        <p className="text-[10px] text-white/70">
                          Median PR cycle time over the last 30 days.
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-[10px] text-emerald-100">
                        Team‑wide
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-emerald-400/25 bg-emerald-500/5 px-3 py-2.5">
                      <div>
                        <p className="text-xs font-medium text-white">
                          0 critical vulnerabilities merged
                        </p>
                        <p className="text-[10px] text-white/80">
                          Guardrails enforced by Rex rulesets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leaderboard */}
                <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] text-white/60 uppercase tracking-[0.16em]">
                      Team leaderboard
                    </p>
                    <span className="text-[10px] text-emerald-300">
                      Updated in real time
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {leaderboard.map((row, i) => (
                      <div
                        key={row.name}
                        className="flex items-center justify-between rounded-xl bg-white/[0.03] px-2.5 py-2"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] text-white/55 w-4">
                            #{i + 1}
                          </span>
                          <div>
                            <p className="text-xs text-white">{row.name}</p>
                            <p className="text-[10px] text-white/55">
                              {row.label}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white">
                            {row.score}
                          </span>
                          <span className="text-[10px] text-emerald-300">
                            {row.delta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Copy */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-3">
                Rex Score & impact
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Turn code quality into a game your engineers want to win.
              </h2>
              <p className="text-sm md:text-base text-white/65 mb-5 max-w-xl">
                Every PR receives a Rex Score based on structural risk,
                security posture, and engineering hygiene. Teams compete to
                keep their scores high—while leadership finally sees how code
                quality trends over time.
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-xs text-white/75">
                <div className="flex  items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/40">
                    <Shield className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Fewer security slips</p>
                    <p className="text-white/60">Spot issues before they hit prod.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/40">
                    <BarChart3 className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Live quality trends</p>
                    <p className="text-white/60">Track risk across teams & services.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-400/40">
                    <Star className="h-4 w-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Positive incentives</p>
                    <p className="text-white/60">Reward the behavior you want more of.</p>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}

