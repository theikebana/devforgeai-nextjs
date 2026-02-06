"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const bulletIconClasses = "mt-0.5 text-emerald-400 font-bold text-sm shrink-0";
const bulletContent = "text-xs md:text-sm text-white/80";

const keyFeaturesLeft = [
  "Unified search across documents, databases, and APIs.",
  "Custom AI agents that run on your own data and rules.",
  "Secure self-hosting so you keep full data control.",
];

const keyFeaturesRight = [
  "Connectors and integrations for enterprise systems.",
  "Extensible agent workflows and tooling.",
  "Open-source stack with transparent, auditable code.",
];

const problemStatements = [
  "Enterprise knowledge is scattered across silos and tools.",
  "Generic search and chatbots don’t understand internal context.",
  "SaaS AI raises privacy, compliance, and vendor lock-in concerns.",
  "Teams need agents tailored to internal processes and data.",
  "Scaling AI across the organization is complex and costly.",
];

const solutions = [
  "Unified search and agents over all connected data sources.",
  "Custom agents trained on your docs, APIs, and workflows.",
  "Self-hosted deployment for compliance and data sovereignty.",
  "Agent builder and tooling for domain-specific use cases.",
  "Open-source platform that scales with your organization.",
];

export default function MoogleMindOverview() {
  return (
    <div className="bg-[#07090E] pb-16 pt-4">
      {/* Key Features */}
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-3">
                Key Features
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Enterprise search and AI agents, on your terms.
              </h2>
              <p className="text-sm md:text-base text-white/65 max-w-xl">
                MoogleMind brings unified enterprise search, custom agents, and
                secure self-hosting into one open-source platform so you can
                connect, search, and automate without losing control.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/95 p-5 lg:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <ul className="space-y-2.5 text-xs md:text-sm text-white/75">
                  {keyFeaturesLeft.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-30px" }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="flex gap-3"
                    >
                      <span className={bulletIconClasses}>»</span>
                      <span className={bulletContent}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <ul className="space-y-2.5 text-xs md:text-sm text-white/75">
                  {keyFeaturesRight.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-30px" }}
                      transition={{ duration: 0.35, delay: (i + 3) * 0.04 }}
                      className="flex gap-3"
                    >
                      <span className={bulletIconClasses}>»</span>
                      <span className={bulletContent}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimateSection>

      {/* Problem Statement & Solution */}
      <AnimateSection type="scaleUp" delay={0.05}>
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-14">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_0_40px_rgba(15,23,42,0.7)]"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-200/90 uppercase mb-3">
                Problem Statement
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-white/80">
                {problemStatements.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className={bulletIconClasses}>»</span>
                    <span className={bulletContent}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/15 via-slate-900/95 to-slate-950 p-5 backdrop-blur-md"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-100 uppercase mb-3">
                Solution
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-emerald-50/90">
                {solutions.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.08 + i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className={bulletIconClasses}>»</span>
                    <span className={bulletContent}>{item}</span>
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
