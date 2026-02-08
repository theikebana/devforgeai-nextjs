"use client";
import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

const steps = [
  {
    label: "01",
    title: "Ingest & connect",
    description:
      "Securely connect docs, wikis, tickets, databases, and internal APIs into a unified knowledge graph.",
  },
  {
    label: "02",
    title: "Index & understand",
    description:
      "MoogleMind chunks, embeds, and enriches content with metadata so agents can answer with real context.",
  },
  {
    label: "03",
    title: "Search & chat",
    description:
      "Teams search naturally, ask questions, and get grounded answers with citations across all connected data.",
  },
  {
    label: "04",
    title: "Deploy agents",
    description:
      "Ship custom agents for support, engineering, and operations that run on your infra and respect your rules.",
  },
];

export default function MoogleMindHowItWorks() {
  return (
    <div className="bg-[#07090E] py-12">
      <AnimateSection type="fadeUp">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase mb-2">
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                From scattered knowledge to unified, AI-ready search.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-white/65 max-w-md">
              MoogleMind plugs into your existing stack, builds a search-ready
              index on top of it, and exposes everything through secure search,
              chat, and agents.
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

