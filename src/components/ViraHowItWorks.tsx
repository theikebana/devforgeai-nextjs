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
    <div className="bg-[#07090E] py-12">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 grid gap-6 md:grid-cols-[1.3fr_0.7fr] items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.24em] text-emerald-300 uppercase mb-3">
                How it works
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                From reactive firefighting <br /> to proactive security
              </h2>
            </div>

            <p className=" text-white/65  max-w-md">
              VIRA connects to your Azure subscription, runs continuous scans, and
              surfaces risks and compliance gaps with clear remediation guidance.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-[#0b1220]/60
                    p-6
                  "
                >
                  {/* Top row */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-[11px] font-semibold tracking-widest text-emerald-200">
                      {step.label}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/40">
                      <Icon className="h-4 w-4 text-emerald-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="t text-white/65 leading-tight">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
