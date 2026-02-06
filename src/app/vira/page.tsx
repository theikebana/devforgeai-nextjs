"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ViraPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden bg-[#020617]">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-100/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-[0.18em] text-[10px]">
              VIRA · Coming soon
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-white mb-4">
            Cloud VIRA automates Azure security with{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              continuous, enterprise-grade risk scanning
            </span>
            .
          </h1>

          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mb-8">
            We&apos;re preparing a dedicated VIRA experience: deep Azure posture
            visibility, automated misconfiguration detection, and compliance
            reporting in a single, opinionated dashboard. Join the waitlist and
            be first in line when it ships.
          </p>

          <div className="rounded-3xl border border-white/10 bg-[#020617]/60 backdrop-blur-xl p-5 sm:p-6 lg:p-7">
            <h2 className="text-base md:text-lg font-medium text-white mb-3">
              What you can expect at launch
            </h2>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Continuous scans for misconfigurations and exposed risks.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Policy-backed checks mapped to common compliance frameworks.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Actionable fix guidance that fits real-world Azure teams.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

