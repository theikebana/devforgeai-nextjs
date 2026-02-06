"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const detectionFeatures = [
  {
    title: "Misconfigurations",
    description:
      "Identify and fix security misconfigurations before they're exploited",
  },
  {
    title: "Excessive Permissions",
    description:
      "Detect over-privileged accounts and enforce least privilege access",
  },
  {
    title: "Compliance Violations",
    description:
      "Ensure adherence to HIPAA, PCI DSS, GDPR, and other standards",
  },
];

export default function ViraOverview() {
  return (
    <div className="bg-[#07090E] pb-16 pt-4">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-100/90">
            <span className="uppercase tracking-[0.18em] text-[10px]">
              Security & Compliance — Powered by VIRA
            </span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start mt-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Cloud Security Auditing & Vulnerability Assessment
              </h2>
              <p className="text-sm md:text-base text-white/65 max-w-xl">
                Our VIRA (Virtual Infra Risk Advisor) automated tool provides
                continuous protection for your Azure environment. It
                systematically scans your cloud infrastructure to detect:
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/95 p-5 lg:p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]"
            >
              <ul className="space-y-3 text-xs md:text-sm text-white/75">
                {detectionFeatures.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/20 text-emerald-300 text-[10px]">
                      ✓
                    </span>
                    <div>
                      <span className="font-semibold text-white">
                        {item.title}
                      </span>
                      <span className="text-white/80"> — {item.description}</span>
                    </div>
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
