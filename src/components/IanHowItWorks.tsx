"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, BarChart3, Lightbulb, Shield } from "lucide-react";
import AnimateSection from "./AnimateSection";

const steps = [
  {
    label: "01",
    title: "Connect Azure",
    description:
      "Link your Azure subscription so IAN can discover VMs, App Services, Storage, and other resources in one place.",
    icon: LayoutDashboard,
  },
  {
    label: "02",
    title: "Real-time metrics",
    description:
      "Track CPU, memory, network, and disk usage across all resources with a single, unified dashboard.",
    icon: BarChart3,
  },
  {
    label: "03",
    title: "Smart recommendations",
    description:
      "Get proactive insights to optimize cost, performance, and security before issues impact your workloads.",
    icon: Lightbulb,
  },
  {
    label: "04",
    title: "Act with confidence",
    description:
      "Manage all Azure resources from one command center with clear visibility and intelligent alerts.",
    icon: Shield,
  },
];

export default function IanHowItWorks() {
  return (
    <div className="bg-[#07090E] py-12">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase mb-2">
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                From scattered Azure portals to one intelligent dashboard.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-white/65 max-w-md">
              IAN connects to your Azure environment, aggregates metrics and
              health signals, and surfaces recommendations so you can optimize
              cost, performance, and security in one place.
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
                className="relative rounded-2xl border border-sky-400/15 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black/95 p-4 shadow-[0_0_30px_rgba(15,23,42,0.8)]"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/15 text-[11px] font-semibold tracking-[0.16em] text-sky-200">
                    {step.label}
                  </span>
                  <span className="h-px flex-1 rounded-full bg-gradient-to-r from-sky-400/40 via-sky-300/10 to-transparent" />
                </div>
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 border border-white/10">
                  {(() => {
                    const Icon = step.icon;
                    return <Icon className="h-4 w-4 text-sky-200" />;
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
