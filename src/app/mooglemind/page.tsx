"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoogleMindHero from "@/components/MoogleMindHero";
import ToolOverviewSection from "@/components/Organisms/ToolOverviewSection";
import MoogleMindOverview from "@/components/MoogleMindOverview";
import MoogleMindKeyBenefits from "@/components/MoogleMindKeyBenefits";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import CallToAction from "@/components/CallToAction";
import HowToolWorksSection from "@/components/HowToolWorksSection";
import { AlertTriangle, FileCheck, Scan, ShieldCheck } from "lucide-react";
import { HowToolWorksSectionProps } from "@/components/HowToolWorksSection";


const moogleMindHowItWorksSteps: HowToolWorksSectionProps['steps'] = [
  {
    label: "01",
    title: "Ingest & connect",
    description:
      "Securely connect docs, wikis, tickets, databases, and internal APIs into a unified knowledge graph.",
    icon: Scan,
  },
  {
    label: "02",
    title: "Index & understand",
    description:
      "MoogleMind chunks, embeds, and enriches content with metadata so agents can answer with real context.",
    icon: AlertTriangle,
  },
  {
    label: "03",
    title: "Search & chat",
    description:
      "Teams search naturally, ask questions, and get grounded answers with citations across all connected data.",
    icon: FileCheck,
  },
  {
    label: "04",
    title: "Deploy agents",
    description:
      "Ship custom agents for support, engineering, and operations that run on your infra and respect your rules.",
    icon: ShieldCheck,
  },
];

export default function MoogleMindPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <MoogleMindHero />
        <ToolOverviewSection
          badge="How it works"
          accent="emerald"
          title={
            <>
              From data sources to answers — <span className="text-emerald-400">one pipeline</span>
            </>
          }
          description="MoogleMind connects your enterprise data, indexes it for unified search, and lets you build custom AI agents that run on your infrastructure with full control."
          steps={[
            {
              title: "Connect sources",
              description: "Ingest documents, databases, and APIs through built-in connectors and keep everything in sync.",
              status: "active",
            },
            {
              title: "Unified search & index",
              description: "One search surface across all connected data with semantic understanding and access control.",
              status: "active",
            },
            {
              title: "Build custom agents",
              description: "Define agents with your rules, tools, and workflows so they answer in your context.",
              status: "active",
            },
            {
              title: "Deploy on your terms",
              description: "Self-host for compliance and data sovereignty; scale with your organization.",
              status: "idle",
            },
          ]}
          footerStatus="Pipeline runs continuously — search and agents stay up to date."
        />
        <MoogleMindOverview />
       


        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto  rounded-3xl 2xl:rounded-4xl  border border-white/5   overflow-hidden                    shadow-[inset_0_-1px_2px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.20)]
 ">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="emerald"
            heading={
              <>
                From scattered knowledge to <br/>unified, AI-ready search.
              </>
            }
            description="MoogleMind plugs into your existing stack, builds a search-ready index on top of it, and exposes everything through secure search, chat, and agents."
            steps={moogleMindHowItWorksSteps}
          />
        </div>
        <MoogleMindKeyBenefits />
        <TestimonialsInnerPages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

