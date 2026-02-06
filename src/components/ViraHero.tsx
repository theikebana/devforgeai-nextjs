"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const heroContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const heroFeatures = [
  {
    title: "Continuous security scanning",
    description:
      "Detect threats and vulnerabilities in real time across your cloud.",
  },
  {
    title: "Automated compliance checks",
    description:
      "Ensure your infrastructure meets security and compliance standards.",
  },
  {
    title: "Threat intelligence insights",
    description:
      "Get actionable intelligence to prevent security breaches.",
  },
];

export default function ViraHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20 bg-[#07090E]"
    >
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 w-[80%] h-[120%] rounded-full bg-emerald-500/20 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-1/4 -left-1/4 w-[60%] h-[80%] rounded-full bg-sky-500/10 blur-[100px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container p-12 mx-auto rounded-4xl bg-[#020617] border border-white/5">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={heroItem} className="flex items-center gap-2 mb-6">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">
              Secure with VIRA
            </span>
          </motion.div>

          <motion.div variants={heroItem} className="space-y-5 mb-6">
            <h1 className="text-3xl md:text-[34px] lg:text-[40px] font-semibold tracking-tight text-white">
              Advanced Security with VIRA
            </h1>
            <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-3xl">
              Proactively identify vulnerabilities and secure your
              infrastructure with intelligent automation.
            </p>
          </motion.div>

          <div className="space-y-3">
            {heroFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                variants={heroItem}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/20 text-emerald-300">
                  ✓
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
