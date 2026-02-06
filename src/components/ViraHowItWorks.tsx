"use client";

import { motion } from "framer-motion";
import { Scan, ShieldCheck, FileCheck, AlertTriangle } from "lucide-react";
import AnimateSection from "./AnimateSection";

const steps = [
  {
    label: "01",
    title: "Continuous scanning",
    description:
      "VIRA continuously scans your Azure environment for misconfigurations, exposed resources, and drift from security baselines.",
    icon: Scan,
  },
  {
    label: "02",
    title: "Detect risks",
    description:
      "Identify over-privileged accounts, excessive permissions, and configuration issues before they become incidents.",
    icon: AlertTriangle,
  },
  {
    label: "03",
    title: "Compliance checks",
    description:
      "Automated checks aligned to HIPAA, PCI DSS, GDPR, and other frameworks. Stay audit-ready with clear evidence and remediation steps.",
    icon: FileCheck,
  },
  {
    label: "04",
    title: "Remediate & harden",
    description:
      "Get actionable fix guidance and enforce least-privilege access. Track remediation and improve your security posture over time.",
    icon: ShieldCheck,
  },
];

export default function ViraHowItWorks() {
  return (
    <div className="bg-[#07090E] pb-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-2">
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                From reactive firefighting to proactive security.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-white/65 max-w-md">
              VIRA connects to your Azure subscription, runs continuous scans,
              and surfaces misconfigurations, excessive permissions, and
              compliance gaps with clear remediation guidance.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl border border-emerald-400/15 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black/95 p-4 shadow-[0_0_30px_rgba(15,23,42,0.8)]"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-[11px] font-semibold tracking-[0.16em] text-emerald-200">
                    {step.label}
                  </span>
                  <span className="h-px flex-1 rounded-full bg-gradient-to-r from-emerald-400/40 via-emerald-300/10 to-transparent" />
                </div>
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 border border-white/10">
                  {(() => {
                    const Icon = step.icon;
                    return <Icon className="h-4 w-4 text-emerald-200" />;
                  })()}
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
