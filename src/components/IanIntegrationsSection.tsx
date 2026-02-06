"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Database, Box } from "lucide-react";
import AnimateSection from "./AnimateSection";

const integrations = [
  {
    icon: Server,
    title: "Virtual Machines",
    description: "CPU, memory, disk, and network metrics in real-time",
  },
  {
    icon: Cpu,
    title: "App Services",
    description: "Performance, availability, and resource usage",
  },
  {
    icon: Database,
    title: "Storage & Databases",
    description: "Capacity, transactions, and access patterns",
  },
  {
    icon: Box,
    title: "Containers & serverless",
    description: "Networking, scale, and cost visibility",
  },
];

export default function IanIntegrationsSection() {
  return (
    <div className="bg-[#07090E] py-16">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase mb-2">
              Azure integration
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
              One dashboard for your entire Azure estate
            </h2>
            <p className="text-sm md:text-base text-white/65">
              IAN seamlessly integrates with core Azure services so you get
              unified visibility without managing multiple tools.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border border-sky-400/15 bg-gradient-to-b from-slate-900/80 to-slate-950 p-5 flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-400/40 mb-3">
                    <Icon className="h-6 w-6 text-sky-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.title}
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
