"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DotGrid from "@/components/dotgrid";

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
    <section
      id="hero"
      className="relative overflow-hidden rounded-b-4xl bg-gradient-to-b from-[#020617] via-[#020617] to-[#030712] py-12 lg:py-16 xl:py-24"
    >
      {/* DotGrid — same as VIRA */}
      <DotGrid
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        dotSize={4}
        gap={15}
        baseColor="#181322ff"
        activeColor="#0078D4"
        proximity={280}
        shockRadius={280}
        shockStrength={5}
        resistance={450}
        returnDuration={1.5}
        autoMode
      />

      {/* Background decor */}
      <div className="absolute top-0 left-0 pointer-events-none z-0">
        <Image src="/herodecorleft.png" alt="" width={1000} height={1000} />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image src="/herodecorright.png" alt="" width={1000} height={1000} />
      </div>

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[1159px] bg-[#0360A7]/60 blur-[190px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        >
          {/* LEFT SIDE */}
          <div className="space-y-5 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-2 mx-auto lg:mx-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#C5E6FF]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              AI-ENABLED DATA EXTRACTION
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-medium tracking-[-0.02em] text-white text-[26px] leading-[1.15] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]"
            >
              Alluvium
              <span className="bg-gradient-to-r from-[#87CBFF] to-[#C5E6FF] bg-clip-text text-transparent">
                {" "}
                AI-enabled data extraction at scale
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto lg:mx-0 max-w-[32ch] sm:max-w-md text-sm md:text-base leading-relaxed text-white/65"
            >
              Automate the extraction of critical fields from invoices,
              contracts, and financial documents. Turn unstructured data
              into analysis-ready intelligence.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-md bg-[#0078D4] px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="flex items-center gap-3 justify-center lg:justify-start text-[11px] text-white/55"
            >
              <span className="inline-flex items-center gap-1">
                <Layers className="h-4 w-4 text-[#38BDF8]" />
                Trained on 11k+ multi-format invoices
              </span>
              <span className="h-3 w-px bg-white/15 hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
                Financial-grade compliance
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE — ORIGINAL ANIMATION (unchanged, just recolored) */}
          <motion.div
            variants={heroItem}
            className="relative order-1 lg:order-2 w-full max-w-md rotate-4 mx-auto lg:mx-0"
          >
            <div className="h-[300px] lg:h-[480px] relative">
              {/* Outer container */}
              <motion.div className="relative h-full overflow-hidden rounded-3xl border border-white/10  glass-card">

                {/* Background gradient + noise */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#02061732] via-black to-black" />
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Header label */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse" />
                  LIVE EXTRACTION • SAMPLE INVOICE
                </div>

                {/* Floating glass-card */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center px-4"
                  animate={{ y: [0, -6, 0], opacity: [0.95, 1, 0.95] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="glass-card w-full max-w-lg p-6 flex flex-col gap-5 rounded-2xl
                        bg-[#0360A7]/30 border border-white/10 backdrop-blur-xl shadow-xl">

                    {/* Top Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                          AI EXTRACTION ENGINE
                        </p>
                        <p className="text-sm font-semibold text-white">
                          Live Invoice Parsing
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs text-[#38BDF8] bg-[#38BDF8]/20 px-2 py-1 rounded-full">
                        <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse" />
                        98.2% Accuracy
                      </span>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-3 text-center">
                      {[
                        ["Fields", "24", "text-[#87CBFF]"],
                        ["Confidence", "High", "text-[#38BDF8]"],
                        ["Latency", "1.4s", "text-[#0EA5E9]"],
                        ["Processed Docs", "1123", "text-[#22D3EE]"],
                      ].map(([label, value, color]) => (
                        <div
                          key={label}
                          className="rounded-xl px-3 py-2 bg-white/5 border border-white/10 flex flex-col items-center justify-center"
                        >
                          <p className="text-xs text-white/50">{label}</p>
                          <p className={`text-sm font-semibold ${color}`}>{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Extracted Fields List */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        ["Vendor", "Schneider Electric"],
                        ["Invoice Number", "#INV-20451"],
                        ["Total Amount", "€48,920.00"],
                        ["Tax Amount", "€3,912.00"],
                        ["PO Reference", "PO-883920"],
                        ["Due Date", "25 Aug 2024"],
                        ["Project Code", "PRJ-7723"],
                        ["Payment Status", "Pending"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-white/80"
                        >
                          <span className="text-white/50">{label}</span>
                          <span className="font-medium text-white">{value}</span>
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
