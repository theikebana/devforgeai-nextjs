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
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-2">
              Compliance frameworks
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              Stay audit-ready with automated compliance checks
            </h2>
            <p className="text-sm md:text-base text-white/65 leading-relaxed">
              VIRA continuously maps your Azure posture to industry frameworks,
              helping you identify gaps and maintain provable compliance.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {frameworks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-gradient-to-b from-slate-900/70 via-slate-950 to-black p-6"
                >
                  {/* Subtle moving scan line */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/30">
                      <Icon className="h-6 w-6 text-emerald-300" />
                    </div>

                    <h3 className="text-lg font-medium text-white mb-1">
                      {item.name}
                    </h3>

                    <p className="text-white/65 leading-tight">
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
