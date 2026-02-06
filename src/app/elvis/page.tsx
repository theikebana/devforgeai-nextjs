"use client";

import Navbar from "@/components/Navbar";
import ElvisHero from "@/components/ElvisHero";
import ElvisOverview from "@/components/ElvisOverview";
import ElvisHowItWorks from "@/components/ElvisHowItWorks";
import ElvisStatsSection from "@/components/ElvisStatsSection";
import ElvisKeyBenefits from "@/components/ElvisKeyBenefits";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";

export default function ElvisPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden bg-[#020617]">
      <Navbar />
      <main>
        <ElvisHero />
        <ElvisOverview />
        <div className="max-w-7xl mx-auto rounded-4xl border-2 mt-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <ElvisHowItWorks />
          <ElvisStatsSection />
        </div>
        <ElvisKeyBenefits />
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
