"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    title: "Unified, trusted answers",
    description:
      "Stop context-switching between tools. Search and chat over all your internal knowledge with citations back to the original source.",
    tag: "Search",
  },
  {
    title: "Custom agents for every team",
    description:
      "Give support, sales, and engineering AI copilots that understand your processes, data, and constraints—not just public internet text.",
    tag: "Agents",
  },
  {
    title: "Own your stack and data",
    description:
      "Self-host MoogleMind on your own infrastructure so compliance, security, and data residency stay fully under your control.",
    tag: "Self-hosted",
  },
  {
    title: "Open-source, extensible core",
    description:
      "Extend the platform with your own connectors, tools, and workflows instead of waiting on a closed SaaS roadmap.",
    tag: "Open-source",
  },
];

const useCases = [
  "Internal knowledge search for wikis, RFCs, and runbooks.",
  "Support agent that drafts answers grounded in help center content.",
  "Engineering assistant that surfaces design docs and incident history.",
  "RevOps agent that answers questions across CRM, notes, and contracts.",
];

export default function MoogleMindKeyBenefits() {
  return (
    <div className="bg-[#07090E] pb-20">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">
            {/* Benefits grid */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-2">
                Why teams choose MoogleMind
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Designed for serious, enterprise-grade AI adoption.
              </h2>
              <p className="text-sm md:text-base text-white/65 mb-6 max-w-xl">
                MoogleMind combines unified search, agent tooling, and
                self-hosting so you can roll out AI where it matters most—without
                compromising on security or control.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {benefits.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className="rounded-2xl border border-emerald-400/15 bg-gradient-to-br from-slate-950 via-slate-950/80 to-emerald-950/40 p-4"
                  >
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-500/10 px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Use cases list */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-2xl border border-emerald-400/25 bg-gradient-to-b from-emerald-500/15 via-slate-900/95 to-black/95 p-5 shadow-[0_0_40px_rgba(16,185,129,0.25)]"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-100 uppercase mb-3">
                High-impact use cases
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-emerald-50/90">
                {useCases.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className="mt-0.5 text-emerald-300 font-bold text-sm shrink-0">
                      »
                    </span>
                    <span className="text-xs md:text-sm text-emerald-50/90">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}

