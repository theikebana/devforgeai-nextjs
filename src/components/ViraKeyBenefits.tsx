"use client";

import { motion } from "framer-motion";
import {
  Scan,
  ShieldCheck,
  FileCheck,
  Brain,
} from "lucide-react";
import AnimateSection from "./AnimateSection";

const benefits = [
  {
    icon: Scan,
    title: "Continuous security scanning",
    description:
      "Detect threats and vulnerabilities in real time across your cloud. No more point-in-time audits—VIRA keeps your posture current.",
    color: "emerald",
  },
  {
    icon: FileCheck,
    title: "Automated compliance checks",
    description:
      "Ensure your infrastructure meets HIPAA, PCI DSS, GDPR, and other standards. Get audit-ready evidence and remediation steps.",
    color: "emerald",
  },
  {
    icon: Brain,
    title: "Threat intelligence insights",
    description:
      "Get actionable intelligence to prevent security breaches. Prioritize fixes based on risk and impact.",
    color: "sky",
  },
  {
    icon: ShieldCheck,
    title: "Least privilege & hardening",
    description:
      "Detect over-privileged accounts and misconfigurations. Enforce least privilege access and harden your Azure environment.",
    color: "emerald",
  },
];

const iconWrapperClass = (color: string) =>
  color === "emerald"
    ? "bg-emerald-500/10 border-emerald-400/40"
    : "bg-sky-500/10 border-sky-400/40";
const iconClass = (color: string) =>
  color === "emerald" ? "text-emerald-300" : "text-sky-300";

export default function ViraKeyBenefits() {
  return (
    <div className="bg-[#07090E] py-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-3">
              Key benefits
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              Everything you need for Azure security and compliance.
            </h2>
            <p className="text-sm md:text-base text-white/65">
              VIRA brings continuous scanning, automated compliance checks, and
              threat intelligence into one platform so you can secure your Azure
              environment and stay audit-ready.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md overflow-hidden hover:border-emerald-400/30 transition-colors"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                  <div className="relative z-10">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border mb-4 ${iconWrapperClass(item.color)}`}
                    >
                      <Icon className={`h-5 w-5 ${iconClass(item.color)}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
