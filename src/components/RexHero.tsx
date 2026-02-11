// \"use client\";

import { motion } from "framer-motion";
import { Bug, Sparkles } from "lucide-react";

export default function RexHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20 bg-[#07090E]"
    >
     

      <div className="relative container p-12 mx-auto rounded-4xl bg-[#020617]">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center"
        >
          {/* Left: copy */}
          <div className="space-y-2">
            <motion.div

              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur-sm"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                <Sparkles className="h-3 w-3 text-emerald-300" />
              </span>
              <span className="uppercase tracking-[0.18em] text-[10px]">
                AI-powered code review
              </span>
            </motion.div>

            <motion.div  className="space-y-5">
             
              <h1 className="text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px] font-semibold tracking-tight text-white">
                Rex reviews every pull request—
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                  {" "}
                  catching bugs, enforcing standards,
                </span>{" "}
                and flagging security issues in seconds.
              </h1>

              <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
                Your senior engineers focus on architecture and system design,
                while Rex takes care of repetitive reviews. An AI-powered
                review engine tuned for fast-moving, high-trust teams.
              </p>
            </motion.div>

            <motion.div

              className="grid gap-3 sm:grid-cols-2 max-w-xl mt-5"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-[0_0_30px_rgba(15,23,42,0.7)]">
                <p className="text-[11px] font-medium tracking-[0.16em] text-emerald-200/80 uppercase mb-2">
                  Business challenges
                </p>
                <ul className="space-y-1.5 text-xs text-white/70">
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-amber-300">»</span>
                    <span>Slow review cycles (24–48 hours for feedback)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 text-amber-300">»</span>
                    <span>Inconsistent quality and review standards</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-slate-900/90 to-slate-950 p-3 backdrop-blur-md ">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black/40 border border-emerald-400/40">
                    <Bug className="h-3.5 w-3.5 text-emerald-200" />
                  </div>
                  <p className="text-[11px] font-medium tracking-[0.16em] text-emerald-100 uppercase">
                    Automated PR insights
                  </p>
                </div>
                <p className="text-xs text-emerald-50/90">
                  Rex runs a multi-LLM, 10-phase review across security,
                  quality, and architecture — in seconds, directly on every PR.
                </p>
              </div>
            </motion.div>

            <motion.div

              className="flex flex-wrap items-center gap-3 text-[11px] text-white/55"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OWASP Top‑10 & CWE coverage</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Github, GitLab & Bitbucket support</span>
              </div>
            </motion.div>
          </div>

          {/* Right: animated review card */}
          <motion.div
            
            className="relative mx-auto max-w-md w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black/90 p-4 md:p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    Pull request overview
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    `feature/refactor-auth-flow.ts`
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/15 text-[11px] px-2 py-1 text-emerald-300 border border-emerald-400/40">
                    Rex Score 92
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-[11px]">
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/5 p-3">
                  <p className="text-emerald-300 mb-1 font-medium">Security</p>
                  <p className="text-white/70">
                    3 issues fixed, 0 critical. Hardened JWT lifetime and
                    removed secrets from logs.
                  </p>
                </div>
                <div className="rounded-xl border border-sky-400/30 bg-sky-500/5 p-3">
                  <p className="text-sky-300 mb-1 font-medium">Code quality</p>
                  <p className="text-white/70">
                    14 style and duplication suggestions with ready‑to‑apply
                    patches.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-[11px]">
                <p className="text-white/55 uppercase tracking-[0.16em]">
                  Recommended actions
                </p>
                <div className="space-y-1.5">
                  {[
                    "Apply suggested input validation on the API boundary.",
                    "Promote a shared auth helper to reduce duplication.",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-white/70">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* orbiting glow */}
              <motion.div
                className="pointer-events-none absolute -inset-0.5 rounded-3xl border border-cyan-500/10"
                animate={{ opacity: [0.25, 0.6, 0.25] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

