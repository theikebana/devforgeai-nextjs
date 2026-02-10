"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsInnerPages from "@/components/TestimonialsInnerPages";
import ElvisHero from "@/components/ElvisHero";

import ToolOverviewSection from "@/components/Organisms/ToolOverviewSection";
import { ToolOverviewSectionProps } from "@/components/Organisms/ToolOverviewSection";
import HowToolWorksSection, {
  HowToolWorksSectionProps,
} from "@/components/HowToolWorksSection";
import {
  BarChart3,
  Mail,
  Search,
  UserPlus,
  Users,
  Workflow,
  Zap,
  LineChart,
  Target,
  Bell,
} from "lucide-react";
import PulseSection from "@/components/PulseSection";
import ShineCardsSection from "@/components/ShineCardsSection";

const elvisSteps: ToolOverviewSectionProps["steps"] = [
  {
    title: "Discover & ingest job leads",
    description:
      "ELVIS aggregates job leads from your configured sources and filters them by keywords so reps only see opportunities that match their focus.",
    status: "active",
  },
  {
    title: "Assign, track & collaborate",
    description:
      "Managers assign leads to reps; status updates are aggregated per lead so multiple reps can work the same opportunity without conflicts.",
    status: "idle",
  },
  {
    title: "AI insights & automation",
    description:
      "AI enriches job descriptions, tracks technology trends and keyword performance, and sends automated notifications and weekly reports.",
    status: "idle",
  },
  {
    title: "Act with full visibility",
    description:
      "One platform for discovery, assignment, and insights—role-based access keeps everyone focused while managers get real-time visibility.",
    status: "idle",
  },
];

const elvisHowItWorksSteps: HowToolWorksSectionProps["steps"] = [
  {
    label: "01",
    title: "Discover & ingest leads",
    description:
      "ELVIS aggregates job leads from your configured sources and filters them by keywords so reps only see opportunities that match their focus.",
    icon: Search,
  },
  {
    label: "02",
    title: "Assign, track & collaborate",
    description:
      "Managers assign leads to reps; status updates are aggregated per lead so multiple reps can work the same opportunity without conflicts.",
    icon: UserPlus,
  },
  {
    label: "03",
    title: "AI insights & automation",
    description:
      "AI enriches job descriptions, tracks technology trends and keyword performance, and sends automated notifications and weekly reports.",
    icon: BarChart3,
  },
  {
    label: "04",
    title: "Full visibility & control",
    description:
      "Role-based access for admins, managers, and sales reps. Real-time visibility into team activity, lead progress, and performance metrics.",
    icon: Workflow,
  },
];

const pulseCenterData = {
  center: {
    title: "ELVIS Core",
    subtitle: "Lead intelligence engine",
  },
  items: [
    { id: 1, icon: Search, label: "Keyword filter" },
    { id: 2, icon: Users, label: "Role-based access" },
    { id: 3, icon: Zap, label: "AI enrichment" },
    { id: 4, icon: Bell, label: "Notifications" },
    { id: 5, icon: LineChart, label: "Analytics" },
    { id: 6, icon: Target, label: "Assignment" },
  ],
};

const keyBenefits = [
  {
    icon: Zap,
    name: "Keyword-driven automation",
    description:
      "Leads are filtered by assigned keywords so reps only see opportunities that match their focus—no more noise.",
  },
  {
    icon: Users,
    name: "Role-based workflows",
    description:
      "Admins, managers, and sales reps each get the right view and actions. Assign, reassign, and track with full history.",
  },
  {
    icon: LineChart,
    name: "AI-powered analytics",
    description:
      "Job description enrichment, technology trends, and keyword performance over time—all in one place.",
  },
  {
    icon: Mail,
    name: "Automated notifications",
    description:
      "New lead alerts and weekly performance reports keep the team responsive without manual follow-ups.",
  },
];

export default function ElvisPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white overflow-hidden">
      <Navbar />
      <main>
        <ElvisHero />
        <ToolOverviewSection
          badge="Job Leads & Analytics — Powered by ELVIS"
          accent="sky"
          title={
            <>
              ELVIS (Enhanced Lead Virtual Intelligent System) <br />
              <span className="text-sky-400">
                Job Leads Management & Analytics
              </span>
            </>
          }
          description="ELVIS centralizes job lead discovery, assignment, tracking, and analytics for sales teams by combining keyword-driven automation, role-based workflows, and AI-powered insights into a single platform."
          steps={elvisSteps}
          footerStatus="Leads ingested · Role-based workflows active"
        />

        <div className="max-w-7xl mx-auto rounded-4xl border-2 my-12 overflow-hidden border-gray-900 shadow-xl shadow-gray-900/50">
          <HowToolWorksSection
            eyebrow="How it works"
            accent="sky"
            heading={
              <>
                From scattered leads to one command center.
              </>
            }
            description="ELVIS connects discovery, assignment, and analytics in one workflow. Role-based access keeps everyone focused on their pipeline while managers get real-time visibility and AI-driven insights."
            steps={elvisHowItWorksSteps}
          />
        </div>

        <PulseSection
          center={pulseCenterData.center}
          items={pulseCenterData.items}
          sectionTitle="How ELVIS Works"
          sectionDescription="ELVIS operates as a lead intelligence layer for sales teams. It ingests job leads from your sources, filters by keywords, supports role-based assignment and status aggregation, and delivers AI-powered enrichment, technology trends, and automated notifications—so your team can focus on closing deals instead of chasing leads across spreadsheets and siloed tools."
        />

        <ShineCardsSection
          eyebrow="Key benefits"
          title="Everything your sales team needs in one platform"
          subtitle="ELVIS unifies discovery, assignment, tracking, and insights so you can close more deals with less manual work."
          items={keyBenefits}
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
