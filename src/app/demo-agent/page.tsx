"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import DemoAgentHero from "@/components/DemoAgentHero";

import ToolOverviewSection from "@/components/Organisms/ToolOverviewSection";
import { ToolOverviewSectionProps } from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import {
  FileText,
  MessageCircle,
  Mic,
  Play,
  RefreshCw,
  Video,
  Zap,
} from "lucide-react";
import PulseSection from "@/components/PulseSection";
import ShineCardsSection from "@/components/ShineCardsSection";

const demoAgentSteps: ToolOverviewSectionProps["steps"] = [
  {
    title: "Watch & capture",
    description:
      "STAGE watches real user flows on your web portal and captures each step to build an accurate demo sequence.",
    status: "active",
  },
  {
    title: "Generate demo flow",
    description:
      "Turns captured steps into a clean, runnable walkthrough that runs end-to-end without manual setup.",
    status: "idle",
  },
  {
    title: "Narration + AI voice",
    description:
      "Pairs each step with written narration and natural AI voice (MP3) with timing that matches the demo.",
    status: "idle",
  },
  {
    title: "Run demo & Live Q&A",
    description:
      "Deliver consistent, repeatable demos and handle technical and non-technical questions in real time.",
    status: "idle",
  },
];

const demoAgentHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Watch & capture",
    description:
      "STAGE watches real user flows on your web portal and captures each step to build an accurate demo sequence.",
    icon: Video,
  },
  {
    label: "02",
    title: "Generate demo flow",
    description:
      "Turns captured steps into a clean, runnable walkthrough that runs end-to-end without manual setup.",
    icon: Play,
  },
  {
    label: "03",
    title: "Narration + AI voice",
    description:
      "Pairs each step with written narration and natural AI voice (MP3) with timing that matches the demo.",
    icon: Mic,
  },
  {
    label: "04",
    title: "Run demo & Live Q&A",
    description:
      "Deliver consistent, repeatable demos and handle technical and non-technical questions in real time.",
    icon: MessageCircle,
  },
];

const pulseCenterData = {
  center: {
    title: "STAGE Engine",
    subtitle: "Demo automation core",
  },
  items: [
    { id: 1, icon: Video, label: "Capture flows" },
    { id: 2, icon: Mic, label: "AI narration" },
    { id: 3, icon: RefreshCw, label: "Auto-sync" },
    { id: 4, icon: MessageCircle, label: "Live Q&A" },
    { id: 5, icon: FileText, label: "Docs-driven" },
    { id: 6, icon: Zap, label: "One-click run" },
  ],
};

const keyFeatures = [
  {
    icon: Play,
    name: "One-click runnable walkthroughs",
    description:
      "Auto-build polished, live-like demos that run end-to-end without manual setup.",
  },
  {
    icon: Mic,
    name: "AI voice narration, auto-synced",
    description:
      "Natural narration per step with MP3 voice and timing that matches the audio.",
  },
  {
    icon: FileText,
    name: "Docs-driven control & consistency",
    description:
      "Your documentation governs what's shown, emphasized, and explained—no hardcoding.",
  },
  {
    icon: MessageCircle,
    name: "Intelligent Live Q&A",
    description:
      "Handles both technical and non-technical questions in real time during the demo, ensuring clear understanding for every audience.",
  },
];

export default function DemoAgentPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <DemoAgentHero />
        <ToolOverviewSection
          badge="Demo Automation — Powered by STAGE"
          accent="emerald"
          title={
            <>
              STAGE — Scripted Tour Automation & Generation Engine{" "}
              <br />
              <span className="text-emerald-400">
                Live-like, narrated product demos
              </span>
            </>
          }
          description="Turn any web portal into a live-like, narrated product demo—automatically. STAGE watches real user flows, captures each step, generates a clean demo flow, and pairs it with written narration and AI voice so your demos feel human, consistent, and repeatable."
          steps={demoAgentSteps}
          footerStatus="Prototyping stage · No screenshots yet"
        />

        <div className="max-w-7xl mx-auto rounded-4xl border-2 my-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From real user flows to polished, narrated demos.
              </>
            }
            description="STAGE connects to your web portal, captures how users move through it, builds a runnable walkthrough, and adds written narration plus AI voice—so every demo is consistent and repeatable, with live Q&A for every audience."
            steps={demoAgentHowItWorksSteps}
          />
        </div>

        <PulseSection
          center={pulseCenterData.center}
          items={pulseCenterData.items}
          sectionTitle="How STAGE Works"
          sectionDescription="STAGE operates as an automation layer that turns your product into a scripted, narrated experience. It captures real flows, generates clean demo sequences, syncs them with AI voice, and keeps everything aligned with your documentation—so demos are human, consistent, and repeatable, with intelligent live Q&A for every audience."
        />

        <ShineCardsSection
          eyebrow="Key features"
          title="Everything you need for world-class product demos"
          subtitle="One-click walkthroughs, AI narration, docs-driven control, and intelligent live Q&A—so your demos feel human and scale without the manual work."
          items={keyFeatures}
          columns={4}
          backgroundClass="bg-[#07090E]"
        />

        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
