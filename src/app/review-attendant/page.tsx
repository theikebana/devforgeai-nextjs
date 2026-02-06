"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import ReviewAttendantHero from "@/components/ReviewAttendantHero";
import ReviewAttendantOverview from "@/components/ReviewAttendantOverview";
import ReviewAttendantHowItWorks from "@/components/ReviewAttendantHowItWorks";
import ReviewAttendantStatsSection from "@/components/ReviewAttendantStatsSection";
import ReviewAttendantKeyBenefits from "@/components/ReviewAttendantKeyBenefits";

export default function ReviewAttendantPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <ReviewAttendantHero />
        <ReviewAttendantOverview />
        <div className="max-w-7xl mx-auto rounded-4xl border-2 mt-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <ReviewAttendantHowItWorks />
          <ReviewAttendantStatsSection />
        </div>
        <ReviewAttendantKeyBenefits />
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
