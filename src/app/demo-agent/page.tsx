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
      "STAGE watches real user flows on your web portal and captures each step as users navigate—no manual scripting required.",
    status: "active",
  },
  {
    title: "Generate demo flow",
    description:
      "Captured steps are turned into a clean, repeatable demo flow that runs end-to-end without manual setup.",
    status: "idle",
  },
  {
    title: "Written narration + AI voice",
    description:
      "Each step gets written narration and AI-generated MP3 voice with timing that matches the audio for a human, consistent feel.",
    status: "idle",
  },
  {
    title: "Run & present",
    description:
      "One-click runnable walkthroughs that feel live-like and repeatable, with optional Intelligent Live Q&A during the demo.",
    status: "idle",
  },
];

const demoAgentHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Capture user flows",
    description:
      "Real user sessions are recorded; STAGE extracts steps and structure from how people actually use your portal.",
    icon: Video,
  },
  {
    label: "02",
    title: "Auto-build demo flow",
    description:
      "Polished, live-like demos are generated from captured flows—end-to-end walkthroughs that run with one click.",
    icon: Zap,
  },
  {
    label: "03",
    title: "Narration & AI voice",
    description:
      "Natural narration per step with MP3 voice and timing that matches the audio, so demos feel human and consistent.",
    icon: Mic,
  },
  {
    label: "04",
    title: "Docs-driven control",
    description:
      "Your documentation governs what's shown, emphasized, and explained—no hardcoding. Live Q&A handles technical and non-technical questions in real time.",
    icon: FileText,
  },
];

const pulseCenterData = {
  center: {
    title: "STAGE Engine",
    subtitle: "Scripted Tour Automation & Generation",
  },
  items: [
    { id: 1, icon: Video, label: "Watch flows" },
    { id: 2, icon: RefreshCw, label: "Capture steps" },
    { id: 3, icon: Zap, label: "Generate demo" },
    { id: 4, icon: Mic, label: "Narration" },
    { id: 5, icon: Play, label: "AI voice" },
    { id: 6, icon: MessageCircle, label: "Live Q&A" },
  ],
};

const keyFeatures = [
  {
    icon: Play,
    name: "One-click runnable walkthroughs",
    description:
      "Auto-build polished, live-like demos that run end-to-end without manual setup—turn any web portal into a repeatable product demo.",
  },
  {
    icon: Mic,
    name: "AI voice narration, auto-synced",
    description:
      "Natural narration per step with MP3 voice and timing that matches the audio so your demos feel human and consistent.",
  },
  {
    icon: FileText,
    name: "Docs-driven control & consistency",
    description:
      "Your documentation governs what's shown, emphasized, and explained—no hardcoding. Demos stay aligned with your docs.",
  },
  {
    icon: MessageCircle,
    name: "Intelligent Live Q&A",
    description:
      "Handles both technical and non-technical questions in real time during the demo, ensuring clear understanding for every audience.",
  },
  {
    icon: Video,
    name: "Live-like, repeatable demos",
    description:
      "STAGE turns real user flows into scripted tours that feel live—human, consistent, and repeatable every time.",
  },
  {
    icon: Zap,
    name: "Automated generation",
    description:
      "Watch real flows, capture steps, generate a clean demo flow, and pair it with written narration and AI voice—all automatically.",
  },
];

export default function DemoAgentPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <DemoAgentHero />
        <ToolOverviewSection
          badge="Scripted Tour Automation & Generation Engine — STAGE"
          accent="emerald"
          title={
            <>
              STAGE — Turn any web portal into a live-like, narrated product demo{" "}
              <br />
              <span className="text-emerald-400">
                Automatically. Watch flows, capture steps, generate demos + AI voice.
              </span>
            </>
          }
          description="STAGE watches real user flows, captures each step, generates a clean demo flow, and pairs it with written narration and AI voice so your demos feel human, consistent, and repeatable. One-click runnable walkthroughs, auto-synced AI voice narration, docs-driven control, and Intelligent Live Q&A for every audience."
          steps={demoAgentSteps}
          footerStatus="Live-like demos · Docs-driven · AI voice + Live Q&A"
        />

        <div className="max-w-7xl mx-auto rounded-4xl border-2 my-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From real user flows to polished, narrated walkthroughs.
              </>
            }
            description="STAGE captures how users move through your portal, auto-builds a demo flow, adds written narration and AI voice with matching timing, and lets your documentation govern what's shown. Run one-click walkthroughs and handle technical and non-technical questions in real time with Intelligent Live Q&A."
            steps={demoAgentHowItWorksSteps}
          />
        </div>

        <PulseSection
          center={pulseCenterData.center}
          items={pulseCenterData.items}
          sectionTitle="How STAGE Works"
          sectionDescription="STAGE turns any web portal into a live-like, narrated product demo—automatically. It watches real user flows, captures each step, generates a clean demo flow, and pairs it with written narration and AI voice so your demos feel human, consistent, and repeatable. Docs drive what's shown; Live Q&A keeps every audience in the loop."
        />

        <ShineCardsSection
          eyebrow="Key features"
          title="Live-like demos, human and repeatable"
          subtitle="One-click runnable walkthroughs, AI voice narration auto-synced to steps, docs-driven control for consistency, and Intelligent Live Q&A so technical and non-technical audiences get clear answers in real time."
          items={keyFeatures}
          columns={3}
          backgroundClass="bg-[#07090E]"
        />

        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
