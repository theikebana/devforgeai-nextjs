"use client";

import { motion } from "framer-motion";
import { FileCheck, Shield, Lock, Globe } from "lucide-react";
import AnimateSection from "./AnimateSection";

const frameworks = [
  {
    icon: FileCheck,
    name: "HIPAA",
    description: "Healthcare data protection and administrative safeguards",
  },
  {
    icon: Shield,
    name: "PCI DSS",
    description: "Payment card industry data security standards",
  },
  {
    icon: Lock,
    name: "GDPR",
    description: "Data protection and privacy for EU and global compliance",
  },
  {
    icon: Globe,
    name: "SOC 2 & more",
    description: "Security, availability, and confidentiality controls",
  },
];

export default function ViraComplianceSection() {
  return (
    <div className="bg-[#07090E] py-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-2">
              Compliance frameworks
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              Stay audit-ready with automated compliance checks
            </h2>
            <p className="text-sm md:text-base text-white/65">
              VIRA maps your Azure posture to common compliance standards so you
              can identify gaps and demonstrate adherence with clear evidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {frameworks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border border-emerald-400/15 bg-gradient-to-b from-slate-900/80 to-slate-950 p-5 flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/40 mb-3">
                    <Icon className="h-6 w-6 text-emerald-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimateSection>
    </div>
  );
}
