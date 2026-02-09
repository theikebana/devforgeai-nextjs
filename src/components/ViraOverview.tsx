"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const pipelineSteps = [
  {
    title: "Scan Cloud Configuration",
    description:
      "Continuously analyze Azure resources to uncover insecure or risky configurations.",
    status: "active",
  },
  {
    title: "Detect Excess Permissions",
    description:
      "Identify over-privileged identities and enforce least-privilege access controls.",
    status: "idle",
  },
  {
    title: "Validate Compliance",
    description:
      "Automatically check alignment with HIPAA, PCI DSS, GDPR, and benchmarks.",
    status: "idle",
  },
];

export default function ViraOverview() {
  return (
    <div className="bg-[#07090E] pt-12 pb-20">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1.5 text-[10px] tracking-widest text-emerald-200">
            Security & Compliance — Powered by VIRA
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            {/* LEFT */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Cloud Security <br /> <span className="text-[#00d492]">Auditing & Vulnerability</span> Assessment
              </h2>

              <p className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
                VIRA (Virtual Infra Risk Advisor) continuously evaluates your
                Azure infrastructure, identifying risks early and maintaining
                compliance without manual effort.
              </p>
            </div>
{/* PIPELINE */}
<div className="relative ">
  <ul className="space-y-10">
    {pipelineSteps.map((step, i) => {
      const isActive = step.status === "active";
      const isLast = i === pipelineSteps.length - 1;

      return (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="relative"
        >
          {/* Dot */}
          <span className="absolute left-5 top-0 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/15">
            {isActive ? (
              <motion.span
                className="h-2 w-2 rounded-full bg-emerald-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/50" />
            )}
          </span>

          {/* Continuous Line */}
          {!isLast && (
            <>
              {/* Base line */}
              <div
                className="absolute left-7 top-5 w-px bg-emerald-500/20"
                style={{ height: "calc(100% + 18px)" }}
              />

              {/* Moving scan pulse */}
              <motion.div
                className="absolute left-[26px] w-[3px] rounded-full bg-emerald-400/60 blur-[1px]"
                style={{ height: 28 }}
                initial={{ top: "20%" }}
                animate={{ top: "100%" }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </>
          )}

          {/* Content */}
          <div className="pl-16">
            <p className="font-medium text-white">
              {step.title}
            </p>
            <p className="text-xs md:text-sm text-white/65 leading-relaxed">
              {step.description}
            </p>
          </div>
        </motion.li>
      );
    })}
  </ul>

  {/* Status */}
  <p className="mt-6 pl-12 text-[10px] text-white/45 tracking-wide">
    Live audit running · Continuous monitoring enabled
  </p>
</div>




          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
