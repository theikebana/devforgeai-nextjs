"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import ViraHero from "@/components/ViraHero";
import ViraOverview from "@/components/ViraOverview";
import ViraHowItWorks from "@/components/ViraHowItWorks";
import ViraKeyBenefits from "@/components/ViraKeyBenefits";
import ViraComplianceSection from "@/components/ViraComplianceSection";

export default function ViraPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <ViraHero />
        <ViraOverview />
        <div className="max-w-7xl mx-auto rounded-4xl border-2 mt-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <ViraHowItWorks />
        </div>
      
        <ViraKeyBenefits />
        <ViraComplianceSection />
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
