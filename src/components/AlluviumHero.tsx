 "use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Layers, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const heroContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AlluviumHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-36 bg-[#07090E]">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 w-[80%] h-[120%] rounded-full bg-red-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 w-[70%] h-[90%] rounded-full bg-orange-500/15 blur-[110px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1440px] mx-auto rounded-4xl bg-[#020617] border border-white/5 p-10 md:p-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center"
        >
          {/* LEFT — Copy + CTA */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs text-red-100/80 backdrop-blur-sm"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/25">
                <Sparkles className="h-3 w-3 text-red-200" />
              </span>
              <span className="uppercase tracking-[0.18em] text-[10px]">
                AI-enabled data extraction
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItem}
              className="text-3xl md:text-[34px] lg:text-[40px] font-semibold tracking-tight text-white"
            >
              Alluvium
              <span className="block text-[26px] md:text-[30px] lg:text-[34px] text-white/90 mt-1">
                AI-Enabled Data Extraction
              </span>
              <span className="bg-gradient-to-r from-red-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                {" "}
                from digital documents at scale
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl"
            >
              Automate the extraction of critical fields from invoices, contracts, and
              financial documents. Alluvium combines trained ML models with
              domain-specific templates to turn unstructured documents into analysis-ready data.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(239,68,68,0.45)] hover:bg-red-400 transition"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur hover:bg-white/10 transition">
                <FileText className="h-4 w-4 text-red-300" />
                View sample extraction report
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-3 text-[11px] text-white/55"
            >
              <span className="inline-flex items-center gap-1">
                <Layers className="h-4 w-4 text-orange-300" />
                Trained on 11k+ multi-format invoices
              </span>
              <span className="h-3 w-px bg-white/15 hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Built for financial-grade compliance
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Simple doc preview stack */}
          <motion.div
            variants={heroItem}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Background tile */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-red-500/10 via-slate-900/90 to-black/90 border border-white/10" />

            {/* Extracted fields panel */}
            <motion.div
              className="relative z-10 m-6 rounded-2xl bg-black/60 border border-white/10 p-5 backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Invoice extraction
                  </p>
                  <p className="text-sm text-white">Live document preview</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  76%+ field accuracy
                </span>
              </div>

              <div className="space-y-3">
                {[
                  ["Vendor", "Schneider Electric"],
                  ["Invoice Number", "#INV-20451"],
                  ["Total Amount", "€48,920.00"],
                  ["Due Date", "25 Aug 2024"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-xs text-white/80"
                  >
                    <span className="text-white/55">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

