"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Sparkles } from "lucide-react";
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
    <section className="relative overflow-hidden bg-[#07090E] py-8 lg:py-12">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[120%] w-[80%] rounded-full bg-orange-500/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto rounded-4xl border border-white/5 bg-[#020617] px-4 py-8 lg:py-12 lg:p-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-4 items-center gap-12"
        >
          {/* LEFT — Copy + CTA */}
          <div
            className="order-2 lg:order-none lg:col-span-2 space-y-4
              text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2
                mx-auto lg:mx-0
                rounded-full border border-white/10
                bg-white/5 px-3 py-1
                text-[10px] text-amber-200"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/25">
                <Sparkles className="h-3 w-3 text-amber-200" />
              </span>
              <span className="uppercase tracking-[0.18em] text-[10px]">
                AI-enabled data extraction
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroItem}
              className="font-semibold tracking-snug text-white
                text-[26px] leading-[1.1]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                xl:text-[40px]"
            >
              Alluvium
           <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                AI-enabled data extraction at scale
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="lg:mx-0
                w-full sm:max-w-md mx-auto
                text-[14px] sm:text-sm md:text-base
                leading-relaxed text-white/70"
            >
              Automate the extraction of critical fields from invoices, contracts, and
              financial documents. Alluvium combines trained ML models with
              domain-specific templates to turn unstructured documents into analysis-ready data.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroItem}
              className="flex flex-nowrap gap-3
                justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-xl
                  bg-amber-500 px-5 py-3 text-sm font-medium text-black
                  hover:bg-amber-400 transition"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>

              
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={heroItem}
              className="flex items-center gap-2
                justify-center lg:justify-start
                text-[10px] sm:text-[11px] text-white/55 hidden lg:flex"
            >
              <span className="inline-flex items-center gap-1">
                <Layers className="h-4 w-4 text-amber-300" />
                Trained on 11k+ multi-format invoices
              </span>
              <span className="h-3 w-px bg-white/15 hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Built for financial-grade compliance
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Visual preview */}
          <motion.div
            variants={heroItem}
            className="col-span-1 lg:col-span-2 relative border border-white/10 shadow-2xl p-2 rounded-2xl order-1 lg:order-none"
          >
            <div className="h-[280px] lg:h-[460px] relative">
              <motion.div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-black">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-black" />
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Header */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                  LIVE EXTRACTION • SAMPLE INVOICE
                </div>

                {/* Floating extraction panel */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center px-4"
                  animate={{ opacity: [0.95, 1, 0.95], y: [0, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full max-w-md rounded-2xl bg-black/70 border border-white/10 p-5 backdrop-blur">
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
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

