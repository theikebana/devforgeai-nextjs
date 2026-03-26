"use client";
import Navbar from "@/components/Navbar";
import RexHero from "@/components/RexHero";
import RexOverview from "@/components/RexOverview";
import RexHowItWorks from "@/components/RexHowItWorks";
import RexScoreSection from "@/components/RexScoreSection";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";

export default function RexPage() {
  return (
    <div className="min-h-screen  text-white overflow-hidden bg-[#07090E]">
      <Navbar />
      <main>
        <RexHero />
        <RexOverview />
        <div className="max-w-7xl mx-auto rounded-4xl border-2 mt-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <RexHowItWorks />
          <RexScoreSection />
        </div>

        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

