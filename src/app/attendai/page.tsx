"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import AttendAIHero from "@/components/AttendAIHero";
import AttendAIOverview from "@/components/AttendAIOverview";
import HowToolWorksSection from "@/components/HowToolWorksSection";
import { BarChart3, LayoutDashboard, MessageSquare, MessageSquareText, Plug } from "lucide-react";
import { Brain } from "lucide-react";
import { HowToolWorksSectionProps } from "@/components/HowToolWorksSection";
import VerticalTimeline from "@/components/VerticalTimeline";


const viraHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Connect your IP cameras",
    description:
      "Seamlessly connect all your IP cameras and data sources in one place to start collecting real-time signals and interactions.",
    icon: Plug, // or Link / Network icon
  },
  {
    label: "02",
    title: "AI face detection",
    description:
      "Our AI detects faces and logs IN/OUT times automatically and flag false or unidentified images.",
    icon: Brain, // or Sparkles / Activity icon
  },
  {
    label: "03",
    title: "Dashboard & reports",
    description:
      "View daily attendance status, generate reports by week, month, or custom range, and export detailed IN/OUT times with user images.",
    icon: LayoutDashboard, // or BarChart icon
  },
  {
    label: "04",
    title: "Automatic reporting",
    description:
      "Automatically flag false or unidentified images and generate reports for false or unidentified images.",
    icon: MessageSquare, // or Send / RefreshCw icon  
  },
];

const attendAIBenefits = [
  {
    icon: LayoutDashboard,
    title: "Dashboard & reports",
    description:
      "View daily attendance status, generate reports by week, month, or custom range, and export detailed IN/OUT times with user images.",
  },
  {
    icon: Brain,
    title: "AI face detection",
    description:
      "Our AI detects faces and logs IN/OUT times automatically and flag false or unidentified images.",
  },
  {
    icon: MessageSquareText,
    title: "Automatic reporting",
    description:
      "Automatically flag false or unidentified images and generate reports for false or unidentified images.",
  },
  {
    icon: BarChart3,
    title: "SaaS-ready architecture",
    description:
      "Scalable multi-tenant platform with pricing plans. Refined UI across Home, About Us, and feature pages for better usability and performance.",
  },
];
export default function AttendAIPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <AttendAIHero />
        <AttendAIOverview />

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  rounded-3xl 2xl:rounded-4xl  border border-white/5 my-10 lg:my-12 2xl:my-12 overflow-hidden                    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
 ">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From manual tracking to <br /> automated attendance.

              </>
            }
            description="Connect your IP cameras, let AI detect faces, and manage attendance from a unified dashboard. Real-time alerts and analytics keep your attendance accurate."
            steps={viraHowItWorksSteps}
          />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  py-12 lg:py-16  overflow-hidden                   
 ">
          <VerticalTimeline
            badge="Key benefits"
            heading="Everything you need for automated attendance"
            subheading="AttendAI brings computer vision, IP cameras, and clear reporting together so you get accurate attendance without manual tracking or unreliable punch cards."
            items={attendAIBenefits}
            accentColorClass="emerald"
          />
        </div>

        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

