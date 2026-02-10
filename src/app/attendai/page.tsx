"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import AttendAIHero from "@/components/AttendAIHero";
import AttendAIOverview from "@/components/AttendAIOverview";
import AttendAIHowItWorks from "@/components/AttendAIHowItWorks";
import AttendAIStatsSection from "@/components/AttendAIStatsSection";
import AttendAIKeyBenefits from "@/components/AttendAIKeyBenefits";

export default function AttendAIPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <AttendAIHero />
        <AttendAIOverview />
        <div className="max-w-7xl mx-auto rounded-4xl border-2 my-12 lg:my-24 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <AttendAIHowItWorks />
          <AttendAIStatsSection />
        </div>
        <AttendAIKeyBenefits />
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

