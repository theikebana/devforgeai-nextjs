"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoogleMindHero from "@/components/MoogleMindHero";
import MoogleMindOverview from "@/components/MoogleMindOverview";
import MoogleMindHowItWorks from "@/components/MoogleMindHowItWorks";
import MoogleMindKeyBenefits from "@/components/MoogleMindKeyBenefits";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import CallToAction from "@/components/CallToAction";

export default function MoogleMindPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <MoogleMindHero />
        <MoogleMindOverview />
        <div className="max-w-7xl mx-auto rounded-4xl border-2  overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <MoogleMindHowItWorks />
        </div>
        <MoogleMindKeyBenefits />
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

