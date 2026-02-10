"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Lock,
  Database,
  Activity,
  Scan,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: Scan,
    title: "Secure document intake",
    description:
      "Ingest invoices, contracts, and statements through encrypted channels with role-based access so only approved sources and teams can submit documents.",
  },
  {
    icon: Database,
    title: "Structured, governed data",
    description:
      "Map extracted fields into governed schemas with ownership, validation rules, and lineage—so every data point is traceable back to its source document.",
  },
  {
    icon: FileCheck,
    title: "Automated compliance checks",
    description:
      "Continuously validate extracted data and document flows against policies aligned with HIPAA, PCI DSS, GDPR, and SOC 2 controls.",
  },
  {
    icon: Lock,
    title: "Fine-grained access control",
    description:
      "Protect sensitive fields like PII and financial details with field-level permissions, redaction, and environment-specific access policies.",
  },
  {
    icon: Activity,
    title: "End-to-end audit trail",
    description:
      "Track every extraction, correction, and export with immutable logs that make it easy to answer who accessed what—and when.",
  },
  {
    icon: ShieldCheck,
    title: "Continuously hardened posture",
    description:
      "Feed production feedback and incidents back into Alluvium to tighten rules, improve models, and keep your document workflows secure over time.",
  },
];

export default function AlluviumComplianceTimeline() {
  return (
    <div className="bg-[#07090E] py-28">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* CENTERED HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <p className="text-xs font-semibold tracking-[0.22em] text-emerald-300 uppercase mb-4">
              All in one platform
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight">
              Continuous document security & compliance
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              One continuous workflow — ingest, extract, validate, and export
              sensitive document data while keeping controls and compliance
              requirements built into every step.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* CENTER LINE */}
            <motion.div
              className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-emerald-400/40 via-emerald-400/10 to-transparent"
              animate={{ backgroundPositionY: ["0%", "100%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "100% 200%" }}
            />

            <ul className="space-y-16">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-start"
                  >
                    {/* LEFT */}
                    <div
                      className={`w-1/2 ${
                        isLeft ? "pr-8 text-right" : "opacity-0"
                      }`}
                    >
                      {isLeft && (
                        <>
                          <div className="inline-flex items-center justify-end gap-2 mb-2">
                            <span className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-400/40">
                              <Icon className="h-4 w-4 text-emerald-300" />
                            </span>
                            <h3 className="text-base md:text-lg font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md ml-auto">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* DOT */}
                    <span className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/50 bg-[#07090E]">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>

                    {/* RIGHT */}
                    <div
                      className={`w-1/2 ${
                        !isLeft ? "pl-8 text-left" : "opacity-0"
                      }`}
                    >
                      {!isLeft && (
                        <>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-400/40">
                              <Icon className="h-4 w-4 text-emerald-300" />
                            </span>
                            <h3 className="text-base md:text-lg font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                            {item.description}
                          </p>
                        </>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}

