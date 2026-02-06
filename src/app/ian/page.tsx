"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IanPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden bg-[#020617]">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/5 px-3 py-1 text-xs text-sky-100/90">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="uppercase tracking-[0.18em] text-[10px]">
              IAN · Coming soon
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-white mb-4">
            Manage all Azure services from{" "}
            <span className="bg-gradient-to-r from-sky-300 via-emerald-300 to-sky-200 bg-clip-text text-transparent">
              one intelligent dashboard
            </span>
            .
          </h1>

          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mb-8">
            IAN (Infrastructure Analysis Navigator) will be your unified pane of
            glass for Azure: performance, cost, and reliability signals,
            surfaced in real time and translated into clear actions for your
            team.
          </p>

          <div className="rounded-3xl border border-white/10 bg-[#020617]/60 backdrop-blur-xl p-5 sm:p-6 lg:p-7">
            <h2 className="text-base md:text-lg font-medium text-white mb-3">
              Preview of IAN capabilities
            </h2>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Centralized visibility across App Services, VMs, storage, and more.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Smart alerts tuned to noisy real-world Azure environments.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Insight cards that explain impact in language product teams understand.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

