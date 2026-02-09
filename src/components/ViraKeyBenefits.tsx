"use client";

import { motion } from "framer-motion";
import {
  Scan,
  ShieldCheck,
  FileCheck,
  Brain,
  AlertTriangle,
  Lock,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: Scan,
    title: "Continuous security scanning",
    description:
      "Always-on monitoring across your entire Azure environment to detect vulnerabilities, risky configurations, and exposure in real time. No blind spots, no scheduled scans — your security posture stays continuously updated.",
  },
  {
    icon: AlertTriangle,
    title: "Misconfiguration detection",
    description:
      "Automatically identify insecure defaults, exposed services, open ports, and configuration drift across subscriptions. Get clear visibility into what changed, why it matters, and how to fix it before attackers exploit it.",
  },
  {
    icon: ShieldCheck,
    title: "Least privilege enforcement",
    description:
      "Detect over-privileged users, roles, and service identities across Azure. Enforce least-privilege access by removing unnecessary permissions and reducing your attack surface without slowing teams down.",
  },
  {
    icon: FileCheck,
    title: "Automated compliance checks",
    description:
      "Continuously assess your infrastructure against HIPAA, PCI DSS, GDPR, and other regulatory frameworks. Automatically collect evidence, map controls, and stay audit-ready without manual spreadsheets or scripts.",
  },
  {
    icon: Brain,
    title: "Threat intelligence insights",
    description:
      "Turn raw findings into actionable intelligence with risk-based prioritization. Focus remediation on issues with the highest impact, exploitability, and business risk — not just long vulnerability lists.",
  },
  {
    icon: Lock,
    title: "Audit-ready reporting",
    description:
      "Generate executive-ready compliance reports, security summaries, and remediation timelines in minutes. Share clear, verifiable proof of compliance with auditors, customers, and leadership teams.",
  },
];


export default function ViraLineBenefits() {
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
              Continuous Azure security & compliance
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              One continuous workflow — detect, evaluate, comply, and harden
              your cloud posture with automated intelligence.
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
                          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
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
                          <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h3>
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
