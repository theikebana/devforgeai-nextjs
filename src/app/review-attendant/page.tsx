"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import ReviewAttendantHero from "@/components/ReviewAttendantHero";
import ReviewAttendantOverview from "@/components/ReviewAttendantOverview";
import HowToolWorksSection, { HowToolWorksSectionProps } from "@/components/HowToolWorksSection";
import { LayoutDashboard, Plug, Brain, MessageSquare, MessageSquareText, BarChart3 } from "lucide-react";
import VerticalTimeline from "@/components/VerticalTimeline";

const viraHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Connect your platforms",
    description:
      "Seamlessly connect all your platforms and data sources in one place to start collecting real-time signals and interactions.",
    icon: Plug, // or Link / Network icon
  },
  {
    label: "02",
    title: "AI sentiment analysis",
    description:
      "Our AI analyzes conversations and signals across channels to understand sentiment, intent, and emerging trends instantly.",
    icon: Brain, // or Sparkles / Activity icon
  },
  {
    label: "03",
    title: "Unified dashboard",
    description:
      "View insights, analytics, and sentiment data from all platforms in a single unified dashboard with clear visual summaries.",
    icon: LayoutDashboard, // or BarChart icon
  },
  {
    label: "04",
    title: "Respond & engage",
    description:
      "Take action directly from the dashboard—respond to users, engage conversations, and keep data continuously updated.",
    icon: MessageSquare, // or Send / RefreshCw icon
  },
];

const reviewAttendantBenefits = [
  {
    icon: LayoutDashboard,
    title: "Unified dashboard",
    description:
      "Manage Yelp, Facebook, Google, and Twitter reviews from a single portal. No more switching platforms or missing critical feedback.",
  },
  {
    icon: Brain,
    title: "AI sentiment analysis",
    description:
      "Automatically classify reviews as positive, neutral, or negative so you can prioritize responses that need immediate attention.",
  },
  {
    icon: MessageSquareText,
    title: "Personalized response generation",
    description:
      "Generate on-brand, context-aware replies that help you respond faster while maintaining a consistent voice and quality.",
  },
  {
    icon: BarChart3,
    title: "Performance analytics",
    description:
      "Track response rates, sentiment trends, and reputation growth over time with analytics that scale as your review volume grows.",
  },
];

export default function ReviewAttendantPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <ReviewAttendantHero />
        <ReviewAttendantOverview />

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  rounded-3xl 2xl:rounded-4xl  border border-white/5 my-12 lg:my-16 xl:my-20 2xl:my-24 overflow-hidden                    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
 ">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From scattered reviews to <br />one managed reputation.

              </>
            }
            description="Connect your review platforms, let AI classify sentiment, and manage responses from a unified dashboard. Real-time alerts and analytics keep your reputation strong."
            steps={viraHowItWorksSteps}
          />
        </div>


       <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  py-12 lg:py-16  overflow-hidden                   
 ">
       <VerticalTimeline
          badge="Key benefits"
          heading="Everything you need for review management and reputation"
          subheading="Review Attendant brings multi-platform reviews, AI-driven sentiment analysis, and personalized responses together so you can maintain a strong online reputation through timely customer engagement."
          items={reviewAttendantBenefits}
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
